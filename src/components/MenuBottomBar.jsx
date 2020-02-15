import React from "react";
import {AppBar, Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    position: "fixed",
    bottom: "0px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: "15px",
    backgroundColor: "#d9d9d9",
    height: "70px",
  },
  button: {
    backgroundColor: "#808080",
    width: "100%",
    marginLeft: "20px",
    marginRight: "20px",
    "&:hover": {
      backgroundColor: "#4f6363",
    },
    // bottom: "0px",
  },
}));

export const MenuBottomBar = () => {
  const classes = useStyles();
  return (<AppBar position="relative" className={classes.root}>
    <Button className={classes.button} variant="contained" color="primary">Dodaj składnik</Button>
    <Button className={classes.button} variant="contained" color="primary">Dodaj przepis</Button>
  </AppBar>)
}