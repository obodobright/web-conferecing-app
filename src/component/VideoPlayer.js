import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Typography from "@mui/material/Typography";
import { useStyles } from "../styles/style";
const VideoPlayer = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.gridContainer}>
      <Paper className={classes.paper}></Paper>
      <Paper className={classes.paper}></Paper>
    </Grid>
  );
};

export default VideoPlayer;
