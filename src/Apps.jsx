import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./Screens/Homescreen";
import Room from "./Screens/Room";

const Apps = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/room" element={<Room />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Apps;
