import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import CameraScreen from "../CameraScreen";
import HomeScreen from "../HomeScreen";
import WeatherApp from "../WeatherApp";

const LandingPage = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/homescreen" element={<HomeScreen />} />
        <Route exact path="/camerascreen" element={<CameraScreen />} />
        <Route exact path="/weatherscreen" element={<WeatherApp />} />
        <Route
          path="*"
          element={
            <h3 style={{ textAlign: "center" }}>Error 404. Invalid Route.</h3>
          }
        />
      </Routes>
    </Router>
  );
};

export default LandingPage;
