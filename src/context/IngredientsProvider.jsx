import React, {createContext, useState} from "react";


const IngredientsContext = createContext();

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



export const IngredientsProvider = ({children}) => {
  const myIngredients = [tomatoes, carrot, garlic, bananas];
  const [ingredients, setIngredients] = useState(myIngredients);
  const removeIngredient = name => setIngredients(ingredients.filter(ingr => ingr.name !== name));
  return (
    <IngredientsContext.Provider value={{ingredients, removeIngredient}}>
      {children}
    </IngredientsContext.Provider>
    );
};