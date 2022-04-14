import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useStyles } from "../styles/style";
import { useContext, useEffect } from "react";
import { SocketContext } from "../SocketContext";

const VideoPlayer = () => {
  const classes = useStyles();
  const { getVideoStream, myVideo, userVideo, stream, call, acceptCall, callEnded, name } =
    useContext(SocketContext);

  useEffect(() => {
    getVideoStream();
  }, []);
  return (
    <Grid className={classes.gridContainer}>
      {stream && (
        <Box className={classes.paper}>
          <Grid item xs={12} md={16}>
            <Typography variant="h5">{name || "Name"}</Typography>
            <video src="" className={classes.video} autoPlay playsInline muted ref={myVideo} />
          </Grid>
        </Box>
      )}
      {/* my video */}
      {/* user video */}
      {acceptCall && !callEnded && (
        <Box className={classes.paper}>
          <Grid item xs={12} md={16}>
            <Typography variant="h5">{name || "Name"}</Typography>
            <video src="" className={classes.video} autoPlay playsInline muted ref={userVideo} />
          </Grid>
        </Box>
      )}

      {/* <Paper className={classes.paper}></Paper> */}
    </Grid>
  );
};

export default VideoPlayer;
