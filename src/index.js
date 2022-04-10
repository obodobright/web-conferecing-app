import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import "./style.css";
import { SocketProvider } from "./SocketContext";

ReactDom.render(
  <SocketProvider>
    <App />
  </SocketProvider>,
  document.getElementById("root")
);
