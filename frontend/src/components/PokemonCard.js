import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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

export default function PokemonCard({ pokemon }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {pokemon.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Dragon Pokemon
        </Typography>
        <Typography variant="body2" component="p">
        Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally.
        </Typography>
      </CardContent>
    </Card>
  );
}