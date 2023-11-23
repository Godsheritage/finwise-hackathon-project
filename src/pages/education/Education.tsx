import { SettingOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import type { CollapseProps } from "antd";
import { Collapse, Select, Card, Row, Col } from "antd";

import { AnimatePresence, motion } from "framer-motion";

const { Option } = Select;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

type ExpandIconPosition = "start" | "end";

const Education: React.FC = () => {
  const [expandIconPosition, setExpandIconPosition] =
    useState<ExpandIconPosition>("start");

  const onPositionChange = (newExpandIconPosition: ExpandIconPosition) => {
    setExpandIconPosition(newExpandIconPosition);
  };

  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  const genExtra = () => (
    <SettingOutlined
      onClick={(event) => {
        // If you don't want click extra trigger collapse, you can prevent this:
        event.stopPropagation();
      }}
    />
  );

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "Can Finwise help with financial education?",
      children: (
        <div>
          Certainly. Finwise is dedicated to informing our users about financial
          literacy. Our platform includes educational resources and interactive
          tools to help our users understand key financial concepts and make
          informed decisions about their money.
        </div>
      ),
    },
    {
      key: "2",
      label: "What services does Finwise offer?",
      children: (
        <div>
          provides a range of services, including personalized financial advice,
          automated budgeting, sophisticated investment strategies, and expense
          tracking. Our goal is to empower users with the tools they need to
          make informed financial decisions.
        </div>
      ),
    },
    {
      key: "3",
      label: "Is Finwise available internationally?",
      children: (
        <div>
          Finwise is available in The United States. We are actively working to
          expand our services to more locations and will keep our users updated
          as we grow
        </div>
      ),
    },
    {
      key: "4",
      label: "Is Finwise available internationally? ",
      children: (
        <div>
          Finwise is available in The United States. We are actively working to
          expand our services to more locations and will keep our users updated
          as we grow.
        </div>
      ),
    },
    {
      key: "5 ",
      label: "How can Finwise help me save money?",
      children: (
        <div>
          Finwise simplifies saving by providing personalized budgeting tools
          and insights. Our AI analyzes your spending patterns and recommends
          practical ways to cut costs, helping you achieve your savings goals
          effortlessly.
        </div>
      ),
    },
    {
      key: "6",
      label:
        "What if I need assistance understanding a financial term or concept?",
      children: (
        <div>
          If you come across a term or concept you're unsure about, FinWise has
          you covered. Our flashcards includes user-friendly explanations and
          educational resources to help you navigate and understand various
          financial terms, making financial literacy accessible to all.
        </div>
      ),
    },
    {
      key: "7",
      label: "Can I set specific financial goals with Finwise?",
      children: (
        <div>
          Indeed! Finwise allows you to set and track your financial goals.
          Whether you're saving for a vacation, an emergency fund, or
          retirement, our platform helps you stay on track by providing
          actionable insights and progress updates tailored to your goals.
        </div>
      ),
    },
  ];

  const [selectedId, setSelectedId] = useState(0);

  const itemsd = [
    {
      id: 1,
      subtitile: "Card title",
      title: "Card Content",
    },
  ];
  return (
    <>
      {/* const [selectedId, setSelectedId] = useState(null) */}
      <div style={{ padding: "2rem" }}>
        <Row gutter={16}>
          <Col span={8}>
            <Card title="What is a credit score" bordered={false}>
              A credit score is a numerical representation of a person's
              creditworthiness, while a credit report details their credit
              history. Both are crucial for lenders to assess the risk of
              lending money, and individuals can use them to monitor and improve
              their financial health.
            </Card>
          </Col>
          <Col span={8}>
            <Card title="what is a budget" bordered={false}>
              A budget is a financial plan that helps individuals allocate their
              income towards expenses, savings, and debt repayment. It provides
              a roadmap for managing money effectively and achieving financial
              goals.
            </Card>
          </Col>
          <Col span={8}>
            <Card title="What is an emergency Fund" bordered={false}>
              An emergency fund serves as a financial safety net, covering
              unforeseen expenses like medical bills or car repairs. Ideally, it
              should contain three to six months' worth of living expenses to
              provide a buffer during unexpected financial challenges.
            </Card>
          </Col>
        </Row>
      </div>
      <div style={{ padding: "8rem", backgroundColor: "#FAFAFA" }}>
        <h2>FAQ's</h2>
        <p>Got Some urgent questions, we've got some answers</p>
        <Collapse
          defaultActiveKey={["1"]}
          onChange={onChange}
          expandIconPosition={expandIconPosition}
          items={items}
        />
      </div>
      <br />
    </>
  );
};

export default Education;
