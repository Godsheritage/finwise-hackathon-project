import React, { useState } from "react";
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from "antd";

type SizeType = Parameters<typeof Form>[0]["size"];

const Budget: React.FC = () => {
  const [componentSize, setComponentSize] = useState<SizeType | "default">(
    "default"
  );

  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };

  return (
    <>
      <div style={{ padding: "3rem" }}>
        <p>Please enter the follwoign information so we could generate a budget</p>
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          initialValues={{ size: componentSize }}
          onValuesChange={onFormLayoutChange}
          size={componentSize as SizeType}
          style={{ maxWidth: 600 }}
        >
          <Form.Item label="Monthly Salary:  ">
            <InputNumber />
          </Form.Item>
          <Form.Item label="Rent / Morgage: ">
            <InputNumber />
          </Form.Item>
          <Form.Item label="Utility Bills">
            <InputNumber />
          </Form.Item>
          <Form.Item label="Variable Expenses   ">
            <InputNumber />
          </Form.Item>
          <Form.Item>
            <Button>Get a budget</Button>
          </Form.Item>

          {/* Rent/Mortgage: The cost of housing.
Utilities: Monthly bills for electricity, water, gas, internet, and other essential services.
Insurance: Health, life, auto, and any other insurance premiums.
Loan Payments: Payments for loans such as student loans, car loans, or personal loans. */}
        </Form>  
      </div>
    </>
  );
};

export default Budget;
