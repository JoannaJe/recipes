import React from "react";
import {Ingredient} from "./Ingredient";
import {useIngredients} from "../hooks/ingredients-hooks";


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