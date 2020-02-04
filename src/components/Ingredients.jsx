import React from "react";
import {Ingredient} from "./Ingredient";

export const Ingredients = ({ingredientsList, removeIngredient = f => f}) => {
    return (
        <div>
        {ingredientsList.map((ingredient, i) => {
            return (<Ingredient key={i} ingredient={ingredient} removeIngredient={removeIngredient}/>);
        })}
        </div>
    );
}