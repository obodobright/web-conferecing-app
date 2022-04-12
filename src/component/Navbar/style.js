import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    nav: {
        background: "whitesmoke",
        color: "blue",
        padding: "10px",
    },
    boxContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    ul: {
        margin: "0",
        padding: "0",
        display: "flex",
        alignItems: "center",
        listStyle: "none",
        color: "grey",
    },
}));