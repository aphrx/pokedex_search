import React, { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard';
import Grid from '@material-ui/core/Grid';
import Searchbar from './Searchbar';
import { storage } from '../firebase/config';


export default function HomePage() {
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        fetchData("")
    }, [])

    const fetchData = (data) => {
        let url = 'http://localhost:8000/api/pokemon?search='

        fetch(url + data)
        .then(res => res.json())
        .then(data => setPokemon(data))
    }

    const handleSearchChange = (query) => {
        console.log(query);
        fetchData(query)
    }

    const handleChange = (e) => {
        const file = e.target.files[0];
        const storageRef = storage.ref()
        const fileRef = storageRef.child(file.name)
        fileRef.put(file).then(snapshot => {
          snapshot.ref.getDownloadURL().then(url => {
            console.log('URL:', url)
            const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
              body: JSON.stringify({ 'url': url })
          };
          fetch('http://127.0.0.1:8000/api/pokemon/', requestOptions)
              .then(response => response.json())
              .then(data => {
                  console.log(data[0]['name'])
                  fetchData(data[0]['name'])
                });
          })}) 
      }

    return (
        <div>   
            <Grid container>
                <Grid item xs={12} md={12}>
                    <center>
                        <Searchbar handleChange={handleChange} handleSearchChange={handleSearchChange}/>
                    </center>
                </Grid>
                {pokemon.map(pokemon => (
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <PokemonCard key={pokemon.id} pokemon={pokemon} />
                    </Grid>
                ))}
            </Grid>

        </div>
    )
}