
import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
function Expenses(props) {

  const [year, setYear] = useState("2021");

 const filteredExpenses = props.expenseItems.filter(expense => {
  return expense.date.getFullYear().toString() === year;
 })

// const [expensesByYear , setExpensesByYear] = useState(initialExpenses);





  const yearSelectHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  let expensesContent = <h2 className="expenses-list__fallback">No expenses Found</h2>;

  if(filteredExpenses.length > 0)
  {
     expensesContent = filteredExpenses.map(expense => <ExpenseItem key={expense.id} item={expense} />);

  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectYear={year}
        onYearselect={yearSelectHandler}
      ></ExpensesFilter>

      {/* {filteredExpenses.length === 0 ? <p>No expenses Found</p>  : filteredExpenses.map(expense => <ExpenseItem key={expense.id} item={expense} />)} */}
     {expensesContent}
      

    </Card>
  );
}

export default Expenses;
