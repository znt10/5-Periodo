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

from .mixins import ResponsavelOuAdminMixin, ApenasAdminPodeCriarMixin


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
    


class PedidoViewSet(ResponsavelOuAdminMixin, viewsets.ModelViewSet):
    queryset = Pedido.objects.all()
    serializer_class = PedidoSerializer
    permission_classes = [IsAuthenticated, IsGerenteOrAdministradorOrResponsavel]




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