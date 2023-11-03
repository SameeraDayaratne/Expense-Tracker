
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "./Card";
function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem item={props.expenseItems[0]} />
      <ExpenseItem item={props.expenseItems[1]} />
      <ExpenseItem item={props.expenseItems[2]} />
      <ExpenseItem item={props.expenseItems[3]} />
    </Card>
  );
}

export default Expenses;
