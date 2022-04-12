import React from "react";
import ReactDom from "react-dom";
import Apps from "./Apps";
import "./style.css";
import { SocketProvider } from "./SocketContext";

ReactDom.render(
  // <SocketProvider>
  <Apps />,
  // </SocketProvider>,
  document.getElementById("root")
);
