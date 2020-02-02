import {Card, CardContent, Typography, Avatar, CardMedia} from "@material-ui/core";
import React from "react"
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: "#d9d9d9",
        height: "100%",
        margin: "3px",
        display: "flex",
    },
    title: {
        fontFamily: "Helvetica",
        textTransform: "uppercase",
    },
    media: {
        height: 0,
        paddingTop: "20%",
        width: "40%",
    },
    titleBlock: {
        width: "60%",
    }
}));

export const Recipe = ({name}) => {
    const classes = useStyles();

    return (<Card className={classes.root}>
                <CardMedia className={classes.media}
                    image="https://www.everyday-delicious.pl/wp-content/uploads/2018/02/sa%C5%82atka-z-suszonymi-pomidorami-oliwkami-i-fet%C4%85-sun-dried-tomatoes-black-olives-and-feta-salad-www.maine-cook.com_-600x802.jpg"
                />
                <CardContent className={classes.titleBlock}>
                    <Typography variant="h6" className={classes.title}>
                        {name}
                    </Typography>
                </CardContent>
            </Card>);
}