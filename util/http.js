import axios from "axios";

const BASE_URL =
  "YOUR_FIREBASE_URL_HERE";

export async function storeExpense(expenseData) {
  const respone = await axios.post(BASE_URL + "/expenses.json", expenseData);
  const id = respone.data.name;
  return id;
}

export async function fetchExpense() {
  const response = await axios.get(BASE_URL + "/expenses.json");
  console.log(response.data);
  const expenses = [];
  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: response.data[key].date,
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }

  return expenses;
}
