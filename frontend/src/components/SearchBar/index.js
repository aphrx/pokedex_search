import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import PhotoCamera from '@material-ui/icons/CameraAlt';
import { SearchCameraButton, SearchInput } from './SearchBarElements';

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
}));

export default function SearchBar(props) {
  const classes = useStyles();
  
  return (
    <Paper component="form" className={classes.root}>
      <SearchInput
        placeholder="Search"
        onChange={(e) => {props.handleSearchChange(e.target.value)}}
      />
      <input
        accept="image/*"
        className={classes.input}
        id="icon-button-photo"
        onChange={(e) => props.handleChange(e)}
        type="file"
        hidden
    />
    <label htmlFor="icon-button-photo">
        <SearchCameraButton color="secondary" component="span">
            <PhotoCamera />
        </SearchCameraButton>
    </label>
    </Paper>
  );
}
