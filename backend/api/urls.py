from django.urls import path
from .views import PokemonList, PokemonImageSearch

urlpatterns = [
    path('pokemon/', PokemonList.as_view())
]
