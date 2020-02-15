import React, {useState, useEffect} from 'react';
import {Paper, Container, Button, AppBar} from '@material-ui/core'
import './App.css';
import {makeStyles} from '@material-ui/styles'
import { Ingredients } from './components/Ingredients';
import { Recipes } from './components/Recipes';
import { MenuTopBar } from './components/MenuTopBar';
import {MenuBottomBar} from "./components/MenuBottomBar";
import {IngredientsProvider} from "./context/IngredientsProvider";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
    height: "50vmax",
    marginTop: "0px",
    marginBottom: "75px",
  },
  column: {
    margin: "85px auto",
    marginLeft: "5px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: "0px",
    overflowY: "scroll",
  },
}));

function App() {

  const classes = useStyles();

  const [ingredientsData, setIngredientsData] = useState([]);
  const [recipesData, setRecipesData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8090/ingredients").then((data) => {
      return data.json();
    }).then((dataJson) => setIngredientsData(dataJson));
    fetch("http://localhost:8090/recipes").then((data) =>{ 
      return data.json();
    }).then((dataJson) => setRecipesData(dataJson));
  }, []);

  // const recipes = ["pizza", "zupa pomidorowa spod Szrenicy", "zupa ogórkowa"];
  // const recipes = ["pizza", "zupa pomidorowa spod Szrenicy", "zupa ogórkowa"];

  if(ingredientsData.length === 0 || recipesData.length === 0){
    return <div>Loading...</div>
  }

  return (
    <IngredientsProvider ingredientsData={ingredientsData}>
      <MenuTopBar/>
      <Container className={classes.root}>
        <Paper variant="outlined" className={classes.column}>
          <Ingredients />
        </Paper>
        <Paper variant="outlined" className={classes.column}>
         <Recipes recipesList={recipesData} />
        </Paper>
      </Container>
      <MenuBottomBar/>
    </IngredientsProvider>
  );
}

export default App;
