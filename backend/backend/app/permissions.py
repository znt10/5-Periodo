from rest_framework.permissions import BasePermission

class IsGerente(BasePermission):
    def has_permission(self, request, view):
        return request.user and request.user.groups.filter(name='Gerente').exists()

class IsAdministrador(BasePermission):
    def has_permission(self, request, view):
        return request.user and request.user.is_superuser
    
class IsResponsavel(BasePermission):
    def has_permission(self, request, view):
        return request.user and request.user.groups.filter(name='Responsavel').exists()