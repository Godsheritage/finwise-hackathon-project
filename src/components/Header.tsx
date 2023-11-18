import React from "react";
import { Layout } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

const HeaderComponent = () => {
  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* <div className="demo-logo" /> */}
      <h1 style={{ color: "white" }}>Logo</h1>
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
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/savings"}>Savings</Link>
          </li>
          <li>
            <Link to={"/education"}>Education</Link>
          </li>
          <li>
            <Link to={"/budget"}>Budget</Link>
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
