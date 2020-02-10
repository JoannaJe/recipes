import React from "react";
import {AppBar, Link, Avatar} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    padding: "15px",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#677e7e",
    margin: "1px",
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
        <Avatar>{"nSL"}</Avatar>
        <Link className={classes.link}>{"bbbbbb"}</Link>
        <Link className={classes.link}>{"cccccccccc"}</Link>
      </AppBar>
  );
}