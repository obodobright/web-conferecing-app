import { useContext } from "react";
import { SocketContext } from "../SocketContext";

const Notification = () => {
  const { answercall, acceptCall, call } = useContext(SocketContext);
  return (
    <div>
      {call.isRecievedCall && !acceptCall && (
        <>
          <div>{call.name} is calling</div>
          <button onClick={answercall}>Answer</button>
        </>
      )}
    </div>
  );
};

export default Notification;
