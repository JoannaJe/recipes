import { AppBar, Avatar } from "@material-ui/core";
import React from "react";
import {GoPlus, GoDash, GoX} from "react-icons/go"
import { makeStyles } from "@material-ui/styles";
import {IngredientsProvider} from "../context/IngredientsProvider"
import {useIngredients} from "../hooks/ingredients-hooks";

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#527a7a",
        margin: "1px",
    },
    itemBox: {
        width: "25%",
        paddingLeft: "10px",
        paddingRight: "10px",
    },
    centerElem: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
    },
    avatar: {
        backgroundColor: "#3d5c5c",
    },
    names: {
        textTransform: "uppercase",
    }

}));

export const Ingredient = ({ingredient}) => {
    const classes = useStyles();
    const {removeIngredient} = useIngredients();
    return (
    <AppBar className={classes.root} position="static">
        <p className={`${classes.itemBox} ${classes.names}`}>{ingredient.name}</p>
        <p className={classes.itemBox}>{ingredient.unit}</p>
        <p className={classes.itemBox}>{ingredient.quantity}</p>
        <div className={`${classes.itemBox} ${classes.centerElem}`}>
            <Avatar className={classes.avatar}>
                <GoPlus/>
            </Avatar>
            <Avatar className={classes.avatar}>
                <GoDash/>
            </Avatar>
            <Avatar className={classes.avatar} onClick={() => removeIngredient(ingredient.name)}>
                <GoX/>
            </Avatar>
        </div>
    </AppBar>);
}