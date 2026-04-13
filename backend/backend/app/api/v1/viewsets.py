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
class ItemPedidoViewSet(ResponsavelOuAdminMixin,viewsets.ModelViewSet):
    queryset = ItemPedido.objects.all()
    serializer_class = ItemPedidoSerializer
    permission_classes = [IsAuthenticated, IsGerenteOrAdministradorOrResponsavel]

    def get_queryset(self):
        user = self.request.user

        if is_gerente_ou_admin(user):
            return ItemPedido.objects.all()

        return ItemPedido.objects.filter(pedido__responsavel=user)



# 🔹 PEDIDO 
class PedidoViewSet(ResponsavelOuAdminMixin, viewsets.ModelViewSet):
    queryset = Pedido.objects.all()
    serializer_class = PedidoSerializer
    permission_classes = [IsAuthenticated, IsGerenteOrAdministradorOrResponsavel]


# 🔹 USUÁRIO
class UsuarioViewSet(ApenasAdminPodeCriarMixin, viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UsuarioSerializer
    permission_classes = [IsAuthenticated,IsGerenteOrAdministrador]