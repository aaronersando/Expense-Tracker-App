import { View, Text, StyleSheet } from "react-native";
import React, { useLayoutEffect } from "react";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/UI/Button";
import { useSelector, useDispatch } from "react-redux";
import {
  addExpense,
  deleteExpense,
  updateExpense,
} from "../store/expensesSlice";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import { deleteExpenseDb, storeExpense, updateExpenseDb } from "../util/http";

export default function ManageExpenses({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  const expenses = useSelector((state) => state.expenses);
  const dispatch = useDispatch();

  const selectedExpense = expenses.find(
    (expense) => expense.id === editedExpenseId
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function handleCancel() {
    navigation.goBack();
  }

  async function handleConfirm(expenseData) {
    if (isEditing) {
      await updateExpenseDb(editedExpenseId, expenseData);
      dispatch(updateExpense(editedExpenseId, expenseData));
    } else {
      const id = await storeExpense(expenseData);
      dispatch(addExpense({ ...expenseData, id: id }));
    }
    navigation.goBack();
  }

  async function handleDeleteExpense() {
    await deleteExpenseDb(editedExpenseId);
    dispatch(deleteExpense(editedExpenseId));
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        onCancel={handleCancel}
        submitButtonLabel={isEditing ? "Update" : "Add"}
        onSubmit={handleConfirm}
        defaultValues={selectedExpense}
      />

      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon={"trash"}
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={handleDeleteExpense}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
