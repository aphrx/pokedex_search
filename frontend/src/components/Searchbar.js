import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/CameraAlt';
import SearchIcon from '@material-ui/icons/Search';
import { storage } from '../firebase/config';

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

export default function Searchbar() {
  const classes = useStyles();
  
  const onChange = (e) => {
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
          .then(response => console.log(response.json()));
      })})
  }

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      
      
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider className={classes.divider} orientation="vertical" />
      <input
        accept="image/*"
        className={classes.input}
        id="icon-button-photo"
        onChange={onChange}
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
