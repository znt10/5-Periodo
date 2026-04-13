from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import PermissionDenied

from django.contrib.auth.models import User

from app.models import Pedido, ItemPedido, Produto, Loja, Estoque
from .mixins import ApenasAdminPodeCriarMixin, ResponsavelOuAdminMixin
from .serializers import (
    PedidoSerializer,
    ItemPedidoSerializer,
    ProdutoSerializer,
    UsuarioSerializer,
    LojaSerializer,
    EstoqueSerializer
)
from app.permissions import IsGerenteOrAdministrador, IsGerenteOrAdministradorOrResponsavel

# 🔹 Helper
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
                raise PermissionDenied("Você só pode editar seus próprios itens")

        serializer.save()

    def perform_destroy(self, instance):
        user = self.request.user

        if not is_gerente_ou_admin(user):
            raise PermissionDenied("Apenas gerente/admin pode deletar itens")

        instance.delete()


# 🔹 PEDIDO 
class PedidoViewSet(ResponsavelOuAdminMixin, viewsets.ModelViewSet):
    queryset = Pedido.objects.all()
    serializer_class = PedidoSerializer
    permission_classes = [IsAuthenticated, IsGerenteOrAdministradorOrResponsavel]


# 🔹 USUÁRIO
class UsuarioViewSet(ApenasAdminPodeCriarMixin, viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UsuarioSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user

        if is_gerente_ou_admin(user):
            return User.objects.all()

        return User.objects.filter(id=user.id)

    def perform_update(self, serializer):
        user = self.request.user

        if not is_gerente_ou_admin(user):
            if serializer.instance != user:
                raise PermissionDenied("Você não pode editar outro usuário")

        serializer.save()

    def perform_destroy(self, instance):
        user = self.request.user

        if not is_gerente_ou_admin(user):
            raise PermissionDenied("Você não pode deletar usuários")

        instance.delete()