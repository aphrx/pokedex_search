import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';

import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { storage } from '../../../firebase/config';
import Progress from '../../ProgressBar';
import { PokemonName, PokemonDesc } from './HeroCardElements';

const colors = {
    'Grass': '#e0f2f1',
    'Fire': '#ffebee',
    'Water': '#e3f2fd',
    'Bug': '#f1f8e9',
    'Normal': '#f5f5f5',
    'Poison': '#ede7f6',
    'Electric': '#fffde7',
    'Ground': '#efebe9',
    'Fairy': '#fce4ec',
    'Fighting': '#fff3e0',
    'Psychic': '#f3e5f5',
    'Rock': '#d7ccc8',
    'Ghost': '#e8eaf6',
    'Ice': '#e1f5fe',
    'Dragon': '#d1c4e9'
  }

const useStyles = makeStyles((theme) => ({
    root: {
        margin:'20px 20px',
        minWidth: 150,
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 20,
      },
      pos: {
        marginBottom: 12,
      },

}));


export default function HeroCard({ pokemon }) {
  const classes = useStyles();

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
    <Card className={classes.root} style={{backgroundColor:colors[pokemon.type1]}}>
      <CardContent>
        <Grid container>
          <Grid item xs={12} md={12}>
            <PokemonName>
              {pokemon.name}
            </PokemonName>

            <Grid container>
              <Grid item xs={12} md={4}>
              <Typography className={classes.pos} color="textSecondary">
                {(pokemon.type2 != null) ? pokemon.type1 + "/" + pokemon.type2 : pokemon.type1}
            </Typography>
                <PokemonDesc >
                    {pokemon.desc}
                </PokemonDesc>
              </Grid>
              <Grid item xs={12} md={4}>
                <center >
                  <Progress skill={"HP"} dur={pokemon.hp} percent={percent(pokemon.hp) + '%'}/>
                  <Progress skill={"ATK"} dur={pokemon.atk} percent={percent(pokemon.atk) + '%'}/>
                  <Progress skill={"DEF"} dur={pokemon.df} percent={percent(pokemon.df) + '%'}/>
                  <Progress skill={"SPA"} dur={pokemon.spa} percent={percent(pokemon.spa) + '%'}/>
                  <Progress skill={"SPD"} dur={pokemon.spd} percent={percent(pokemon.spd) + '%'}/>
                  <Progress skill={"SPE"} dur={pokemon.spe} percent={percent(pokemon.spe) + '%'}/>
                </center>
              </Grid>
              <Grid item xs={12} md={4}>
            <center>
              <img height={250} src={image}/>
            </center>
          </Grid>   
            </Grid>
          </Grid>
 
        </Grid>
      </CardContent>
    </Card>
  );
}
