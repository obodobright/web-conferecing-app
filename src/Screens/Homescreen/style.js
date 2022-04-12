import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    container: {
        minHeight: "90vh",
        height: "100%",
        background: "transparent",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    boxContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        minHeight: "90vh",
        height: "100%",
    },
    hide: {
        display: "none",
    },
}));