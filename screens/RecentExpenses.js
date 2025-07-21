import { useSelector } from "react-redux";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { isWithinLast7Days } from "../util/date";
import { useEffect, useState } from "react";
import { fetchExpense } from "../util/http";
import { setExpenses } from "../store/expensesSlice";
import { useDispatch } from "react-redux";

export default function RecentExpenses() {
  const expenses = useSelector((state) => state.expenses);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getExpenses() {
      const expenses = await fetchExpense();
      dispatch(setExpenses(expenses));
    }

    getExpenses();
  }, []);

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
