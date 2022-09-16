import './ExpenseItem.css';

function ExpenseItem(){
    const expenseDate = new Date(2022, 8, 16);
    const expenseTitle = 'Bike Service';
    const expenseAmount = 5000;
    const LocationOfExpenditure = 'Kolar';

    return (
    <div className='expense-item'>
        <div>{expenseDate.toDateString()}</div>
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__location'>At {LocationOfExpenditure}</div>
                <div className='expense-item__price'>${expenseAmount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;