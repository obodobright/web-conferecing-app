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
        justifyContent: "center",
        alignItems: "center",
        minHeight: "90vh",
        height: "100%",
        ["@media(max-width:768px)"]: {
            flexWrap: "wrap",
            flexDirection: "column-reverse",
            textAlign: "center",
            margin: "20px auto",
        },
    },
    boxWrapper: {
        display: "flex",
        textAlign: "left",
        // justifyContent: "center",
        alignItems: "center",
        paddingTop: "30px",
        flexWrap: "wrap",
        ["@media (max-width:780px)"]: {
            justifyContent: "center",
        },
    },
    textContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid #48a6e5",
        width: "250px",
        height: "35px",
        borderRadius: "3px",
        padding: "2px 7px ",
        marginLeft: "10px",
    },
    textField: {
        width: "230px",
        height: "38px",
        border: "none",
        outline: "none",
        paddingLeft: "5px",
        fontSize: "16px",
    },
    img: {
        // width: ",
        height: "400px",
        ["@media(max-width:768px)"]: {
            width: "300px",
            height: "300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "50%",
            background: "red",
        },
    },
}));