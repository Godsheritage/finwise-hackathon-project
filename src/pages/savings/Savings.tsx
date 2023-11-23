import React from "react";

const AutomatedSavingFunctionality = ({
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
}) => {
  const dataSource = [
    {
      key: "1",
      name: "User",
      savings: "$"+pay,
      timespan: month,
    },
    {
      key: "2",
      name: "User",
      savings: "$" +originalPay * 2,
      timespan: 2,
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Savings",
      dataIndex: "savings",
      key: "savings",
    },
    {
      title: "TimeSpan",
      dataIndex: "timespan",
      key: "timespan",
    },
  ];

  const calculate20Percent = async () => {
    //monthly pay before expenses
    const MonthlyPay = incomeAmount / 12;
    const percentage = 20 / 100;
    console.log("THE PERCENTAGE IS", percentage);
    const calcpay = (MonthlyPay - expenseAmount) * percentage;
    console.log(
      "THIS IS pay in calculate 20 percent",
      calcpay,
      expenseAmount,
      MonthlyPay
    );
    console.log("This is setpay", setpay);
    setpay(calcpay);
    setoriginalPay(calcpay);
  };

  const TimeSpanForGoal = () => {
    let payCopy = pay;
    const originalPayCopy = originalPay;
    const goalCopy = goal;
    let monthcopy = month;
    console.log("THIS WAS HIT", "pay :", pay, originalPay, goalCopy);
    while (payCopy < goalCopy) {
      payCopy += originalPayCopy;
      monthcopy += 1;
      console.log(payCopy);
      console.log(monthcopy);
    }
    setpay(payCopy);
    setMonth(monthcopy);
  };

  const CheckPrompt = async () => {
    console.log("cool");
    if (IncomeCondition == false) {
      setIncomeCondition(true);
    } else if (IncomeCondition == true && ExpenseCondition == false) {
      console.log("TRUEEE");
      calculate20Percent();
      setExpenseCondition(true);
    } else if (
      IncomeCondition == true &&
      ExpenseCondition == true &&
      GoalCondition == false
    ) {
      console.log("WE got hit we got hit");
      setcalculateRule(true);

      TimeSpanForGoal();
      setGoalCondition(true);
    }
    console.log(goal.length > 0);
    //    if (goal.length > 0 ){
    //     console.log("MADAR MADAR WE WERE HIT -.-")
    //     setcalculateRule(true)
    //     calculate20Percent()
    //      TimeSpanForGoal()
    //    }
  };

  return {
    calculate20Percent,
    CheckPrompt,
    dataSource,
    columns,
  };
};

export default AutomatedSavingFunctionality;
