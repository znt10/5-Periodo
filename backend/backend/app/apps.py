from django.apps import AppConfig


class AppConfig(AppConfig):
    name = 'app'

    def ready(self):
        from .utils import setup_groups
        setup_groups.criar_grupos()