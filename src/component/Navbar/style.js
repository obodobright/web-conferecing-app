import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    nav: {
        background: "#48a6e5",
        color: "white",
        padding: "10px",
        width: "100%",
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
        color: "lightblue",
        ["@media(max-width:400px)"]: {
            display: "none",
        },
    },
}));