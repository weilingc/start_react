import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import "./Expenses.css";


const Expenses = (props) => {

  const data = props.data
  const expenseItems = data.map((item, index) => (
    <ExpenseItem title={item.title} date={item.date} amount={item.amount} />
  ))

  return (
    <Card className="expenses">
      {expenseItems}
    </Card>
  )
}

export default Expenses;
