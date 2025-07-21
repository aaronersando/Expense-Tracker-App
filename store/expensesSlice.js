import { createSlice } from "@reduxjs/toolkit";
import { getFormattedDate } from "../util/date";

const initialState = [
  {
    id: "e1",
    description: "Groceries",
    amount: 54.23,
    date: "2025-07-20",
  },
  {
    id: "e2",
    description: "Electricity Bill",
    amount: 89.99,
    date: "2022-02-12",
  },
  {
    id: "e3",
    description: "Internet Subscription",
    amount: 45.0,
    date: "2022-02-13",
  },
  {
    id: "e4",
    description: "Coffee",
    amount: 4.5,
    date: "2022-02-14",
  },
  {
    id: "e5",
    description: "Another book",
    amount: 18.59,
    date: "2022-02-18",
  },
  {
    id: "e6",
    description: "Movie Ticket",
    amount: 12.0,
    date: "2022-02-19",
  },
  {
    id: "e7",
    description: "Bus Pass",
    amount: 30.0,
    date: "2022-02-20",
  },
  {
    id: "e8",
    description: "Gym Membership",
    amount: 60.0,
    date: "2022-02-21",
  },
  {
    id: "e9",
    description: "Dinner Out",
    amount: 35.75,
    date: "2022-02-22",
  },
  {
    id: "e10",
    description: "Phone Recharge",
    amount: 20.0,
    date: "2022-02-23",
  },
];

function generateId(date) {
  const dateStr = getFormattedDate(date);
  return `${dateStr}_${Math.random().toString(36).slice(2, 10)}`;
}

export const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense: (state, action) => {
      const expense = {
        ...action.payload,
        id: generateId(action.payload.date),
        date:
          action.payload.date instanceof Date
            ? action.payload.date.toISOString().slice(0, 10)
            : action.payload.date, // ensure string
      };
      state.push(expense);
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
  },
});

export const { addExpense, deleteExpense, updateExpense } =
  expensesSlice.actions;

export default expensesSlice.reducer;
