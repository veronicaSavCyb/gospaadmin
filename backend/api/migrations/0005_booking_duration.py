# Generated by Django 5.1.6 on 2025-02-22 10:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_booking'),
    ]

    operations = [
        migrations.AddField(
            model_name='booking',
            name='duration',
            field=models.PositiveIntegerField(default=60),
        ),
    ]
