import { View, Text } from "react-native";
import React from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useSelector } from "react-redux";

export default function AllExpenses() {
  const expenses = useSelector((state) => state.expenses);
  return <ExpensesOutput expensesPeriod={"Total"} expenses={expenses} />;
}
