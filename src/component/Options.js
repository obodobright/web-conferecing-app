import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useStyles } from "../styles/optionStyle";
import { SocketContext } from "../SocketContext";
import { useContext, useState } from "react";
// import { Assignment } from "@material-ui/icons";

const Options = ({ children }) => {
  const { me, acceptCall, callEnded, leaveCall, name, setName, callUser } =
    useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");

  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Paper elevation={10} className={classes.paper}>
        <form className={classes.root} noValidate autoComplete="off">
          <Grid className={classes.grid}>
            <Grid item xs={12} md={6}>
              <Typography gutterBottom variant="h5">
                Account Info
              </Typography>
              <TextField
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
              ></TextField>
              {console.log(me)}
              <CopyToClipboard text={me}>
                <Button color="primary" fullWidth>
                  copy
                </Button>
              </CopyToClipboard>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography gutterBottom variant="h5">
                Make a call
              </Typography>
              <TextField
                value={idToCall}
                onChange={(e) => setIdToCall(e.target.value)}
                fullWidth
              ></TextField>

              {acceptCall && !callEnded ? (
                <Button onClick={leaveCall}>Hang up</Button>
              ) : (
                <Button onClick={() => callUser(idToCall)}>Make A call</Button>
              )}
            </Grid>
          </Grid>
        </form>
        {children}
      </Paper>
    </Container>
  );
};

export default Options;
