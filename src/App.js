import ExpenseItem from './components/ExpenseItem';
import './App.css';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Bike Service',
      amount: 2000,
      location: 'Kolar',
      date: new Date(2022, 7, 17)
    },
    {
      id: 'e2',
      title: 'Car Insurance',
      amount: 5000,
      location: 'Bangalore',
      date: new Date(2021, 8, 27)
    },
    {
      id: 'e3',
      title: 'Books',
      amount: 500,
      location: 'Kolar',
      date: new Date(2022, 1, 18)
    },
    {
      id: 'e4',
      title: 'Movie',
      amount: 300,
      location: 'Malur',
      date: new Date(2022, 1, 1)
    },
    {
      id: 'e5',
      title: 'Outing',
      amount: 3000,
      location: 'Ooty',
      date: new Date(2022, 0, 1)
    }
  ]
  return (
    <div>
      <h1>Lets get started!</h1>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        location={expenses[0].location}
        date={expenses[0].date}></ExpenseItem>
      <ExpenseItem
       title={expenses[1].title}
       amount={expenses[1].amount}
       location={expenses[1].location}
       date={expenses[1].date}></ExpenseItem>
      <ExpenseItem
       title={expenses[2].title}
       amount={expenses[2].amount}
       location={expenses[2].location}
       date={expenses[2].date}></ExpenseItem>
      <ExpenseItem
       title={expenses[3].title}
       amount={expenses[3].amount}
       location={expenses[3].location}
       date={expenses[3].date}></ExpenseItem>
      <ExpenseItem
       title={expenses[4].title}
       amount={expenses[4].amount}
       location={expenses[4].location}
       date={expenses[4].date}></ExpenseItem>
    </div>
  );
}

export default App;
