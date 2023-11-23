import "./home.scss";
import React from "react";
import { Link } from "react-router-dom";
import { Layout, theme, Button } from "antd";

const { Content } = Layout;

const Home = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div>
      <Layout className="layout" >
        {/* <Content style={{ padding: "0 50px" }}> */}
        {/* //* May Bring Back breadcrumbs */}
        {/* <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <div
          className="site-layout-content"
          style={{ background: colorBgContainer }}
        >
          <div
            className="bg-image"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              paddingLeft: "50px",
              alignItems: "center",
              color: "white",
              fontSize: "1.5rem",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center", alignItems:"center"}}>
              <div>
                <p style={{ fontFamily: "cursive", fontSize: "2rem" }}>
                  Get the essential financial companion for yourself
                </p>
                <div style={{ marginTop: "1rem" }}>
                  <Button>
                    <Link to={"/education"}>Learn more</Link>
                  </Button>
                  <Link to={"/savings"}>
                    <Button
                      style={{
                        marginLeft: "1rem",
                        color: "white",
                        backgroundColor: "#85bb79",
                      }}
                    >
                      Explore our services
                    </Button>
                  </Link>
                </div>
              </div>
              <div>
                <img
                  src="https://static.wixstatic.com/media/040b0b_f3ee5b32d96e43f9abd52b80f678b90d~mv2.gif"
                  alt=""
                  style={{height:"12rem", width:"12rem", marginLeft:"20rem", opacity:"0.7"}}
                />
              </div>
            </div>
          </div>
        </div>
        {/* </Content> */}
      </Layout>
    </div>
  );
};

export default Home;
