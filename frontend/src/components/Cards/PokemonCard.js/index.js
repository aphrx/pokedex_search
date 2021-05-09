import React, { useState, useEffect } from 'react';
import { CardContent, CardActionArea } from '@material-ui/core';
import { storage } from '../../../firebase/config';
import Grid from '@material-ui/core/Grid';
import { PCard, PokemonName, PokemonType, PokemonNumber } from './PokemonCardElements';
import { Colors }  from '../Colors';

function pad(num) {
  num = num.toString();
  while (num.length < 3) num = "0" + num;
  return num;
}

export default function PokemonCard({ handleClick, pokemon }) {
  const [image, setImage] = useState([])

  useEffect(() => {
    storage.ref()
    .child('pokemon')
    .child(`${pokemon.name}.gif`)
    .getDownloadURL()
    .then((url) => setImage(url))
  })

  return (
    <PCard style={{backgroundColor:Colors[pokemon.type1]}}>
      <CardActionArea onClick={() => handleClick(pokemon)}>
      <CardContent>
        <Grid container>
          <Grid item xs={12} md={8}>
          <PokemonNumber>
            {"#" + pad(pokemon.id)}
            </PokemonNumber>
            <PokemonName>
              {pokemon.name}
            </PokemonName>
            <PokemonType>
            {(pokemon.type2 != null) ? pokemon.type1 + "/" + pokemon.type2 : pokemon.type1}
            </PokemonType>
          </Grid>
          <Grid item xs={12} md={4}>
            <center>
              <img height={80} src={image} style={{display: 'inline-block'}}/>
            </center>
          </Grid>    
        </Grid>
      </CardContent>
      </CardActionArea>
    </PCard>
  );
}