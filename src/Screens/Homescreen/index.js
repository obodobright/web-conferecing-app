import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import DuoRoundedIcon from "@mui/icons-material/DuoRounded";
import KeyboardAltOutlinedIcon from "@mui/icons-material/KeyboardAltOutlined";
import { ButtonComponent } from "../../component/ButtonComponent/Button";
import Navbar from "../../component/Navbar";
import { useStyles } from "./style";
import { Typography } from "@mui/material";
const HomeScreen = () => {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Container maxWidth="lg" className={classes.container}>
        <Box className={classes.boxContainer}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={6}>
              <Box>
                <Typography variant="h4">Join the General Assembly!</Typography>
                <Typography variant="h6">
                  Whether its a meeting or party, use{" "}
                  <span style={{ color: "#48a6e5" }}>General Assembly</span> to connect with people
                  all over the world.
                </Typography>
                <Box>
                  <Box>
                    <ButtonComponent
                      title="create instant meeting"
                      width="300px"
                      bgColor="#48a6e5"
                      color="whitesmoke"
                    />
                  </Box>
                  <Box>
                    <ButtonComponent
                      title="dd "
                      width="300px"
                      bgColor="transparent"
                      border="1px solid #48a6e5"
                      color="white"
                    />
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xl={6} md={6}>
              <Box sx={{ background: "red" }}>
                <Typography>Image</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};
export default HomeScreen;
