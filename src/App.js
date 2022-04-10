import React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import VideoPlayer from "./component/VideoPlayer";
import Notification from "./component/Notification";
import Options from "./component/Options";
import { useStyles } from "./styles/style";

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <AppBar position="static" className={classes.appNav}>
        <Typography variant="h6">video call</Typography>
      </AppBar>
      <VideoPlayer />
      <Options>
        <Notification />
      </Options>
    </div>
  );
};
export default App;
