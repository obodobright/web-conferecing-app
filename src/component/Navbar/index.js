import React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import { useStyles } from "./style";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import moment from "moment";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";

const Navbar = () => {
  const classes = useStyles();
  const date = new Date();
  const timeData = date.toLocaleTimeString();
  console.log(timeData);
  return (
    <AppBar
      position="static"
      className={classes.nav}
      sx={{ background: "whitesmoke", color: "blue" }}
    >
      <Container maxWidth="xl">
        <Box className={classes.boxContainer}>
          <Typography variant="h5" sx={{ fontFamily: "", color: "#48a6e5" }}>
            General Assembly
          </Typography>
          <ul className={classes.ul}>
            <Typography sx={{ padding: " 7px", fontSize: "18px", color: "" }}>
              {/* {moment(date).format(" h:mm - MMMM Do YYYY")} */}
              {moment(date).format("LT")} - {moment(date).format("MMM Do YYYY")}
            </Typography>
            <Box sx={{ cursor: "pointer", paddingLeft: "15px", fontSize: "18px" }}>
              <AccountCircleRoundedIcon sx={{ fontSize: "26px" }} />
            </Box>
          </ul>
        </Box>
      </Container>
    </AppBar>
  );
};
export default Navbar;
