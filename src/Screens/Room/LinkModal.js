import React, { useState } from "react";
import ModalComponent from "../../component/Modal";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from "./styles.module.css";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { CopyToClipboard } from "react-copy-to-clipboard";

const LinkModal = () => {
  return (
    <ModalComponent>
      <Box className={styles.linkContainer}>
        <Typography variant="body1">
          Itt seems you are the only one int his room, you can share your meeting link
        </Typography>
        <Typography variant="body2" sx={{ paddingTop: "15px" }}>
          Meeing Link
        </Typography>
        <Box className={styles.linkBox}>
          <Box className={styles.linkInput}>link here</Box>
          <CopyToClipboard text={"me"}>
            <ContentCopyIcon sx={{ cursor: "pointer" }} />
          </CopyToClipboard>
        </Box>
      </Box>
    </ModalComponent>
  );
};

export default LinkModal;
