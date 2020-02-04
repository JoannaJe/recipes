import React, {useState} from 'react';
import {Paper, Container, Button} from '@material-ui/core'
import './App.css';
import {makeStyles} from '@material-ui/styles'
import { Ingredients } from './components/Ingredients';
import { Recipes } from './components/Recipes';

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
    height: "100vmax",
  },
  column: {
    margin: "0 auto",
    width: "100vmin",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#334d4d",
  }
}));

const tomatoes = {
  name: "pomidory",
  unit: "kg",
  quantity: 3.0
}

const carrot = {
  name: "marchewka",
  unit: "kg",
  quantity: 1.5
}

const garlic = {
  name: "czosnek",
  unit: "szt.",
  quantity: 8
}

const bananas = {
  name: "banany",
  unit: "szt.",
  quantity: 3
}

function App() {

  const classes = useStyles();

  const [ingredients, setIngredients] = useState([carrot, garlic, bananas]);
  const recipes = ["pizza", "zupa pomidorowa spod Szrenicy", "zupa ogórkowa"];
  
  return (
    <>
    <Container className={classes.root}>
      <Paper variant="outlined" className={classes.column}>
        <Ingredients ingredientsList={ingredients} removeIngredient={name => {
          setIngredients(ingredients.filter(ing => ing.name !== name));
        }}/>
        <Button fullWidth="true" className={classes.button} variant="contained" color="primary">Dodaj składnik</Button>
      </Paper>
      <Paper variant="outlined" className={classes.column}>
        <Recipes recipesList={recipes} />
        <Button fullWidth="true" className={classes.button} variant="contained" color="primary">Dodaj przepis</Button>
      </Paper>
    </Container>
    </>
  );
}

export default App;
