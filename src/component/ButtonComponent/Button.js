import React from "react";
import { Button } from "@mui/material";
import { useStyles } from "./style";

export const ButtonComponent = ({ title, width, bgColor, border, color }) => {
  const props = {
    width: width,
    bgColor: bgColor,
    border: border,
    color: color,
  };
  const classes = useStyles();
  return <Button className={classes.buttonWrapper}>{title}</Button>;
};
