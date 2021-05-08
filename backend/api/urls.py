from django.urls import path
from .views import PokemonList

urlpatterns = [
    path('pokemon/', PokemonList.as_view()),
]
