import { useSelector } from "react-redux";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { isWithinLast7Days } from "../util/date";

export default function RecentExpenses() {
  const expenses = useSelector((state) => state.expenses);

  const expensesForLastWeek = expenses.filter((expense) =>
    isWithinLast7Days(expense.date)
  );

  return (
    <ExpensesOutput
      expensesPeriod={"Last 7 days"}
      expenses={expensesForLastWeek}
      fallbacktext={"No expenses for the last week."}
    />
  );
}
