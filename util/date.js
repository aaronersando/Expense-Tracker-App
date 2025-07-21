export function getFormattedDate(date) {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toISOString().slice(0, 10);
}

export function isWithinLast7Days(date) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const sevenDaysAgo = new Date(today);
  sevenDaysAgo.setDate(today.getDate() - 6);

  const expenseDate = new Date(date);
  expenseDate.setHours(0, 0, 0, 0);

  return expenseDate >= sevenDaysAgo && expenseDate <= today;
}
