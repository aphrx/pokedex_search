import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { storage } from '../firebase/config';
import Grid from '@material-ui/core/Grid';

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

function Capitalize(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function PokemonCard({ pokemon }) {
  const classes = useStyles();
  const [image, setImage] = useState([])

  useEffect(() => {
    const storageRef = storage.ref()
    storageRef.child('pokemon').child(`${Capitalize(pokemon.name)}.gif`).getDownloadURL().then((url) => {
      setImage(url)
      console.log(url)
    })

  }, [])

  return (
    <Card className={classes.root}>
      <CardContent>
      <Grid container>

                <Grid item xs={12} md={8}>
                  <Typography variant="h5" component="h2">
                    {pokemon.name}
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    Dragon Pokemon
                  </Typography>
                  <Typography variant="body2" component="p">
                  Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                <center>
                  <img height={100} src={image}/>
                  </center>
                </Grid>
                
          </Grid>
      </CardContent>
    </Card>
  );
}