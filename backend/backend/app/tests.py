from django.test import TestCase
from django.contrib.auth.models import User, Group,Permission
from django.contrib.contenttypes.models import ContentType
from app.models import Loja, Produto, Pedido, ItemPedido, Estoque

class ModelsTestCase(TestCase):
    
    def setUp(self):
        # 1. Cria os usuários
        self.user_gerente = User.objects.create_user(username='gerente', password='pass')
        self.user_responsavel = User.objects.create_user(username='responsavel', password='pass')

        # 2. Cria os Grupos
        grupo_gerente, _ = Group.objects.get_or_create(name='Gerente')
        grupo_responsavel, _ = Group.objects.get_or_create(name='Responsavel')

        # 3. Pega o "Tipo de Conteúdo" do modelo que queremos proteger (Ex: Pedido)
        # Se quiser testar Produto ou Loja, é só trocar aqui e nos codenames abaixo
        content_type = ContentType.objects.get_for_model(Pedido)

        # 4. Busca as permissões específicas desse modelo no banco de dados
        perm_add = Permission.objects.get(codename='add_pedido', content_type=content_type)
        perm_view = Permission.objects.get(codename='view_pedido', content_type=content_type)
        perm_change = Permission.objects.get(codename='change_pedido', content_type=content_type)
        perm_delete = Permission.objects.get(codename='delete_pedido', content_type=content_type)

        # 5. Dá TODAS as permissões para o grupo Gerente
        grupo_gerente.permissions.add(perm_add, perm_view, perm_change, perm_delete)

        # 6. Dá apenas CRIAR, VER e MUDAR para o grupo Responsável (sem o delete)
        grupo_responsavel.permissions.add(perm_add, perm_view, perm_change)

        # 7. Coloca os usuários nos seus respectivos grupos
        self.user_gerente.groups.add(grupo_gerente)
        self.user_responsavel.groups.add(grupo_responsavel)

        # --- Daqui para baixo continua a criação da sua Loja, Produto, etc ---
        # Ex: self.loja = Loja.objects.create(nome_loja='Loja A', responsavel=self.user_gerente, ...)

        self.loja = Loja.objects.create(
            nome_loja='Loja A',
            endereco='Rua 1',
            responsavel=self.user_gerente
        )
        self.produto = Produto.objects.create(
            nome_produto='Produto X',
            codigo='PX',
            unidade_medida='un',
            ativo=True
        )
    

    def test_item_pedido_str(self):
        # CORREÇÃO: Usar 'responsavel' em vez de 'user'
        pedido = Pedido.objects.create(responsavel=self.user, loja=self.loja, status='novo')
        
        # CORREÇÃO: ItemPedido agora exige o campo 'responsavel'
        item = ItemPedido.objects.create(
            pedido=pedido, 
            produto=self.produto, 
            quantidade=3, 
            responsavel=self.user_responsavel
        )

        self.assertIn('3 x Produto X', str(item))
        self.assertIn(f'(Pedido {pedido.id})', str(item))

    def test_pedido_str(self):
        # CORREÇÃO: Usar 'responsavel' em vez de 'user'
    
        pedido = Pedido.objects.create(responsavel=self.user_responsavel, loja=self.loja, status='novo')
        
        
        ItemPedido.objects.create(
            pedido=pedido, 
            produto=self.produto, 
            quantidade=2, 
            responsavel=self.user_responsavel
        )

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