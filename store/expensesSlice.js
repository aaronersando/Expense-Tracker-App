import { createSlice } from "@reduxjs/toolkit";
import { getFormattedDate } from "../util/date";

function generateId(date) {
  const dateStr = getFormattedDate(date);
  return `${dateStr}_${Math.random().toString(36).slice(2, 10)}`;
}

export const expensesSlice = createSlice({
  name: "expenses",
  initialState: [],
  reducers: {
    addExpense: (state, action) => {
      const expense = {
        ...action.payload,
      };
      state.unshift(expense);
    },
    deleteExpense: (state, action) => {
      return state.filter((expense) => expense.id !== action.payload);
    },
    updateExpense: (state, action) => {
      const { id, data } = action.payload;
      const existingExpense = state.find((expense) => expense.id === id);
      if (existingExpense) {
        Object.assign(existingExpense, {
          ...data,
          date:
            data.date instanceof Date
              ? data.date.toISOString().slice(0, 10)
              : data.date,
        });
      }
    },
    setExpenses: (state, action) => {
      return action.payload.reverse();
    },
  },
});

export const { addExpense, deleteExpense, updateExpense, setExpenses } =
  expensesSlice.actions;

export default expensesSlice.reducer;
