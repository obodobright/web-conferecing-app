import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    wrapper: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    appNav: {
        width: "500px",
        background: "purple",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        textAlign: "center",
    },
    gridContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
    },
    video: {
        width: "500px",
        // [theme.breakpoints.down("xs")]: {
        //     width: "300px",
        // },
    },
    paper: {
        padding: "10px",
        border: "2px solid black",
        margin: "10px",
    },
}));