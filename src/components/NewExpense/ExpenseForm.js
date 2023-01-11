import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [textInInput, setTextInInput] = useState("Please pass a title");
  const [textInAmountInput, setTextInAmountInput] = useState(
    "Please pass an amount"
  );
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const placeHolderHandler = () => {
    setTextInInput("");
    if (textInInput === "") {
      setTextInInput("Pass a title here...");
    }
  };
  const placeHolderAmountHandler = () => {
    setTextInAmountInput("");
    if (textInAmountInput === "") {
      setTextInAmountInput("Pass an amount here...");
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (isNaN(+enteredAmount)) {
      return alert("Amount has to be a number!");
    }
    if (!enteredTitle) {
      return alert("Don't leave title input empty!");
    }
    if (!enteredAmount) {
      return alert("Dont leave amount input empty!");
    }
    if (!enteredDate) {
      return alert("Dont leave date input empty!");
    }

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            placeholder={textInInput}
            onChange={titleChangeHandler}
            onClick={placeHolderHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="text"
            value={enteredAmount}
            placeholder={textInAmountInput}
            onClick={placeHolderAmountHandler}
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
