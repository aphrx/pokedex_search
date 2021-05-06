#https://pokeapi.co/api/v2/pokemon?limit=151

import requests
import sqlite3
import os

conn = sqlite3.connect('../../backend/db.sqlite3')

conn.execute('DELETE FROM api_pokemon')
conn.commit()

pokemon = requests.get('https://pokeapi.co/api/v2/pokemon?limit=151').json()
for i, poke in enumerate(pokemon['results']):
    conn.execute("INSERT INTO api_pokemon VALUES (?, ?)", (i+1, str(poke['name']).capitalize()))
    os.rename(f"/home/aphrx/Pictures/images/{poke['name']}.png", f"/home/aphrx/Pictures/images_filtered/{poke['name']}.png")

conn.commit()
conn.close()

