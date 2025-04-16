from django.urls import path
from .views import ServiceViewSet, EmployeeViewSet, BookingViewSet, ScheduleViewSet

urlpatterns = [
    # Services Endpoints
    path("services/", ServiceViewSet.as_view({'get': 'list', 'post': 'create'}), name="services"),
    path("services/<int:pk>/", ServiceViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name="service-detail"),

    # Employees Endpoints
    path("employees/", EmployeeViewSet.as_view({'get': 'list', 'post': 'create'}), name="employees"),
    path("employees/<int:pk>/", EmployeeViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name="employee-detail"),

    # Schedule Endpoints
    path("schedules/", ScheduleViewSet.as_view({'get': 'list', 'post': 'create'}), name="schedules"),
    path("schedules/<int:pk>/", ScheduleViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name="schedule-detail"),

    # Bookings Endpoints
    path("bookings/", BookingViewSet.as_view({'get': 'list', 'post': 'create'}), name="bookings"),
    path("bookings/<int:pk>/", BookingViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name="booking-detail"),
]
