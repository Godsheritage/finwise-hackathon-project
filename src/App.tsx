import React from "react";
import Home from "./pages/home/Home";
import SignUp from "./pages/SignUp/SignUp";
import LogIn from "./pages/Login/LogIn";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/Header";
import FooterComponent from "./components/Footer";
import Education from "./pages/education/Education";
import Budget from "./pages/budget/Budget";
import { AnimatePresence } from "framer-motion";
import Savings from "./pages/savings/Savings";
import AutomatedSavingsAss from "./pages/savings/AutomatedSavingsAss"

const App: React.FC = () => {
  const [userName, setUserName] = useState();
  const [pass, setPass] = useState();
  const [Login, setLogin] = useState(false);
  console.log(Login);

  return (
    <>
      {/* THESE SECTIOON CONTROLS THE ROUTING */}
      <HeaderComponent />
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/SignUp"
            element={
              <SignUp
                userName={userName}
                pass={pass}
                setPass={setPass}
                setUserName={setUserName}
              />
            }
          />
          <Route
            path="/LogIn"
            element={
              <LogIn
                userName={userName}
                pass={pass}
                setPass={setPass}
                setUserName={setUserName}
                Login={Login}
                setLogin={setLogin}
              />
            }
          />

          <Route path="/education" element={<Education />} />
          <Route path="/savings" element={<AutomatedSavingsAss  />} />
          <Route path="/budget" element={<Budget />} />
        </Routes>
      </AnimatePresence>
      <FooterComponent />
    </>
  );
};

export default App;
