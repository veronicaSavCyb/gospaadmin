from django.urls import path
from .views import ServiceViewSet

urlpatterns = [
    path("services/", ServiceViewSet.as_view({'get': 'list', 'post': 'create'}), name="services"),
    path("services/<int:pk>/", ServiceViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name="service-detail"),
]

