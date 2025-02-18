from django.db import models

# SERVICES
class Service(models.Model):
    name = models.CharField(max_length=255)
    short_descriptor = models.CharField(max_length=255)
    detailed_description = models.TextField()
    category = models.CharField(max_length=100)

    def __str__(self):
        return self.name

# EMPLOYEES
class Employee(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    contact_number = models.CharField(max_length=15, blank=True, null=True)
    assigned_services = models.ManyToManyField(Service, related_name="employees")

    def __str__(self):
        return f"{self.first_name} {self.last_name}"    
