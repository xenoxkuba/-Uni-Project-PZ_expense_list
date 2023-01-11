import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
  const [enteredFilter, setEnteredFilter] = useState("2020");

  const onPickedFilterHandler = (selectYear) => {
    setEnteredFilter(selectYear);
  };
  console.log(enteredFilter);

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === enteredFilter;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={enteredFilter}
          onPickedFilter={onPickedFilterHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </li>
  );
};

export default Expenses;
