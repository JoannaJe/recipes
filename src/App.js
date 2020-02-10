import React, {useState} from 'react';
import {Paper, Container, Button, AppBar} from '@material-ui/core'
import './App.css';
import {makeStyles} from '@material-ui/styles'
import { Ingredients } from './components/Ingredients';
import { Recipes } from './components/Recipes';
import { MenuTopBar } from './components/MenuTopBar';
import {MenuBottomBar} from "./components/MenuBottomBar";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
    height: "50vmax",
    marginTop: "4px",
  },
  column: {
    margin: "0 auto",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",

  },
}));

function App() {

  const classes = useStyles();

  const recipes = ["pizza", "zupa pomidorowa spod Szrenicy", "zupa ogórkowa"];
  
  return (
    <>
      <MenuTopBar/>
      <Container className={classes.root}>
        <Paper variant="outlined" className={classes.column}>
          <Ingredients />
        </Paper>
        <Paper variant="outlined" className={classes.column}>
         <Recipes recipesList={recipes} />
        </Paper>
      </Container>
      <MenuBottomBar/>
    </>
  );
}

export default App;
