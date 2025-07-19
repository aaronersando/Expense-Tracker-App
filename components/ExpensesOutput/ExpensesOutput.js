import { View, Text, FlatList } from "react-native";
import React from "react";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "Groceries",
    amount: 54.23,
    date: new Date("2022-02-10"),
  },
  {
    id: "e2",
    description: "Electricity Bill",
    amount: 89.99,
    date: new Date("2022-02-12"),
  },
  {
    id: "e3",
    description: "Internet Subscription",
    amount: 45.0,
    date: new Date("2022-02-13"),
  },
  {
    id: "e4",
    description: "Coffee",
    amount: 4.5,
    date: new Date("2022-02-14"),
  },
  {
    id: "e5",
    description: "Another book",
    amount: 18.59,
    date: new Date("2022-02-18"),
  },
  {
    id: "e6",
    description: "Movie Ticket",
    amount: 12.0,
    date: new Date("2022-02-19"),
  },
  {
    id: "e7",
    description: "Bus Pass",
    amount: 30.0,
    date: new Date("2022-02-20"),
  },
  {
    id: "e8",
    description: "Gym Membership",
    amount: 60.0,
    date: new Date("2022-02-21"),
  },
  {
    id: "e9",
    description: "Dinner Out",
    amount: 35.75,
    date: new Date("2022-02-22"),
  },
  {
    id: "e10",
    description: "Phone Recharge",
    amount: 20.0,
    date: new Date("2022-02-23"),
  },
];

export default function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}
