import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [isFormOpen, setIsFormOpen] = useState(false); // Stato per tracciare l'apertura del form
  const [enteredTitle, setEnteredTitle] = useState(""); // Stato per tracciare il titolo
  const [enteredAmount, setEnteredAmount] = useState(""); // Stato per tracciare l'importo
  const [enteredDate, setEnteredDate] = useState(""); // Stato per tracciare la data

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);     // setEnteredTitle è una funzione che prende il titolo inserito dall'utente e lo setta come valore di enteredTitle
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);     // setEnteredAmount è una funzione che prende l'importo inserito dall'utente e lo setta come valore di enteredAmount
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);       // setEnteredDate è una funzione che prende la data inserita dall'utente e lo setta come valore di enteredDate
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const openFormHandler = () => {
    setIsFormOpen(true);
  };

  const closeFormHandler = () => {
    setIsFormOpen(false);
  };

  if (!isFormOpen) {
    return (
      <button onClick={openFormHandler}>Add New Expense</button>
    );
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2030-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={closeFormHandler}>
            Close
          </button>
          <button type="submit">Add</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;


// onChange={} serve per prendere il valore dell'input
// titleChangeHandler è una funzione che serve per salvare il valore dell'input, per far si che il valore dell'input venga salvato bisogna usare useState
// traget.value.event serve per prendere il valore dell'input
// onClick={submitHandler} serve per far si che quando si preme il bottone venga eseguita la funzione submitHandler che serve per salvare i dati inseriti dall'utente
// abbiamo inserito value={} per far si che quando si preme il bottone i dati inseriti dall'utente vengano cancellati
// propos serve per passare i dati inseriti dall'utente ad un componente 
