import React from "react";
import { Layout, theme } from "antd";

const { Header, Content, Footer } = Layout;


const Home = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div>
      <Layout className="layout">
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
              <li>Home</li>
              <li>Fiancial Analysis</li>
              <li>Education</li>
              <li>About</li>
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
        <Content style={{ padding: "0 50px" }}>
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
            Content
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          FinWise ©2023 All Rights reserved
        </Footer>
      </Layout>
    </div>
  );
};

export default Home;
