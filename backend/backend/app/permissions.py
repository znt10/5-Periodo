from rest_framework.permissions import BasePermission



class IsGerenteOrAdministrador(BasePermission):
    def has_permission(self, request, view):
        return request.user and (request.user.groups.filter(name='Gerente').exists() or request.user.is_superuser)
    



class IsGerenteOrAdministradorOrResponsavel(BasePermission):
    def has_permission(self, request, view):
        user = request.user

        if not user or not user.is_authenticated:
            return False
        
        return (
            user.is_superuser or
            user.groups.filter(name='Gerente').exists() or
            user.groups.filter(name='Responsavel').exists()
        )

    def has_object_permission(self, request, view, obj):
        user = request.user

        # Gerente/admin → tudo
        if user.is_superuser or user.groups.filter(name='Gerente').exists():
            return True

        # Responsável → só o que é dele
        if user.groups.filter(name='Responsavel').exists():
            return obj.usuario == user

        return False