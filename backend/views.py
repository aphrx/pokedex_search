from django.shortcuts import render
from rest_framework import generics
from .serializers import PokemonSerializer
from .models import Pokemon

class PokemonView(generics.ListAPIView):
    queryset = Pokemon.objects.all()
    serializer_class = PokemonSerializer
