import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import { storage } from '../../../firebase/config';
import Grid from '@material-ui/core/Grid';

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

const useStyles = makeStyles({
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
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function pad(num) {
  num = num.toString();
  while (num.length < 3) num = "0" + num;
  return num;
}

export default function PokemonCard({ handleClick, pokemon }) {
  const classes = useStyles();
  const [image, setImage] = useState([])

  useEffect(() => {
    storage.ref()
    .child('pokemon')
    .child(`${pokemon.name}.gif`)
    .getDownloadURL()
    .then((url) => setImage(url))
  })

  return (
    <Card className={classes.root} style={{backgroundColor:colors[pokemon.type1]}}>
      <CardActionArea onClick={() => handleClick(pokemon)}>
      <CardContent>
        <Grid container>
          <Grid item xs={12} md={8}>
          <Typography className={classes.pos} color="textSecondary">
            {"#" + pad(pokemon.id)}
            </Typography>
            <Typography variant="h5" component="h2">
              {pokemon.name}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
            {(pokemon.type2 != null) ? pokemon.type1 + "/" + pokemon.type2 : pokemon.type1}
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <center>
              <img height={80} src={image} style={{display: 'inline-block'}}/>
            </center>
          </Grid>    
        </Grid>
      </CardContent>
      </CardActionArea>
    </Card>
  );
}