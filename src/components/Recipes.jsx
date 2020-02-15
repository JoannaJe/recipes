import {Recipe} from "./Recipe";
import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        flexDirection: "column",
        paddingLeft: "0px",
        paddingRight: "0px",

    }
}));

export const Recipes = ({recipesList}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        {recipesList.map((recipe, i) => {
            return (<Recipe key={i} name={recipe.name} />);
        })}
        </div>
    );
}