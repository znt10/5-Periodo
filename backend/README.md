# 📦 Sistema de Gestão - API Django

API desenvolvida com Django e Django REST Framework para gerenciamento de usuários, produtos e pedidos.

O sistema foi pensado para uso interno, onde um gerente cadastra os usuários e controla as operações.

---

## 🚀 Como rodar o projeto

### 1. Clonar o repositório

git clone https://github.com/znt10/5-Periodo.git
cd 5-Periodo

---

### 2. Criar ambiente virtual

```
python -m venv venv

Ativar:

Windows:
venv\Scripts\activate

Linux/Mac:
source venv/bin/activate

---

### 3. Instalar dependências

pip install -r requirements.txt

---

### 4. Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

ou

Crie um banco local pra testar

DATABASES = {
'default': {
'ENGINE': 'django.db.backends.sqlite3',
'NAME': BASE_DIR / 'db.sqlite3',
}
}

---

### 5. Rodar migrações

python manage.py migrate

---

### 6. Criar superusuário

python manage.py createsuperuser

---

### 7. Iniciar o servidor

python manage.py runserver

A API estará disponível em:
http://127.0.0.1:8000/

---

## ⚙️ Funcionalidades

- Cadastro de usuários (feito por gerente, Adminstrador)
- Autenticação com JWT
- Controle de permissões (Administrador, Gerente, Responsável)
- CRUD de produtos
- CRUD de pedidos
- CRUD de loja
- CRUD de estoque
- CRUD de itempedido

---

## 🧱 Estrutura do projeto

- usuarios → gerenciamento de usuários
- produtos → cadastro de produtos
- pedidos → controle de pedidos

---

## 🔐 Autenticação

A API utiliza JWT.

Após o login, use o token nas requisições:

Com uso de cookies para melhorar a segurança

---
```
