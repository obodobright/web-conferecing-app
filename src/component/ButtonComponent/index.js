import React from "react";
import { Button } from "@mui/material";
import { useStyles } from "./style";

const ButtonComponent = ({ title, width, bgColor, icon, color }) => {
  const classes = useStyles();
  const styles = {
    background: "red",
  };

  const { root } = classes;
  return (
    <Button
      className={root}
      variant="outlined"
      startIcon={icon}
      sx={{ background: bgColor, color, margin: "10px" }}
    >
      {" "}
      {title}
    </Button>
  );
};
export default ButtonComponent;
