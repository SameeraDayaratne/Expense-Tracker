import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


const dummyExpenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurances',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {

  const [expenses , setExpenses] =  useState(dummyExpenses);

  const handleSavedExpense = (expense) => {

    var newId = Math.random().toString();

    const newExpense = {
      ...expense,
      id: newId
    }

    setExpenses(prev => {
      return [newExpense , ...prev];
    });

    }

  return (
    <div>
      <NewExpense onsavedExpense={handleSavedExpense}></NewExpense>

      <Expenses expenseItems = {expenses} />
      
    </div>
  );
}

export default App;
