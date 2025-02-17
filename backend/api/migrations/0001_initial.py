# Generated by Django 5.1.6 on 2025-02-17 08:16

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Service',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('short_descriptor', models.CharField(max_length=255)),
                ('detailed_description', models.TextField()),
                ('category', models.CharField(max_length=100)),
            ],
        ),
    ]
