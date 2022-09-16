import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
//import ExpenseDetails from './ExpenseDetails';
function ExpenseItem(props){
    
    return (
    <div className='expense-item'>
       <ExpenseDate date={props.date}/>
       {/* <ExpenseDetails amount={props.amount} /> */}
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__location'>
                    <h3>At {props.location}</h3>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </div>
    </div>
    );
}

export default ExpenseItem;