import {Recipe} from "./Recipe";
import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        flexDirection: "column",
        paddingLeft: "5px",
        paddingRight: "5px",

    }
}));

export const Recipes = ({recipesList}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        {recipesList.map((name, i) => {
            return (<Recipe key={i} name={name} />);
        })}
        </div>
    );
}