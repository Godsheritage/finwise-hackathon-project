import "./home.scss";
import React from "react";
import { Layout, theme } from "antd";

const { Content } = Layout;

const Home = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div>
      <Layout className="layout">
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
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontSize: "1.5rem"
            }}
          >
            Your all in one financial companion app
          </div>
        </div>
        {/* </Content> */}
      </Layout>
    </div>
  );
};

export default Home;
