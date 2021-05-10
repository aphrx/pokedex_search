import React, { useState, useEffect } from 'react';
import { Grid, CardContent } from '@material-ui/core';
import { storage } from '../../../firebase/config';
import Progress from '../../ProgressBar';
import { PCard, PokemonName, PokemonDesc, PokemonType } from './HeroCardElements';
import { Colors }  from '../Colors';

export default function HeroCard({ pokemon }) {
  const [image, setImage] = useState([])

  useEffect(() => 
    storage.ref()
    .child('pokemon')
    .child(`${pokemon.name}.gif`)
    .getDownloadURL()
    .then((url) => setImage(url)))


function percent(num){
    console.log(num/255)
    return (num/255) * 100
}
  
  return (
    <PCard style={{backgroundColor:Colors[pokemon.type1]}}>
      <CardContent>
        <Grid container>
          <Grid item xs={12} md={9}>
            <Grid container>
              <Grid item xs={12} md={6}>
              <PokemonName>
              {pokemon.name}
            </PokemonName>
            <PokemonType>
                  {(pokemon.type2 != null) ? pokemon.type1 + "/" + pokemon.type2 : pokemon.type1}
              </PokemonType>
              <br/>
                <PokemonDesc >
                    {pokemon.desc}
                </PokemonDesc>
              </Grid>
              <Grid item xs={12} md={6}>
                <center>
                  <Progress skill={"HP"} dur={pokemon.hp} percent={percent(pokemon.hp) + '%'}/>
                  <Progress skill={"ATK"} dur={pokemon.atk} percent={percent(pokemon.atk) + '%'}/>
                  <Progress skill={"DEF"} dur={pokemon.df} percent={percent(pokemon.df) + '%'}/>
                  <Progress skill={"SPA"} dur={pokemon.spa} percent={percent(pokemon.spa) + '%'}/>
                  <Progress skill={"SPD"} dur={pokemon.spd} percent={percent(pokemon.spd) + '%'}/>
                  <Progress skill={"SPE"} dur={pokemon.spe} percent={percent(pokemon.spe) + '%'}/>
                </center>
              </Grid>
            </Grid>
 
          </Grid>
          <Grid item xs={12} md={3}>
                <center>
                  <img height={250} src={image}/>
                </center>
              </Grid>  
        </Grid>
      </CardContent>
    </PCard>
  );
}
