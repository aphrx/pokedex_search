import React, { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard';
import Grid from '@material-ui/core/Grid';
import Searchbar from './Searchbar';

export default function HomePage() {
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/api/pokemon')
            .then(res => res.json())
            .then(data => setPokemon(data))
    }, [])

    return (
        <div>   
            <Grid container>
                <Grid item xs={12} md={12}>
                    <center>
                        <Searchbar />
                    </center>
                </Grid>
                {pokemon.map(pokemon => (
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <PokemonCard pokemon={pokemon} />
                    </Grid>
                ))}
            </Grid>

        </div>
    )
}