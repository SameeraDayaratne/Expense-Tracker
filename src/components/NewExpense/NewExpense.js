import { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const handleSaveExpense = (expense) => {
    props.onsavedExpense(expense);
  };

  const [isShowExpenseForm, setIsShowExpenseForm] = useState(false);

  const handleButtonClick = () => {
    setIsShowExpenseForm(true);
  };

  const handleCancelExpense = () =>{
    setIsShowExpenseForm(false);
  }
  let expenseFormContent = "";

  let addNewExpenseButtonContent = (
    <div className="new-expense">
      <button onClick={handleButtonClick}>Add New Expense</button>
    </div>
  );

  if (isShowExpenseForm) {
    expenseFormContent = (
      <div className="new-expense">
        <ExpenseForm onCancelExpense={handleCancelExpense} onSaveExpense={handleSaveExpense}></ExpenseForm>
      </div>
    );

    addNewExpenseButtonContent = "";
  }

  return (
    <div>
      {expenseFormContent}
      {addNewExpenseButtonContent}
    </div>
  );
};

export default NewExpense;
