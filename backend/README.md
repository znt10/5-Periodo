Perfeito, aqui está pronto em Markdown para colar direto no README.md:

# 📦 Sistema de Gestão - API Django

API desenvolvida com Django e Django REST Framework para gerenciamento de usuários, produtos e pedidos.

O sistema foi pensado para uso interno, onde um gerente cadastra os usuários e controla as operações.

---

## 🚀 Como rodar o projeto

### 📥 1. Clonar o repositório
```bash
git clone https://github.com/znt10/5-Periodo.git
cd 5-Periodo

---

Perfeito, aqui está pronto em Markdown para colar direto no README.md:

# 📦 Sistema de Gestão - API Django

API desenvolvida com Django e Django REST Framework para gerenciamento de usuários, produtos e pedidos.

O sistema foi pensado para uso interno, onde um gerente cadastra os usuários e controla as operações.

---

## 🚀 Como rodar o projeto

### 📥 1. Clonar o repositório

````bash
git clone https://github.com/znt10/5-Periodo.git
cd 5-Periodo

---

# 📦 Sistema de Gestão - API Django

API desenvolvida com Django e Django REST Framework para gerenciamento de usuários, produtos e pedidos.

O sistema foi pensado para uso interno, onde um gerente cadastra os usuários e controla as operações.

---

## 🚀 Como rodar o projeto

### 📥 1. Clonar o repositório
```bash
git clone https://github.com/znt10/5-Periodo.git
cd 5-Periodo

### 2. Criar ambiente virtual

python -m venv venv
x
^```
Ativar ambiente virtual:

```bash
Windows

venv\Scripts\activate

Linux/Mac

source venv/bin/activate
📦 3. Instalar dependências
pip install -r requirements.txt
⚙️ 4. Configurar banco de dados (opcional para teste)
No settings.py, use SQLite:

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}
🔄 5. Rodar migrações
python manage.py migrate
👤 6. Criar superusuário
python manage.py createsuperuser
▶️ 7. Iniciar o servidor
python manage.py runserver
```

A API estará disponível em:
http://127.0.0.1:8000/

⚙️ Funcionalidades
Cadastro de usuários (Administrador/Gerente)
Autenticação com JWT
Controle de permissões
CRUD de produtos
CRUD de pedidos
CRUD de loja
CRUD de estoque
CRUD de itempedido
🧱 Estrutura do projeto
usuarios → gerenciamento de usuários
produtos → cadastro de produtos
pedidos → controle de pedidos
🔐 Autenticação

A API utiliza JWT.

Após o login, utilize o token nas requisições (preferencialmente via cookies para maior segurança).