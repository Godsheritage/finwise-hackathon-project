import React, { useState } from "react";
import { Button, Form, Input } from "antd";

type SizeType = Parameters<typeof Form>[0]["size"];

const Budget: React.FC = () => {
  const [componentSize, setComponentSize] = useState<SizeType | "default">(
    "default"
  );

  const [budgetVal, setBudgetVal] = useState(0);

  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };

  return (
    <>
      <div style={{ padding: "3rem" }}>
        <h2>
          Please enter the following information so we could generate a budget
        </h2>
        <div>
          <p>Monthly after-tax income: </p>
          <Input
            style={{ width: "25rem" }}
            onChange={(e) => setBudgetVal(parseInt(e.target.value))}
          />
        </div>
        <h3>Your 50/30/20 Numbers</h3>
        <p>Necessities</p>
        <h3>{!budgetVal ? 0 : "$" + Math.floor(0.5 * budgetVal)}</h3>
        <p>Wants</p>
        <h3>{!budgetVal ? 0 : "$" + Math.floor(0.3 * budgetVal)}</h3>
        <p>Savings and Debt Payment</p>
        <h3>{!budgetVal ? 0 : "$" + Math.floor(0.2 * budgetVal)}</h3>
      </div>
    </>
  );
};

export default Budget;
