from rest_framework import viewsets
from app.models import Pedido, ItemPedido, Produto, Loja, Estoque
from .serializers import (
    PedidoSerializer,
    ItemPedidoSerializer,
    ProdutoSerializer,
    UsuarioSerializer,
    LojaSerializer,
    EstoqueSerializer
)
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import PermissionDenied
from app.permissions import IsGerenteOrAdministrador, IsGerenteOrAdministradorOrResponsavel
from django.contrib.auth.models import User


# 🔹 Helper de permissão
def is_gerente_ou_admin(user):
    return user.is_superuser or user.groups.filter(name='Gerente').exists()


# 🔹 LOJA
class LojaViewSet(viewsets.ModelViewSet):
    queryset = Loja.objects.all()
    serializer_class = LojaSerializer
    permission_classes = [IsAuthenticated, IsGerenteOrAdministrador]


# 🔹 ESTOQUE
class EstoqueViewSet(viewsets.ModelViewSet):
    queryset = Estoque.objects.all()
    serializer_class = EstoqueSerializer
    permission_classes = [IsAuthenticated, IsGerenteOrAdministrador]


# 🔹 PRODUTO
class ProdutoViewSet(viewsets.ModelViewSet):
    queryset = Produto.objects.all()
    serializer_class = ProdutoSerializer
    permission_classes = [IsAuthenticated, IsGerenteOrAdministrador]


# 🔹 ITEM PEDIDO
class ItemPedidoViewSet(viewsets.ModelViewSet):
    queryset = ItemPedido.objects.all()
    serializer_class = ItemPedidoSerializer
    permission_classes = [IsAuthenticated, IsGerenteOrAdministradorOrResponsavel]

    def get_queryset(self):
        user = self.request.user

        if is_gerente_ou_admin(user):
            return ItemPedido.objects.all()

        return ItemPedido.objects.filter(pedido__responsavel=user)

    def perform_create(self, serializer):
        user = self.request.user
        pedido = serializer.validated_data.get('pedido')

        if not pedido:
            raise PermissionDenied("Pedido é obrigatório")

        if not is_gerente_ou_admin(user):
            if pedido.responsavel != user:
                raise PermissionDenied("Você não pode adicionar itens a este pedido")

        serializer.save()

    def perform_update(self, serializer):
        user = self.request.user

        if not is_gerente_ou_admin(user):
            if serializer.instance.pedido.responsavel != user:
                raise PermissionDenied("Você só pode atualizar seus próprios itens")

        serializer.save()

    def perform_destroy(self, instance):
        user = self.request.user

        if not is_gerente_ou_admin(user):
            raise PermissionDenied("Apenas gerente/administrador pode deletar itens")

        instance.delete()


# 🔹 PEDIDO
class PedidoViewSet(viewsets.ModelViewSet):
    queryset = Pedido.objects.all()
    serializer_class = PedidoSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user

        if is_gerente_ou_admin(user):
            return Pedido.objects.all()

        return Pedido.objects.filter(responsavel=user)

    def perform_create(self, serializer):
        serializer.save()

    def perform_update(self, serializer):
        user = self.request.user

        if not is_gerente_ou_admin(user):
            if serializer.instance.responsavel != user:
                raise PermissionDenied("Você só pode atualizar seus próprios pedidos")

        serializer.save()

    def perform_destroy(self, instance):
        user = self.request.user

        if not is_gerente_ou_admin(user):
            raise PermissionDenied("Apenas gerente/administrador pode deletar pedidos")

        instance.delete()


# 🔹 USUÁRIO
class UsuarioViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UsuarioSerializer

    def get_queryset(self):
        user = self.request.user

        if is_gerente_ou_admin(user):
            return User.objects.all()

        return User.objects.filter(id=user.id)

    def list(self, request, *args, **kwargs):
        user = request.user

        if is_gerente_ou_admin(user):
            return super().list(request, *args, **kwargs)

        raise PermissionDenied("Não é permitido listar usuários")

    def perform_create(self, serializer):
        user = self.request.user

        if not is_gerente_ou_admin(user):
            raise PermissionDenied("Apenas gerentes/administradores podem criar usuários")

        serializer.save()

    def perform_update(self, serializer):
        user = self.request.user

        if not is_gerente_ou_admin(user):
            if serializer.instance != user:
                raise PermissionDenied("Você não pode atualizar outro usuário")

        serializer.save()

    def perform_destroy(self, instance):
        user = self.request.user

        if not is_gerente_ou_admin(user):
            raise PermissionDenied("Você não pode deletar usuários")

        instance.delete()