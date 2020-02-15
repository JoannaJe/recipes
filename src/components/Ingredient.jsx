import {AppBar, Avatar, TextField} from "@material-ui/core";
import React, {useState} from "react";
import {GoPlus, GoDash, GoX} from "react-icons/go"
import { makeStyles } from "@material-ui/styles";
import {useIngredients} from "../context/IngredientsProvider"

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        // backgroundColor: "#819898",
        backgroundColor: "#f2f2f2",
        '&:hover': {
            backgroundColor: "#cccccc",
        },
        marginBottom: "1px",
    },
    itemBox: {
        width: "25%",
        paddingLeft: "10px",
        paddingRight: "10px",
        color: "#595959",
    },
    centerElem: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    avatar: {
        backgroundColor: "#b3b3b3",
    },
    names: {
        textTransform: "uppercase",
    }
}));


export const Ingredient = ({ingredient}) => {

    const classes = useStyles();
    const {removeIngredient} = useIngredients();
    const [showInput, setShowInput] = useState(false);
    console.log("showinput: " + showInput);
    return (
    <AppBar className={classes.root} position="static">
        <p className={`${classes.itemBox} ${classes.names}`}>{ingredient.name}</p>
        <p className={classes.itemBox}>{ingredient.unit}</p>
        {
           showInput ? (<TextField placeholder={ingredient.quantity}/>) :
            (<p className={classes.itemBox} 
                onClick={
                    () =>
                    setShowInput(true)
                }>
                {ingredient.quantity}
            </p>)
        }
        <div className={`${classes.itemBox} ${classes.centerElem}`}>
            <Avatar className={classes.avatar} onClick={() => removeIngredient(ingredient.name)}>
                <GoX/>
            </Avatar>
        </div>
    </AppBar>);
}