import React from "react";
import { Layout } from "antd";
import logo from "../assets/logo.jpeg"
import { Link } from "react-router-dom";

const { Header } = Layout;

const HeaderComponent = () => {
  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#4E9F3D",
        opacity:"0.7"
      }}
    >
      {/* <div className="demo-logo" /> */}
      <img src={logo} style={{height:"3.5rem", width:"3.5rem"}} alt="" />
      <div>
        <ul
          style={{
            display: "flex",
            color: "white",
            listStyle: "none",
            gap: "1rem",
          }}
        >
          <li>
            <Link to={"/"} style={{ color: "white" }}>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/savings"} style={{ color: "white" }}>
              Savings
            </Link>
          </li>
          <li>
            <Link to={"/education"} style={{ color: "white" }}>
              Education
            </Link>
          </li>
          <li>
            <Link to={"/budget"} style={{ color: "white" }}>
              Budget
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <img
          src="https://openclipart.org/image/800px/247320"
          style={{ height: "1.5rem", width: "1.5rem" }}
          alt=""
        />
      </div>
    </Header>
  );
};

export default HeaderComponent;
