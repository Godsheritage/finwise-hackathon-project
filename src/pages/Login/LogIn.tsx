import React from "react";
import { useState } from "react";
import { Input, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.jpeg'
import {motion} from "framer-motion"
import Transitions from "../../utils/Transitions.jsx"

const LogIn = ({ setUserName, userName, setPass, pass, Login, setLogin }) => {
  const [LoginPass, setLoginPass] = useState();
  const [LoginUserName, setLoginUserName] = useState();
  const history = useNavigate();
  const HandleLogInSubmission = () => {
    console.log(userName, LoginUserName, LoginPass, pass);
 
    history("/")
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "83vh",
        backgroundColor: "#FAFAFA",
      }}

    >
      <div
        style={{
          padding: "6rem",
          borderRadius: "10px",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img src={logo} alt="" style={{height: "5rem", width:"5rem", marginBottom:"1rem"}} />
        <Input
          size="large"
          placeholder="UserName"
          id="User"
          prefix={<UserOutlined />}
          onChange={(event) => setLoginUserName(event.target.value)}
          style={{ width: "25rem" }}
        />
        <br />
        <br />
        <Input
          size="large"
          type="password"
          placeholder="Password"
          id="User"
          prefix={<UserOutlined />}
          onChange={(event) => setLoginPass(event.target.value)}
          style={{ width: "25rem" }}
        />
        <br />
        <br />
        <Button type="primary" onClick={HandleLogInSubmission} >
          Log In!
        </Button>
        <Link to={"/signup"}>
          <p>Don't have an account? SignUP</p>
        </Link>
      </div>
    </div>
  );
};

export default LogIn;
