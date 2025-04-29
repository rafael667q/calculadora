from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from oct2py import Oct2Py
from .models import Calculation
from .serializers import CalculationSerializer, CalculationInputSerializer

class CalcularView(APIView):
    def post(self, request):
        serializer = CalculationInputSerializer(data=request.data)
        if serializer.is_valid():
            method = serializer.validated_data["method"]
            x = serializer.validated_data["x_values"]
            y = serializer.validated_data["y_values"]

            oc = Oct2Py()
            oc.addpath("/octave")
            if method == "trapecio":
                result = float(oc.trapecio(x, y))
            else:
                result = float(oc.simpson(x, y))

            calc = Calculation.objects.create(
                method=method, x_values=x, y_values=y, result=result
            )
            return Response(CalculationSerializer(calc).data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)