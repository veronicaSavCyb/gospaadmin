# Generated by Django 5.1.6 on 2025-02-21 01:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_employee'),
    ]

    operations = [
        migrations.AddField(
            model_name='employee',
            name='border_color',
            field=models.CharField(blank=True, max_length=20, null=True, unique=True),
        ),
    ]
