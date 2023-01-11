import React, { useState, useEffect, useCallback } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const fetchMoviesHandler = useCallback(async () => {
    const response = await fetch(
      "https://react-expenses-7543b-default-rtdb.firebaseio.com/expenses.json"
    );

    const data = await response.json();

    const loadedExpenses = [];

    for (const key in data) {
      loadedExpenses.push({
        id: key,
        title: data[key].title,
        amount: data[key].amount,
        date: new Date(data[key].date),
      });
    }

    setExpenses(loadedExpenses);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  return (
    <div>
      <NewExpense onForm={fetchMoviesHandler} />
      <Expenses items={expenses}></Expenses>
    </div>
  );
};

export default App;
