import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import { useStyles } from "./style";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import moment from "moment";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import styles from "./styles.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Sidebar from "../../component/Sidebar";

const Navbar = () => {
  const classes = useStyles();
  const date = new Date();

  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <AppBar
        position="static"
        className={classes.nav}
        sx={{ color: "whitesmoke" }}
        color="primary"
      >
        <Container maxWidth="xl">
          <Box className={classes.boxContainer}>
            <Typography variant="h5" sx={{ fontFamily: "", color: "lightblue" }}>
              General Assembly
            </Typography>
            <Box className={styles.iconHolder} onClick={() => toggleDrawer(true)}>
              {open ? <CloseIcon /> : <MenuIcon />}
            </Box>
            <ul className={classes.ul}>
              <Typography className={styles["navbar-text"]}>
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
      {open && <Sidebar open={open} toggleDrawer={toggleDrawer} />}
    </>
  );
};
export default Navbar;
