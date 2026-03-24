from rest_framework.routers import DefaultRouter
from .viewsets import PedidoViewSet

router = DefaultRouter()
router.register(r'pedidos', PedidoViewSet)

urlpatterns = router.urls