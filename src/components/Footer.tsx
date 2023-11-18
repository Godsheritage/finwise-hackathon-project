import React from "react";
import { Layout } from "antd";
import Chat from "../utils/ChatBot"

const { Footer } = Layout;

const FooterComponent = () => {
  return (
    <Footer style={{ textAlign: "center" }}>
      FinWise ©2023 All Rights reserved
      <Chat/>
    </Footer>
  );
};

export default FooterComponent;
