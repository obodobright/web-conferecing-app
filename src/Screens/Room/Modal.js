import React, { useState } from "react";
import ModalComponent from "../../component/Modal";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from "./styles.module.css";

const Modal = ({ open, toggleModal, answer, user }) => {
  const handleAnswerCall = () => {
    answer();
    toggleModal(false);
  };

  return (
    <ModalComponent>
      <Box className={styles.Container}>
        <Typography sx={{ textAlign: "center" }}>Tunji wants to join your meeting</Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button variant="contained" sx={{ margin: "5px" }} onClick={handleAnswerCall}>
            Accepts
          </Button>
          <Button variant="outlined" sx={{ margin: "5px" }} onClick={() => toggleModal(false)}>
            Reject
          </Button>
        </Box>
      </Box>
    </ModalComponent>
  );
};

export default Modal;
