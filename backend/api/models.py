from django.db import models

class Calculation(models.Model):
    METHOD_CHOICES = [
        ("trapecio", "Trapecio"),
        ("simpson", "Simpson"),
    ]
    method = models.CharField(max_length=20, choices=METHOD_CHOICES)
    x_values = models.JSONField()
    y_values = models.JSONField()
    result = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.method} - {self.result:.2f}"
