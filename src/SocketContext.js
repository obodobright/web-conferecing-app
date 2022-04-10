import React, { useState, useRef, useEffect, createContext } from "react";
import { io } from "socket.io-client";
import Peer from "simple-peer";

const SocketContext = createContext();
const socket = io("http://localhost:8000");

const SocketProvider = ({ children }) => {
  const [stream, setStream] = useState(null);
  const [me, setMe] = useState("");
  const [call, setCall] = useState({});
  const [acceptCall, setAcceptCall] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [name, setName] = useState("");
  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();
  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((currentStream) => {
      setStream(currentStream);

      myVideo.current.srcObject = currentStream;
    });

    socket.on("me", (id) => setMe(id));
    socket.on("calluser", ({ from, name: callerName, signal }) => {
      setCall({ isRecievedCall: true, from, name: callerName, signal });
    });
  }, []);

  const answercall = () => {
    setAcceptCall(true);
    const peer = new Peer({ initiator: false, trickle: false, stream });

    peer.on("signal", (data) => {
      socket.emit("answercall", { signal: data, to: call.from });
    });
    peer.on("stream", (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });
    peer.signal(call.signal);
    connectionRef.current = peer;
  };

  const callUser = (id) => {
    const peer = new Peer({ initiator: true, trickle: true, stream });

    peer.on("signal", (data) => {
      socket.emit("calluser", { userToCall: id, signalData: data, from: me, name });
    });

    socket.on("callaccepted", (signal) => {
      setAcceptCall(true);
      peer.signal(signal);
    });
    connectionRef.current = peer;
  };

  const leaveCall = () => {
    setCallEnded(true);
    connectionRef.current.destroy();
    window.location.reload();
  };
  return (
    <SocketContext.Provider
      value={{
        call,
        leaveCall,
        answercall,
        callUser,
        acceptCall,
        myVideo,
        userVideo,
        stream,
        name,
        setName,
        callEnded,
        me,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export { SocketContext, SocketProvider };
