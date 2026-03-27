from rest_framework import viewsets
from app.models import Pedido, ItemPedido,Produto, Loja , Estoque
from .serializers import PedidoSerializer, ItemPedidoSerializer, ProdutoSerializer, UsuarioSerializer, LojaSerializer,EstoqueSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import PermissionDenied
from app.permissions import IsGerenteOrAdministrador, IsGerenteOrAdministradorOrResponsavel
from django.contrib.auth.models import User




class LojaViewSet(viewsets.ModelViewSet):
    queryset = Loja.objects.all()
    serializer_class = LojaSerializer
    permission_classes = [IsAuthenticated, IsGerenteOrAdministrador]

class PedidoViewSet(viewsets.ModelViewSet):
    queryset = Pedido.objects.all()
    serializer_class = PedidoSerializer
    permission_classes = [IsAuthenticated]

class EstoqueViewSet(viewsets.ModelViewSet):
    queryset = Estoque.objects.all()
    serializer_class = EstoqueSerializer
    permission_classes = [IsAuthenticated, IsGerenteOrAdministrador]

class ItemPedidoViewSet(viewsets.ModelViewSet):
    queryset = ItemPedido.objects.all()
    serializer_class = ItemPedidoSerializer
    permission_classes = [IsAuthenticated, IsGerenteOrAdministradorOrResponsavel] 

class ProdutoViewSet(viewsets.ModelViewSet):
    queryset = Produto.objects.all()
    serializer_class = ProdutoSerializer
    permission_classes = [IsAuthenticated, IsGerenteOrAdministrador] 




class UsuarioViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()  
    serializer_class = UsuarioSerializer

    def get_queryset(self):
        user = self.request.user

        # Admin e gerente veem todos
        if user.is_superuser or user.groups.filter(name='Gerente').exists():
            return User.objects.all()

        # Usuário comum só vê ele mesmo
        return User.objects.filter(id=user.id)

    def list(self, request, *args, **kwargs):
        user = request.user

        if user.is_superuser or user.groups.filter(name='Gerente').exists():
            return super().list(request, *args, **kwargs)

        raise PermissionDenied("Não é permitido listar usuários")

    def perform_create(self, serializer):
        user = self.request.user

        if not (user.is_superuser or user.groups.filter(name='Gerente').exists()):
            raise PermissionDenied("Apenas gerentes / administradores podem criar usuários")

        serializer.save()  # 🔐 depende do serializer tratar senha
    



