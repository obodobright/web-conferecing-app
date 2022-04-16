import React, { useContext, useState } from "react";
import VideoPlayer from "../../component/VideoPlayer";
import Notification from "../../component/Notification";
import Options from "../../component/Options";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import VideocamIcon from "@mui/icons-material/Videocam";
import CallEndIcon from "@mui/icons-material/CallEnd";
import Box from "@mui/material/Box";
import styles from "./styles.module.css";
import { SocketContext } from "../../SocketContext";
import Modal from "./Modal";
import LinkModal from "./LinkModal";

const Room = () => {
  const { acceptCall, leaveCall, answercall, call } = useContext(SocketContext);

  const [openModal, setOpenModal] = useState(false);

  const toggleModal = (open) => {
    setOpenModal(open);
  };
  return (
    <>
      <Box className={styles.container}>
        {call.isRecievedCall && !acceptCall && (
          <Modal open={openModal} toggleModal={toggleModal} answer={answercall} user={call.name} />
        )}
        <VideoPlayer />
        <LinkModal />
        <Box className={styles.boxWrapper}>
          <Box className={styles.iconHolder}>
            <KeyboardVoiceIcon />
          </Box>
          <Box className={styles.iconHolder}>
            <VideocamIcon />
          </Box>
          <Box className={styles.iconHolder} onClick={leaveCall}>
            <CallEndIcon />
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Room;
