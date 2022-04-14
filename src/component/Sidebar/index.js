import React, { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from "./index.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoIcon from "@mui/icons-material/Info";
const Sidebar = ({ open, toggleDrawer }) => {
  const mobileNav = () => {
    return (
      <Container className={styles.mobileContainer}>
        <Box>
          <Typography>Settings</Typography>
          <Typography>Get to know us</Typography>
          <Typography>Login</Typography>
        </Box>
      </Container>
    );
  };

  const navs = [
    {
      link: "",
      navName: "Login",
      icon: <AccountCircleIcon />,
    },
    {
      link: "",
      navName: "Settings",
      icon: <SettingsIcon />,
    },
    {
      link: "",
      navName: "Get to know",
      icon: <InfoIcon />,
    },
  ];

  return (
    <>
      <Container className={styles.mobileContainer}>
        {navs.map((nav) => (
          <Box className={styles.mobileBox}>
            {nav.icon}
            <Typography sx={{ paddingLeft: "5px" }}>{nav.navName}</Typography>
          </Box>
        ))}
      </Container>
    </>
  );
};
export default Sidebar;
