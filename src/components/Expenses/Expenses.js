
import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
function Expenses(props) {

  const [year, setYear] = useState("2021");

 

// const [expensesByYear , setExpensesByYear] = useState(initialExpenses);





  const yearSelectHandler = (selectedYear) => {
    setYear(selectedYear);
    // console.log("selected year is " + selectedYear);
    // const filterdExpenses = props.expenses.filter(expense => {
    //     return expense.date.getFullYear() == selectedYear;
    // });

    // setExpensesByYear(filterdExpenses);

    
    

    // console.log(filterdExpenses);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectYear={year}
        onYearselect={yearSelectHandler}
      ></ExpensesFilter>

      {props.expenseItems.map(expense => <ExpenseItem item={expense} />)}
      {/* <ExpenseItem item={props.expenseItems[0]} />
      <ExpenseItem item={props.expenseItems[1]} />
      <ExpenseItem item={props.expenseItems[2]} />
      <ExpenseItem item={props.expenseItems[3]} /> */}
    </Card>
  );
}

export default Expenses;
