import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/CameraAlt';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    margin:'20px 20px',
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function Searchbar(props) {
  const classes = useStyles();
  const [search, setSearch] = useState('')
  
  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search google maps' }}
        onChange={(e) => {setSearch(e.target.value); props.handleSearchChange(search)}}
      />
      
      
      <IconButton type="submit" onClick={(e) => {e.preventDefault(); }} className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider className={classes.divider} orientation="vertical" />
      <input
        accept="image/*"
        className={classes.input}
        id="icon-button-photo"
        onChange={(e) => props.handleChange(e)}
        type="file"
        hidden
    />
    <label htmlFor="icon-button-photo">
        <IconButton color="secondary" component="span">
            <PhotoCamera />
        </IconButton>
    </label>
    </Paper>
  );
}
