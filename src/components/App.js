import React from "react";
import LoginScreen from "./LoginScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserListScreen from "./UserListScreen";
import MapScreen from "./MapScreen";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<LoginScreen />} />
          <Route path="/users" element={<UserListScreen />} />
          <Route path="/map/:value" element={<MapScreen />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
