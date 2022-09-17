import React, { useState } from "react";
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
//import ExpenseDetails from './ExpenseDetails';

const ExpenseItem = (props) => {
    const [amount, setAmount] = useState( props.amount );
    const changeHandler = () => {
        setAmount('100');
        console.log(amount);
    }
   const [title, setTitle] = useState( props.title );
    const clickHandler = () => {
        setTitle('updated');
        console.log(title);
    };

    return (
    <Card className='expense-item'>
       <ExpenseDate date={props.date}/>
       {/* <ExpenseDetails amount={props.amount} /> */}
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__location'>
                    <h3>At {props.location}</h3>
                <div className='expense-item__price'>${amount}</div>
            </div>
        </div>
        <button onClick={changeHandler}>Change Expense</button>
        <button onClick={clickHandler}>Edit Title</button>
    </Card>
    );
}

export default ExpenseItem;