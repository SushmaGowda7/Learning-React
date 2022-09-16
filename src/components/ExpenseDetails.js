function ExpenseDetails(props) {
    const title = props.amount.title;
    const amount = props.amount.amount;

    return (
        <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>${amount}</div>
        </div>
    );
}

export default ExpenseDetails;