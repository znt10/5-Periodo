from rest_framework import serializers
from app.models import Estoque, Pedido, ItemPedido, Produto, Loja
from django.contrib.auth.models import Group
from django.contrib.auth.models import User



class ItemPedidoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemPedido
        fields = ['produto', 'quantidade']


class PedidoSerializer(serializers.ModelSerializer):
    itens = ItemPedidoSerializer(many=True)

    class Meta:
        model = Pedido
        fields = ['id', 'user', 'loja', 'status', 'data_pedido', 'itens']

    def create(self, validated_data):
        itens_data = validated_data.pop('itens')
        pedido = Pedido.objects.create(**validated_data)

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
    class Meta:
        model = User
        fields = ['id', 'username', 'password']
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
    def validate_username(self, value):
        if User.objects.filter(username=value).exists():
            raise serializers.ValidationError("Este nome de usuário já está em uso.")
        return value
    

    def create(self, validated_data):
        senha = validated_data.pop('password')

        user = User(**validated_data)
        user.set_password(senha) 
        user.save()

        #pega ou cria o grupo
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
