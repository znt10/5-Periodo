from django.db import models

class BaseModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_deleted = models.BooleanField(default=False)

    class Meta:
        abstract = True


class Usuario(BaseModel):
    nome = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    senha = models.CharField(max_length=255)
    

class Loja(BaseModel):
    nome_loja = models.CharField(max_length=100)
    endereco = models.CharField(max_length=255)


class Produto(BaseModel):
    nome_produto = models.CharField(max_length=100)
    codigo = models.CharField(max_length=50)
    unidade_medida = models.CharField(max_length=20)
    ativo = models.BooleanField(default=True)


class Pedido(BaseModel):
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    loja = models.ForeignKey(Loja, on_delete=models.CASCADE)
    status = models.CharField(max_length=50)
    data_pedido = models.DateTimeField(auto_now_add=True)

    produtos = models.ManyToManyField(
        Produto,
        through='ItemPedido',
        related_name='pedidos'
    )


class ItemPedido(BaseModel):
    pedido = models.ForeignKey(Pedido, on_delete=models.CASCADE, related_name='itens')
    produto = models.ForeignKey(Produto, on_delete=models.CASCADE)
    quantidade = models.IntegerField()


class Estoque(BaseModel):
    produto = models.ForeignKey(Produto, on_delete=models.CASCADE)
    loja = models.ForeignKey(Loja, on_delete=models.CASCADE)
    quantidade_atual = models.IntegerField()
    quantidade_minima = models.IntegerField()
