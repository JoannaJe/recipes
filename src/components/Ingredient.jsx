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
        backgroundColor: "#819898",
        '&:hover': {
            backgroundColor: "#b9c6c6",
        },
        marginBottom: "2px",
    },
    itemBox: {
        width: "25%",
        paddingLeft: "10px",
        paddingRight: "10px",
    },
    centerElem: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    avatar: {
        backgroundColor: "#8da5a5",
    },
    names: {
        textTransform: "uppercase",
    }
}));


export const Ingredient = ({ingredient}) => {

    const classes = useStyles();
    const {removeIngredient} = useIngredients();
    // const [showInput, setShowInput] = useState(false);
    // console.log("showinput: " + showInput);
    return (
    <AppBar className={classes.root} position="static">
        <p className={`${classes.itemBox} ${classes.names}`}>{ingredient.name}</p>
        <p className={classes.itemBox}>{ingredient.unit}</p>
        <p className={classes.itemBox}>{ingredient.quantity}</p>
        {/*{*/}
        {/*    showInput ? (<TextField/>) :*/}
        {/*        (<p className={classes.itemBox} onClick={setShowInput(true)}>{ingredient.quantity}</p>)*/}
        {/*}*/}
        <div className={`${classes.itemBox} ${classes.centerElem}`}>
            <Avatar className={classes.avatar} onClick={() => removeIngredient(ingredient.name)}>
                <GoX/>
            </Avatar>
        </div>
    </AppBar>);
}