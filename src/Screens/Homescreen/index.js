import React, { useState, useEffect, useContext } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import DuoRoundedIcon from "@mui/icons-material/DuoRounded";
import KeyboardAltOutlinedIcon from "@mui/icons-material/KeyboardAltOutlined";
import ButtonComponent from "../../component/ButtonComponent";
import Navbar from "../../component/Navbar";
import { useStyles } from "./style";
import { Typography } from "@mui/material";
import hero from "../../images/hero.png";
import { SocketContext } from "../../SocketContext";

import { useNavigate } from "react-router-dom";
const HomeScreen = () => {
  const classes = useStyles();
  const [input, setInput] = useState("");
  const { createLink, link, me, callUser } = useContext(SocketContext);
  useEffect(() => {}, []);

  const navigate = useNavigate();

  useEffect(() => {
    createLink();
  }, []);

  const handleNavRoom = (id) => {
    callUser(id);
    console.log("click enter", id);
    navigate("/room");
  };
  console.log("meeting me", me);
  console.log("meeting link", link);
  return (
    <div>
      <Navbar />
      <Container className={classes.container}>
        <Box className={classes.boxContainer}>
          <Grid item xs={6} md={6}>
            <Box>
              <Typography variant="h3">Join the General Assembly!</Typography>
              <Typography variant="h6">
                Whether its a meeting or party, use{" "}
                <span style={{ color: "#48a6e5" }}>General Assembly</span> to connect with people
                all over the world.
              </Typography>
              <Box className={classes.boxWrapper}>
                <Box onClick={() => handleNavRoom(link)}>
                  <ButtonComponent
                    title={"New Meeting"}
                    icon={<DuoRoundedIcon />}
                    width="200px"
                    bgColor="#48a6e5"
                    color="white"
                  />
                </Box>
                <Box className={classes.textContainer}>
                  <KeyboardAltOutlinedIcon />
                  <input
                    type="text"
                    className={classes.textField}
                    placeholder="Enter a code"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  />
                </Box>
                {input && <Button>Join</Button>}
              </Box>
            </Box>
          </Grid>
          <Grid item xl={6} md={6}>
            <Box sx={{ background: "red", display: "flex", alignItems: "center" }}>
              <img src={hero} alt="" className={classes.img} />
            </Box>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};
export default HomeScreen;
