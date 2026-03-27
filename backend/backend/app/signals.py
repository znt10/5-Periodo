from django.db.models.signals import post_migrate
from django.dispatch import receiver
from .utils import setup_groups

@receiver(post_migrate)
def criar_grupos(sender, **kwargs):
    setup_groups.criar_grupos()