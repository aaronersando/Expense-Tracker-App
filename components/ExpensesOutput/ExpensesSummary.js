import { View, Text } from "react-native";
import React from "react";

export default function ExpensesSummary({ expenses, periodName }) {
  const expenseSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);
  return (
    <View>
      <Text>{periodName}</Text>
      <Text>₱{expenseSum.toFixed(2)}</Text>
    </View>
  );
}
