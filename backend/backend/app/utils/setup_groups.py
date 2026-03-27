from django.contrib.auth.models import Group, Permission
from django.contrib.contenttypes.models import ContentType
from app.models import Pedido

# Função para criar os grupos e atribuir as permissões 
# quando o sistema for iniciado para se outra pesssoa usar o sistema sem precisar criar os grupos manualmente no admin

def criar_grupos():
    #Gerente
    gerente, _ = Group.objects.get_or_create(name='Gerente')
    gerente.permissions.set(Permission.objects.all())

    #Responsavel
    responsavel, _ = Group.objects.get_or_create(name='Responsavel')
    content_type = ContentType.objects.get_for_model(Pedido)
    permissoes = Permission.objects.filter(
        content_type=content_type,
        codename__in=[
            'add_pedido',
            'change_pedido',
            'view_pedido',
        ])
    responsavel.permissions.set(permissoes)

