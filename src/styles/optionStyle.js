import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
    },
    container: {
        width: "100%",
        margin: "35px 0 ",
        padding: "0",
    },
    paper: {
        padding: "10px 20px",
        border: "2px solid black",
    },
    grid: {
        width: "100%",
    },
}));