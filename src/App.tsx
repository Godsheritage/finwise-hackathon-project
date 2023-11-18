import React from "react";
import Home from "./pages/home/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/Header";
import FooterComponent from "./components/Footer";

const App: React.FC = () => {
  return (
    <>
    {/* THESE SECTIOON CONTROLS THE ROUTING */}
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <FooterComponent />
    </>
  );
};

export default App;
