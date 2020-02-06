import React from "react";
import {Ingredient} from "./Ingredient";
import {useIngredients} from "../context/IngredientsProvider";


export const Ingredients = () => {
    const {ingredients} = useIngredients();
    return (
        <div>
        {ingredients.map((ingredient, i) => {
            return (<Ingredient key={i} ingredient={ingredient} />);
        })}
        </div>
    );
}