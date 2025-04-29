from django.urls import path
from .views import CalcularView

urlpatterns = [
    path("calcular/", CalcularView.as_view(), name="calcular"),
]