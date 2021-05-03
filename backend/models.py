from django.db import models

class Pokemon(models.Model):
    national_id = models.IntegerField(null=False, unique=True)
    name = models.CharField(max_length=255)
    preevolution_id = models.IntegerField()
    evolution_id = models.IntegerField()