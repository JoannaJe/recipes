import React from "react";
import {Ingredient} from "./Ingredient";

export const Ingredients = ({ingredientsList}) => {
    return (
        <div>
        {ingredientsList.map((ingredient, i) => {
            return (<Ingredient key={i} ingredient={ingredient} />);
        })}
        </div>
    );
}