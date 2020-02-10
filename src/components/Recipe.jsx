import {Card, CardContent, Typography, CardMedia} from "@material-ui/core";
import React from "react"
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: "#d9d9d9",
        '&:hover': {
            backgroundColor: "#b3b3b3",
        },
        height: "100%",
        marginBottom: "3px",
        display: "flex",
        alignItems: "center",
    },
    title: {
        fontFamily: "Helvetica",
        textTransform: "uppercase",
    },
    media: {
        height: "100%",
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
                    image="https://cataas.com/cat"
                />
                <CardContent className={classes.titleBlock}>
                    <Typography variant="h6" className={classes.title}>
                        {name}
                    </Typography>
                </CardContent>
            </Card>);
}