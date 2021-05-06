from django.urls import path
from .views import PokemonList, PokemonSearch

urlpatterns = [
    path('pokemon/', PokemonList.as_view()),
    path('search/', PokemonSearch.as_view())
]
