from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Service, Employee, Booking, Schedule


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
    border_color = serializers.CharField(read_only=True)

    class Meta:
        model = Employee
        fields = ["id", "first_name", "last_name", "email", "contact_number", "assigned_services", "border_color"]

# SCHEDULE
class ScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Schedule
        fields = ['id', 'employee', 'day', 'start_time', 'end_time']

    def create(self, validated_data):
        # If we're handling many=True, validated_data will be a list
        if isinstance(validated_data, list):
            return Schedule.objects.bulk_create([Schedule(**item) for item in validated_data])
        return super().create(validated_data)


# BOOKINGS
class BookingSerializer(serializers.ModelSerializer):
    employee = serializers.PrimaryKeyRelatedField(queryset=Employee.objects.all())
    service = serializers.PrimaryKeyRelatedField(
        queryset=Service.objects.all(),
        write_only=True  # Accept service ID in requests
    )
    service_details = ServiceSerializer(source="service", read_only=True)  # Return full service info


    class Meta:
        model = Booking
        fields = ["id", "service", "service_details", "employee", "customer_name", "phone", "booking_date", "booking_time", "duration"]
