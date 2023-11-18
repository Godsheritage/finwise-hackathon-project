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
      </Layout>
    </div>
  );
};

export default Home;
