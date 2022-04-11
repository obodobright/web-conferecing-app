import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { useStyles } from "../styles/style";
import { useContext } from "react";
import { SocketContext } from "../SocketContext";
const VideoPlayer = () => {
  const classes = useStyles();
  const { myVideo, userVideo, stream, call, acceptCall, callEnded, name } =
    useContext(SocketContext);
  return (
    <Grid className={classes.gridContainer}>
      {stream && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={16}>
            <Typography variant="h5">{name || "Name"}</Typography>
            <video src="" className={classes.video} autoPlay playsInline muted ref={myVideo} />
          </Grid>
        </Paper>
      )}
      {/* my video */}
      {/* user video */}
      {acceptCall && !callEnded && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={16}>
            <Typography variant="h5">{name || "Name"}</Typography>
            <video src="" className={classes.video} autoPlay playsInline muted ref={userVideo} />
          </Grid>
        </Paper>
      )}

      {/* <Paper className={classes.paper}></Paper> */}
    </Grid>
  );
};

export default VideoPlayer;
