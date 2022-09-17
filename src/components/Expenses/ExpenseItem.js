import React, { useState } from "react";
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
//import ExpenseDetails from './ExpenseDetails';

const ExpenseItem = (props) => {
    useState( props.amount );
    let deleteE = props.amount;
    const clickHandler = () => {
        deleteE = 'Deleted';
        console.log(deleteE);
    };

    return (
    <Card className='expense-item'>
       <ExpenseDate date={props.date}/>
       {/* <ExpenseDetails amount={props.amount} /> */}
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__location'>
                    <h3>At {props.location}</h3>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </div>
        <button onClick={clickHandler}>Delete Expense</button>
    </Card>
    );
}

export default ExpenseItem;