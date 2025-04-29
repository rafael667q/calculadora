from django.urls import reverse
from rest_framework.test import APITestCase

class CalculationAPITest(APITestCase):
    def test_trapecio(self):
        url = reverse("calcular")
        data = {
            "method": "trapecio",
            "x_values": [0, 1, 2],
            "y_values": [1, 2, 3]
        }
        response = self.client.post(url, data, format="json")
        self.assertEqual(response.status_code, 201)
        self.assertIn("result", response.data)