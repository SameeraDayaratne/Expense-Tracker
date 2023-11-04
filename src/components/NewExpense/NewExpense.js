import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const handleSaveExpense = (expense) => {

    props.onsavedExpense(expense);

    }

    return (
        <div className='new-expense'>
            <ExpenseForm  onSaveExpense={handleSaveExpense}></ExpenseForm>
        </div>
    );
}

export default NewExpense;