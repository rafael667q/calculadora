from rest_framework import serializers
from .models import Calculation

class CalculationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Calculation
        fields = "__all__"

class CalculationInputSerializer(serializers.Serializer):
    method = serializers.ChoiceField(choices=["trapecio", "simpson"])
    x_values = serializers.ListField(child=serializers.FloatField())
    y_values = serializers.ListField(child=serializers.FloatField())