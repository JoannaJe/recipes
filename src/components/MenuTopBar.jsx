import React from "react";
import {AppBar, Link, Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    position: "fixed",
    marginTop: "0px",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e6e6e6",
    margin: "0px",
    height: "80px",
  },
  link: {
    color: "white",
  },
})
);

export const MenuTopBar = () => {
  const classes = useStyles();
  return (
      <AppBar position="relative" className={classes.root}>
        <img height="100%" src="nsl4.png"/>
        <Link className={classes.link}>{"bbbbbb"}</Link>
        <Link className={classes.link}>{"cccccccccc"}</Link>
      </AppBar>
  );
}