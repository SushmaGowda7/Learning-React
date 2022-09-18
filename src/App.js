import React from "react";
import Expenses from './components/Expenses/Expenses';
import NewExpense from "./components/NewExpense/NewExpense";
import './App.css';

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Bike Service',
      amount: 2000,
      location: 'Kolar',
      date: new Date(2022, 7, 17)
    },
    {
      id: 'e2',
      title: 'New Car',
      amount: 500000,
      location: 'Bangalore',
      date: new Date(2021, 8, 27)
    },
    {
      id: 'e3',
      title: 'Books',
      amount: 500,
      location: 'Kolar',
      date: new Date(2022, 1, 18)
    },
    {
      id: 'e4',
      title: 'Movie',
      amount: 300,
      location: 'Malur',
      date: new Date(2022, 1, 1)
    },
    {
      id: 'e5',
      title: 'Outing',
      amount: 3000,
      location: 'Ooty',
      date: new Date(2022, 0, 1)
    }
  ]

  const addExpenseHandler = (expense) => {
    console.log(expense);
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
