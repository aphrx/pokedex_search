#https://pokeapi.co/api/v2/pokemon?limit=151

import requests
import sqlite3
import os

conn = sqlite3.connect('../../backend/db.sqlite3')

conn.execute('DELETE FROM api_pokemon')
conn.commit()

for i in range(1, 152):
    pokemon = requests.get(f"https://pokeapi.co/api/v2/pokemon/{i}").json()
    desc_req = requests.get(f"https://pokeapi.co/api/v2/pokemon-species/{i}").json()
    name = str(pokemon['name']).capitalize()
    t1 = str(pokemon['types'][0]['type']['name']).capitalize()
    t2 = None
    if len(pokemon['types']) == 2:
        t2 = str(pokemon['types'][1]['type']['name']).capitalize()

    desc = str(desc_req['flavor_text_entries'][0]['flavor_text']).replace('\n', ' ').replace('\f', ' ').replace('POKéMON', 'Pokémon')
    stats = []
    for j in range(6):
        stats.append(pokemon['stats'][j]['base_stat'])
    
    print(stats)
    conn.execute("INSERT INTO api_pokemon (id, name, type1, type2, desc, hp, atk, df, spa, spd, spe) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", (i, name, t1, t2, desc, stats[0], stats[1], stats[2], stats[3], stats[4], stats[5]))

conn.commit()
conn.close()

