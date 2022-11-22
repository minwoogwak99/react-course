import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css'

const Expenses = (props) => {
  const expenses = props.expenses;
  return (
    <Card className="expenses">
      <ExpenseItem
        title={expenses[0].title}
        date={expenses[0].date}
        price={expenses[0].amount}
      />
      <ExpenseItem
        title={expenses[1].title}
        date={expenses[1].date}
        price={expenses[1].amount}
      />
      <ExpenseItem
        title={expenses[2].title}
        date={expenses[2].date}
        price={expenses[2].amount}
      />
      <ExpenseItem
        title={expenses[3].title}
        date={expenses[3].date}
        price={expenses[3].amount}
      />
    </Card>
  );
}

export default Expenses;
