from django.urls import path
from .views import PokemonView

urlpatterns = [
    path('pokemon', PokemonView.as_view())
]
