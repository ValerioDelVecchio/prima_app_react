import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData, // spread operator per entrare dentro l'oggetto expenseData e prendere i valori
            id: Math.random().toString() // genero un id random per ogni nuovo elemento e aggiungo il toString per convertirlo in stringa
        };
        props.onAddExpense(expenseData); // serve per passare i dati inseriti dall'utente al componente padre
    };

        
    
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/> 
        </div>
    );
};

export default NewExpense;