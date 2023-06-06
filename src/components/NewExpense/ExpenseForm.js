import React, {useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enterdDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault(); // serve per evitare che la pagina si ricarichi quando si preme il bottone

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enterdDate)
        };

        props.onSaveExpenseData(expenseData); // serve per passare i dati inseriti dall'utente al componente padre
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    };
    
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input 
                    type="text" 
                    value={enteredTitle}
                    onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input 
                    type="number" 
                    min="0.01" step="0.01" 
                    value={enteredAmount}
                    onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input 
                    type="date" 
                    min="2019-01-01" max="2022-12-31" 
                    value={enterdDate}
                    onChange={dateChangeHandler}/>
                </div>
                <div className="new-expense__actions">
                    <button type="submit" onClick={submitHandler}>Add Expense</button>
                </div>
            </div>
        </form>
    );
};

export default ExpenseForm;


// onChange={} serve per prendere il valore dell'input
// titleChangeHandler è una funzione che serve per salvare il valore dell'input, per far si che il valore dell'input venga salvato bisogna usare useState
// traget.value serve per prendere il valore dell'input
// onClick={submitHandler} serve per far si che quando si preme il bottone venga eseguita la funzione submitHandler che serve per salvare i dati inseriti dall'utente
// abbiamo inserito value={} per far si che quando si preme il bottone i dati inseriti dall'utente vengano cancellati
// propos serve per passare i dati inseriti dall'utente ad un componente 

