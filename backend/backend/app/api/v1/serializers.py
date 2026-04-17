from rest_framework import serializers
from app.models import Estoque, Pedido, ItemPedido, Produto, Loja
from django.contrib.auth.models import Group
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model
from django.db import transaction
from rest_framework_simplejwt.serializers import PasswordField
from django.core.exceptions import ValidationError
from django.core.validators import validate_email
from django.contrib.auth.tokens import default_token_generator
from rest_framework_simplejwt.serializers import (
    TokenObtainPairSerializer as JwtTokenObtainPairSerializer,
)
from django.contrib.auth.password_validation import validate_password
from rest_framework_simplejwt.tokens import RefreshToken
from django.utils import timezone

class ItemPedidoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemPedido
        fields = ['produto', 'quantidade']




class PedidoSerializer(serializers.ModelSerializer):
    itens = ItemPedidoSerializer(many=True, required=False)
    data = serializers.SerializerMethodField()
    hora = serializers.SerializerMethodField()
    responsavel = serializers.ReadOnlyField(source='responsavel.username')

    class Meta:
        model = Pedido
        fields = ['id', 'responsavel', 'loja', 'status', 'data', 'hora', 'itens', 'descricao']

    def get_data(self, obj):
        return obj.data_pedido.strftime('%Y-%m-%d')

    def get_hora(self, obj):
        return obj.data_pedido.strftime('%H:%M:%S')

    def validate(self, data):
        itens = data.get('itens', [])

        if not itens:
            raise serializers.ValidationError("O pedido precisa ter pelo menos um item.")

        for item in itens:
            if item['quantidade'] <= 0:
                raise serializers.ValidationError("Quantidade deve ser maior que zero.")

        return data

    @transaction.atomic
    def create(self, validated_data):
        itens_data = validated_data.pop('itens', [])
        user = self.context['request'].user

        pedido = Pedido.objects.create(
            responsavel=user,
            **validated_data
        )

        for item in itens_data:
            ItemPedido.objects.create(
                pedido=pedido,
                produto=item['produto'],
                quantidade=item['quantidade']
            )

        return pedido

class ProdutoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Produto
        fields = ['id', 'nome_produto', 'codigo', 'unidade_medida', 'ativo']

class UsuarioSerializer(serializers.ModelSerializer):
    tipo_usuario = serializers.ChoiceField(
        choices=['responsavel', 'gerente'],
        write_only=True
    )

    class Meta:
        model = User
        fields = ['id','first_name' ,'email', 'password','tipo_usuario']
        extra_kwargs = {'password': {'write_only': True}}

    # Usar o validador de senho do Django que é bem completo
    # Mas tipo ja é um sistema mais do dia a dia e meio que "fechado" nao vejo ter senha muito complexa para responsavel
    # Ficar entrando e Fica "chato de usar"

    """def validate_password(self, value):
        try:
            validate_password(value)
        except DjangoValidationError as e:
            raise serializers.ValidationError(e.messages)
        return value"""
    
    # deixar um mais simples para o responsavel
    def validate_password(self, value):
        if len(value) < 6:
            raise serializers.ValidationError("A senha deve conter pelo menos 6 caracteres.")
        return value
    
    # Validar se o username já existe para evitar erros de integridade no banco
    def validate_email(self, value):
        """
        Verifica se o e-mail pertence ao domínio da faculdade.
        """
        dominio_permitido = "fiponline.edu.br"
        email = value.lower()
        sub = ["ads","med","arq","ec"]

        emails_permitidos = [f"@{sub}.{dominio_permitido}" for sub in sub]

        if not any(email.endswith(dom) for dom in emails_permitidos):

            raise serializers.ValidationError(f"O e-mail deve pertencer pela faculdade")
            

        if User.objects.filter(email=email).exists():
            raise serializers.ValidationError("Este email já está em uso.")
        return value


    def create(self, validated_data):
        senha = validated_data.pop('password')
        email = validated_data.get('email')
        tipo_usuario = validated_data.pop('tipo_usuario')

        user = User(**validated_data)
        user.set_password(senha) 
        user.username = email
        user.save()

        #pega ou cria o grupo
        if tipo_usuario == 'gerente':
            grupo, _ = Group.objects.get_or_create(name='Gerente')
        else:
            grupo, _ = Group.objects.get_or_create(name='Responsavel')

        user.groups.add(grupo)

        return user

class LojaSerializer(serializers.ModelSerializer):
    responsavel_nome = serializers.CharField(source='responsavel.username', read_only=True)

    class Meta:
        model = Loja
        fields = ['id', 'nome_loja', 'endereco', 'responsavel', 'responsavel_nome']

class EstoqueSerializer(serializers.ModelSerializer):
    class Meta:
        model = Estoque
        fields = ['id', 'produto', 'loja', 'quantidade_atual', 'quantidade_minima']



class PasswordResetKeyWebTokenSerializer(serializers.Serializer):
    email = serializers.CharField(write_only=True)

    def validate(self, attrs):
        # validar email
        try:
            validate_email(attrs['email'])
        except:
            raise serializers.ValidationError("Email inválido")

        email = attrs['email']

        # buscar usuário
        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            raise serializers.ValidationError("Usuário com este email não encontrado")

        # opcional (controle extra)
        user.code_date = timezone.now()
        user.save()

        return {
            'user': user.id,
            'email': email,
            'token': default_token_generator.make_token(user)
        }


class PasswordResetWebTokenSerializer(serializers.Serializer):
    id = serializers.CharField(write_only=True)
    email = serializers.CharField(write_only=True)
    token = serializers.CharField(write_only=True)
    new_password = serializers.CharField(write_only=True)
    confirm_password = serializers.CharField(write_only=True)

    def validate(self, attrs):
        token_generator = default_token_generator

        # buscar usuário
        try:
            user = User.objects.get(id=attrs['id'], email=attrs['email'])
        except User.DoesNotExist:
            raise serializers.ValidationError("Usuário não encontrado")

        # validar senha
        if attrs['new_password'] != attrs['confirm_password']:
            raise serializers.ValidationError("As senhas não coincidem")

        validate_password(attrs['new_password'], user)

        # validar token
        if not token_generator.check_token(user, attrs.get('token')):
            raise serializers.ValidationError("Token inválido ou expirado")

        # atualizar senha
        user.is_active = True
        user.set_password(attrs['new_password'])
        user.save()

        # gerar JWT automático
        refresh = RefreshToken.for_user(user)

        return {
            'token': {
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            },
            'user': {
                'id': user.id,
                'email': user.email
            }
        }