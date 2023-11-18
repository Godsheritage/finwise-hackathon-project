import React from "react";
import Home from "./pages/home/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/Header";
import FooterComponent from "./components/Footer";
import Education from "./pages/education/Education";
import Budget from "./pages/budget/Budget";

const App: React.FC = () => {
  return (
    <>
    {/* THESE SECTIOON CONTROLS THE ROUTING */}
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/budget" element={<Budget />} />
      </Routes>
      <FooterComponent />
    </>
  );
};

export default App;
