from django.urls import path
from .views import ServiceViewSet, EmployeeViewSet

urlpatterns = [
    # Services Endpoints
    path("services/", ServiceViewSet.as_view({'get': 'list', 'post': 'create'}), name="services"),
    path("services/<int:pk>/", ServiceViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name="service-detail"),

    # Employees Endpoints
    path("employees/", EmployeeViewSet.as_view({'get': 'list', 'post': 'create'}), name="employees"),
    path("employees/<int:pk>/", EmployeeViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name="employee-detail"),
]
