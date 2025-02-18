from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Service, Employee


# USERS
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        print(validated_data)
        user = User.objects.create_user(**validated_data)
        return user

# SERVICES
class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ['id', 'name', 'short_descriptor', 'detailed_description', 'category']

# EMPLOYEES        
class EmployeeSerializer(serializers.ModelSerializer):
    assigned_services = ServiceSerializer(many=True, read_only=True)  # Return full service objects

    class Meta:
        model = Employee
        fields = ["id", "first_name", "last_name", "email", "contact_number", "assigned_services"]
