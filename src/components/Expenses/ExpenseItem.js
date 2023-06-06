import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';


function ExpenseItem(props) {
    
    const [title, setTitle,] = useState(props.title);
    
    const clickHandler = () => {
        setTitle('Updated!');
    };
    
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">€ {props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title and Price</button>
        </Card>
    )
}

export default ExpenseItem;

// toISOString() si utilizza per convertire la data in una stringa
// abbiamo insterito delle costanti per rendere il componente riutilizzabile
// quando creiamo delle constanti o variabili dobbiamo ricordarci di utilizzare le parentesi graffe per inserire il valore all'interno del JSX
// lo useState ci permette di aggiornare il valore di una variabile, in questo caso abbiamo utilizzato il clickHandler per aggiornare il valore della variabile title



