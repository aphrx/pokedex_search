from rest_framework import serializers
from .models import Pokemon, PokemonImageSearch

class PokemonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pokemon
        fields = '__all__'

class PokemonImageSearchSerializer(serializers.ModelSerializer):
    class Meta:
        model = PokemonImageSearch
        fields = '__all__'