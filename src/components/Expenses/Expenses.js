import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';  
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('All');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };


  // ho creato una constante che filtra gli expenses in base all'anno selezionato e lo mette in un array.
  // .getFullYear() è un metodo di JS che prende la data e ritorna l'anno
  // .toString() è un metodo di JS che prende un numero e lo trasforma in stringa perchè il valore di default di selectedYear è una stringa
  const filteredExpenses = props.items.filter(expense => {
    if (filteredYear === 'All') {
      return props.items 
    } else {
      return expense.date.getFullYear().toString() === filteredYear;
    }
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses}/>
        {filteredExpenses.length === 0 && <p className='noExpense'>No expenses found.</p>}
        {filteredExpenses.map(expense => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;




// abbiamo aggiunto una key a ExpenseItem, che è l'id, che è unico per ogni elemento, cosi da permettere a React di identificare ogni elemento e metterli in ordine correttamente




