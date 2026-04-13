from rest_framework import serializers
from app.models import Estoque, Pedido, ItemPedido, Produto, Loja
from django.contrib.auth.models import Group
from django.contrib.auth.models import User
from django.db import transaction

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
    class Meta:
        model = User
        fields = ['id', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def validate_password(self, value):
        if len(value) < 6:
            raise serializers.ValidationError("A senha deve conter pelo menos 6 caracteres.")
        return value

    def validate_email(self, value):
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError("Este email já está em uso.")
        return value

    def create(self, validated_data):
        senha = validated_data.pop('password')

        # usa email como username automaticamente
        user = User(
            username=validated_data['email'],
            email=validated_data['email']
        )
        user.set_password(senha)
        user.save()

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
