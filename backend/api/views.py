from django.contrib.auth.models import User
from django.db import IntegrityError
from rest_framework import generics, status, serializers
from rest_framework.response import Response
from rest_framework.generics import ListAPIView
from rest_framework.views import APIView
from rest_framework import viewsets
from rest_framework import status
from .models import Service, Employee 
from .serializers import ServiceSerializer, UserSerializer, EmployeeSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny

# USERS
class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

# SERVICES
class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer
    permission_classes = [AllowAny]

    # ✅ Create a new service (POST /api/services/)
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # ✅ Update an existing service (PUT /api/services/{id}/)
    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # ✅ Delete a service (DELETE /api/services/{id}/)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.delete()
        return Response({"message": "Service deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
    

# EMPLOYEES
class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
    permission_classes = [AllowAny]

    # ✅ Create a new employee (POST /api/employees/)
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # ✅ Update an existing employee (PUT /api/employees/{id}/)
    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        assigned_services_ids = request.data.get("assigned_services", [])

        serializer = self.get_serializer(instance, data=request.data, partial=True)
        if serializer.is_valid():
            employee = serializer.save()
            employee.assigned_services.set(assigned_services_ids)  # Update ManyToMany relationship
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # ✅ Delete an employee (DELETE /api/employees/{id}/)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.delete()
        return Response({"message": "Employee deleted successfully"}, status=status.HTTP_204_NO_CONTENT)

