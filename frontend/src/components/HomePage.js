import React, { useEffect, useState } from 'react';
import PokemonCard from './Cards/PokemonCard.js';
import Grid from '@material-ui/core/Grid';
import Searchbar from './Searchbar';
import { storage } from '../firebase/config';
import Pagination from '@material-ui/lab/Pagination';
import Hero from './Cards/HeroCard';

function slice(arr) {
    const newArr = [];
    while(arr.length) newArr.push(arr.splice(0,20));
    return newArr
}


export default function HomePage() {
    const [pokemon, setPokemon] = useState([[]])
    const [page, setPage] = useState(1)
    const [hero, setHero] = useState(null)
    
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = (data) => {
        
        if(data == null){
            data = ""
        }
        let url = 'http://localhost:8000/api/pokemon?search='

        fetch(url + data)
        .then(res => res.json())
        .then(data => setPokemon(slice(data)))
    }

    const handleChangePage = (event, newPage) => setPage(newPage);

    const handleSearchChange = (query) => fetchData(query);

    const handleClick = (pokemon) => {
        setHero(pokemon)
        window.scrollTo(0, 0)
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
                {hero != null ? (
                        <Grid item xs={12}>
                            <Hero pokemon={hero} />
                        </Grid>
                ):<></>}
                
                {
                    pokemon[page-1].map(pokemon => (
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <PokemonCard key={pokemon.id} pokemon={pokemon} handleClick={handleClick} />
                        </Grid>
                    ))
                }
                
                
                
                <Grid item xs={12} container justify = "center">
                    <Pagination count={pokemon.length} page={page} onChange={handleChangePage} color="secondary" style={{margin: 20}}/>
                </Grid>
            </Grid>

        </div>
    )
}