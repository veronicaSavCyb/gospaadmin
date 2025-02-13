from django.db import models

class Service(models.Model):
    name = models.CharField(max_length=255)
    short_descriptor = models.CharField(max_length=255)
    detailed_description = models.TextField()
    category = models.CharField(max_length=100)

    def __str__(self):
        return self.name
