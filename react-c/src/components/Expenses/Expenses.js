import React, { useState } from "react";

import Card from "../UI/Card";
import "./Expenses.css";
import Chart from "../Chart/Chart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpense = props.expenses.filter((expense) => {
    if(filteredYear === 'All') {
      return props.expenses
    }
    return expense.date.getFullYear().toString() === filteredYear;
  });

  

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onYearSelected={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpense}/>
        <ExpensesList items={filteredExpense}/>
      </Card>
    </div>
  );
};

export default Expenses;
