from django.test import TestCase
from django.contrib.auth.models import User
from app.models import Loja, Produto, Pedido, ItemPedido, Estoque


class ModelsTestCase(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(username='tester', password='pass')
        self.loja = Loja.objects.create(
            nome_loja='Loja A',
            endereco='Rua 1',
            responsavel=self.user
        )
        self.produto = Produto.objects.create(
            nome_produto='Produto X',
            codigo='PX',
            unidade_medida='un',
            ativo=True
        )

    def test_item_pedido_str(self):
        pedido = Pedido.objects.create(user=self.user, loja=self.loja, status='novo')
        item = ItemPedido.objects.create(pedido=pedido, produto=self.produto, quantidade=3)

        self.assertIn('3 x Produto X', str(item))
        self.assertIn(f'(Pedido {pedido.id})', str(item))

    def test_pedido_str(self):
        pedido = Pedido.objects.create(user=self.user, loja=self.loja, status='novo')
        ItemPedido.objects.create(pedido=pedido, produto=self.produto, quantidade=2)

        self.assertIn('tester', str(pedido))
        self.assertIn('Loja A', str(pedido))

    def test_estoque_str(self):
        estoque = Estoque.objects.create(
            produto=self.produto,
            loja=self.loja,
            quantidade_atual=10,
            quantidade_minima=5
        )

        self.assertIn('Produto X', str(estoque))
        self.assertIn('Loja A', str(estoque))
    
    def test_loja_str(self):
        self.assertEqual(str(self.loja), 'Loja A')

    def test_produto_str(self):
        self.assertEqual(str(self.produto), 'Produto X')