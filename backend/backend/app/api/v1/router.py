from rest_framework.routers import DefaultRouter
from .viewsets import LojaViewSet, PedidoViewSet, ItemPedidoViewSet, ProdutoViewSet, UsuarioViewSet

router = DefaultRouter()
router.register(r'pedidos', PedidoViewSet)
router.register(r'itens-pedido', ItemPedidoViewSet)
router.register(r'produtos', ProdutoViewSet)
router.register(r'lojas', LojaViewSet)

urlpatterns = router.urls