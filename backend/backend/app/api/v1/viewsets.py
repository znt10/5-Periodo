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


class EstoqueViewSet(viewsets.ModelViewSet):
    queryset = Estoque.objects.all()
    serializer_class = EstoqueSerializer
    permission_classes = [IsAuthenticated, IsGerenteOrAdministrador]

class ProdutoViewSet(viewsets.ModelViewSet):
    queryset = Produto.objects.all()
    serializer_class = ProdutoSerializer
    permission_classes = [IsAuthenticated, IsGerenteOrAdministrador] 


class ItemPedidoViewSet(viewsets.ModelViewSet):
    queryset = ItemPedido.objects.all()
    serializer_class = ItemPedidoSerializer
    permission_classes = [IsAuthenticated, IsGerenteOrAdministradorOrResponsavel]

    # Filtrar ItemPedidos 
    def get_queryset(self):
        user = self.request.user
        # Admin/gerente vê todos
        if user.is_superuser or user.groups.filter(name='Gerente').exists():
            return ItemPedido.objects.all()
        # Usuário responsável vê só os pedidos dele
        return ItemPedido.objects.filter(responsavel=user)
    
    # Criar ItemPedido
    def perform_create(self, serializer):
        user = self.request.user
        # quem cria? qualquer responsável ou gerente/admin
        serializer.save(responsavel=user)
    
    # Permitir atualização apenas para o próprio responsável ou para administradores/gerentes
    def perform_update(self, serializer):
        user = self.request.user
        if not (user.is_superuser or user.groups.filter(name='Gerente').exists()):
            if serializer.instance.responsavel != user:
                raise PermissionDenied("Você só pode atualizar seus próprios ItemPedidos")
        serializer.save()

    # Permitir exclusão apenas para administradores/gerentes - responsável não pode deletar ItemPedido, só atualizar o status
    def perform_destroy(self, instance):
        user = self.request.user
        if not (user.is_superuser or user.groups.filter(name='Gerente').exists()):
            raise PermissionDenied("Apenas gerente/administrador pode deletar ItemPedidos")
        instance.delete() 



class PedidoViewSet(viewsets.ModelViewSet):
    queryset = Pedido.objects.all()
    serializer_class = PedidoSerializer
    permission_classes = [IsAuthenticated, IsGerenteOrAdministradorOrResponsavel]
    # Filtrar pedidos 
    def get_queryset(self):
        user = self.request.user
        # Admin/gerente vê todos
        if user.is_superuser or user.groups.filter(name='Gerente').exists():
            return Pedido.objects.all()
        # Usuário responsável vê só os pedidos dele
        return Pedido.objects.filter(responsavel=user)
    
    # Criar pedido
    def perform_create(self, serializer):
        user = self.request.user
        # quem cria? qualquer responsável ou gerente/admin
        serializer.save(responsavel=user)
    
    # Permitir atualização apenas para o próprio responsável ou para administradores/gerentes
    def perform_update(self, serializer):
        user = self.request.user
        if not (user.is_superuser or user.groups.filter(name='Gerente').exists()):
            if serializer.instance.responsavel != user:
                raise PermissionDenied("Você só pode atualizar seus próprios pedidos")
        serializer.save()

    # Permitir exclusão apenas para administradores/gerentes - responsável não pode deletar pedido, só atualizar o status
    def perform_destroy(self, instance):
        user = self.request.user
        if not (user.is_superuser or user.groups.filter(name='Gerente').exists()):
            raise PermissionDenied("Apenas gerente/administrador pode deletar pedidos")
        instance.delete()

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

    # Permitir a lista apenas para administradores e gerentes, para evitar exposição de dados de outros usuários
    def list(self, request, *args, **kwargs):
        user = request.user
        if user.is_superuser or user.groups.filter(name='Gerente').exists():
            return super().list(request, *args, **kwargs)
        raise PermissionDenied("Não é permitido listar usuários")
    
    # Permitir criação apenas para administradores e gerentes
    def perform_create(self, serializer):
        user = self.request.user
        if not (user.is_superuser or user.groups.filter(name='Gerente').exists()):
            raise PermissionDenied("Apenas gerentes / administradores podem criar usuários")
        serializer.save()

    # Permitir atualização apenas para o próprio usuário ou para administradores/gerentes
    def perform_update(self, serializer):
        user = self.request.user
        # usuário comum só pode atualizar a si mesmo
        if not (user.is_superuser or user.groups.filter(name='Gerente').exists()):
            if serializer.instance != user:
                raise PermissionDenied("Você não pode atualizar outro usuário")
        serializer.save()

    # Permitir exclusão apenas para administradores/gerentes
    def perform_destroy(self, instance):
        user = self.request.user
        # só admin/gerente pode deletar
        if not (user.is_superuser or user.groups.filter(name='Gerente').exists()):
            raise PermissionDenied("Você não pode deletar usuários")
        instance.delete()


