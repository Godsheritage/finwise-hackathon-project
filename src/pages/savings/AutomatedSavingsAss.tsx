import React from "react";
import { useState } from "react";
import { Input, Button, Table } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import AutomatedSavingFunctionality from "./Savings";

const AutomatedSavingsAss = () => {
  const navigate = useNavigate();
  const [IncomeCondition, setIncomeCondition] = useState(false);
  const [ExpenseCondition, setExpenseCondition] = useState(false);
  const [GoalCondition, setGoalCondition] = useState(false);
  const [TargetAmountCondition, setTargetAmountCondition] = useState(false);
  const [incomeAmount, setIncomeAmmount] = useState();
  const [expenseAmount, setExpenseAmount] = useState();
  const [goal, setgoal] = useState(false);
  const [TargetAmount, setTargetAmount] = useState();
  const [originalPay, setoriginalPay] = useState();
  const [pay, setpay] = useState();
  const [month, setMonth] = useState(1);
  const [calculateRule, setcalculateRule] = useState(true);

  const { CheckPrompt, dataSource, columns } = AutomatedSavingFunctionality({
    incomeAmount,
    setIncomeAmmount,
    IncomeCondition,
    ExpenseCondition,
    GoalCondition,
    setExpenseAmount,
    setExpenseCondition,
    setgoal,
    setGoalCondition,
    TargetAmount,
    goal,
    expenseAmount,
    setIncomeCondition,
    calculateRule,
    setcalculateRule,
    pay,
    setpay,
    month,
    setMonth,
    originalPay,
    setoriginalPay,
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p style={{ paddingTop: "2rem", paddingRight: "1rem" }}>
          EnterIncome After taxes
        </p>
        <Input
          size="large"
          placeholder="Income"
          id="User"
          prefix={<UserOutlined />}
          onChange={(event) => setIncomeAmmount(event.target.value)}
          style={{ width: "15rem", marginTop: "2rem" }}
        />
      </div>
      {/* <br />
      <br /> */}
      {IncomeCondition ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{ paddingTop: "2rem", paddingRight: "1rem" }}>
            Enter your monthly expenses
          </p>
          <Input
            size="large"
            placeholder="Expenses"
            id="User"
            prefix={<UserOutlined />}
            onChange={(event) => setExpenseAmount(event.target.value)}
            style={{ width: "15rem", marginTop: "2rem" }}
          />
        </div>
      ) : null}
      {/* <br />
      <br /> */}
      {ExpenseCondition ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{ paddingTop: "2rem", paddingRight: "1rem" }}>
            Enter your savings goal
          </p>
          <Input
            size="large"
            placeholder="goal"
            id="User"
            prefix={<UserOutlined />}
            onChange={(event) => setgoal(event.target.value)}
            style={{ width: "15rem", marginTop: "2rem" }}
          />
        </div>
      ) : null}
      <br />
      <br />
      {GoalCondition ? (
        <Table dataSource={dataSource} columns={columns} />
      ) : null}
      <br />
      <br />

      <Button
        type="primary"
        onClick={() => {
          CheckPrompt();
        }}
      >
        Submit!
      </Button>
    </div>
  );
};

export default AutomatedSavingsAss;
