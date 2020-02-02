import { AppBar, Avatar } from "@material-ui/core";
import React from "react";
import {GoPlus, GoDash, GoX} from "react-icons/go"
import { makeStyles } from "@material-ui/styles";

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
    }

}));

export const Ingredient = ({ingredient}) => {
    const classes = useStyles();
    return (
    <AppBar className={classes.root} position="static">
        <p className={classes.itemBox}>{ingredient.name}</p>
        <p className={classes.itemBox}>{ingredient.unit}</p>
        <p className={classes.itemBox}>{ingredient.quantity}</p>
        <div className={`${classes.itemBox} ${classes.centerElem}`}>
            <Avatar className={classes.avatar}>
                <GoPlus/>
            </Avatar>
            <Avatar className={classes.avatar}>
                <GoDash/>
            </Avatar>
            <Avatar className={classes.avatar}>
                <GoX/>
            </Avatar>
        </div>
    </AppBar>);
}