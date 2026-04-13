"""Add data_pedido to Pedido when DB is missing the column.

This migration is defensive: it sets a default of timezone.now for existing rows
and uses auto_now_add for future inserts.
"""
from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ("app", "0002_auto_20260407_1001"),
    ]

    operations = [
        migrations.AddField(
            model_name="pedido",
            name="data_pedido",
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
