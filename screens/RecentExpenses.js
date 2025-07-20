import { useSelector } from "react-redux";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

export default function RecentExpenses() {
  const expenses = useSelector((state) => state.expenses);

  const today = new Date();
  const date7DaysAgo = new Date();
  date7DaysAgo.setDate(today.getDate() - 7);

  const expensesForLastWeek = expenses.filter(
    (expense) => expense.date >= date7DaysAgo && expense.date <= today
  );

  return (
    <ExpensesOutput
      expensesPeriod={"Last 7 days"}
      expenses={expensesForLastWeek}
    />
  );
}
