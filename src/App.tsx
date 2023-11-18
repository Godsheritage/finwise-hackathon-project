import React from "react";
import Home from "./pages/home/Home";
import SignUp from "./SignUp/SignUp";
import LogIn from "./Login/LogIn";
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/Header";
import FooterComponent from "./components/Footer";

const App: React.FC = () => {
  const [userName,setUserName ] = useState()
  const [pass,setPass ] = useState()
  const [Login, setLogin ] = useState(false)
  console.log(Login)
    
  return (
    
    <>
    {/* THESE SECTIOON CONTROLS THE ROUTING */}
      <HeaderComponent />
      <Routes>
        
        <Route path="/" element={<Home />}  />
        <Route path= "/SignUp" element = {<SignUp  userName = {userName} pass = {pass} setPass = {setPass} setUserName = {setUserName} />} />
        <Route path= "/LogIn" element = {<LogIn  userName = {userName} pass = {pass} setPass = {setPass} setUserName = {setUserName} Login= {Login} setLogin={setLogin } />} />
 
      </Routes>
      <FooterComponent />
    </>
  );
};

export default App;
