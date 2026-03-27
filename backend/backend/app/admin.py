from django.contrib import admin

from .models import  Loja, Produto, Pedido, ItemPedido, Estoque

admin.site.register(Loja)

admin.site.register(Produto)

admin.site.register(Pedido)

admin.site.register(ItemPedido)
admin.site.register(Estoque)   

