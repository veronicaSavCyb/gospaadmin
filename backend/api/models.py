from django.db import models
import random

RSUITE_COLORS = ["red", "orange", "yellow", "green", "cyan", "blue", "violet"]


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
    border_color = models.CharField(max_length=20, unique=True, null=True, blank=True)  # Ensure uniqueness

    def save(self, *args, **kwargs):
        if not self.border_color:  # Assign a unique color only if not set
            used_colors = Employee.objects.values_list("border_color", flat=True)
            available_colors = list(set(RSUITE_COLORS) - set(used_colors))
            if available_colors:
                self.border_color = random.choice(available_colors)
            else:
                self.border_color = "#ccc"  # Default if all colors are used
        super().save(*args, **kwargs)

# BOOKINGS
class Booking(models.Model):
    service = models.ForeignKey(Service, on_delete=models.CASCADE)
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE)
    customer_name = models.CharField(max_length=255)
    phone = models.CharField(max_length=15)
    booking_date = models.DateField()
    booking_time = models.TimeField()
    duration = models.PositiveIntegerField(default=60)

    def __str__(self):
        return f"{self.customer_name} - {self.service.name} with {self.employee.first_name} {self.employee.last_name}"

