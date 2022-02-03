const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const getMonth = () => {
  const date = new Date();
  return month[date.getMonth()];
};

export const formatValue = (value) => {
  return Number(value)
    .toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const calPercentage = (partNum, wholeNum) => {
  if (wholeNum > 0) {
    return Math.ceil((partNum / wholeNum) * 100);
  } else return 0;
};

export const calculateTotal = (values) => {
  const val = values.reduce((total, value) => {
    return parseFloat(value.amount) + total;
  }, 0);

  return val;
};

const BUDGET_STORAGE_KEY = "BUDGET_STORAGE_KEY";

export const storeBudget = (budgetMap) => {
  localStorage.setItem(BUDGET_STORAGE_KEY, JSON.stringify(budgetMap));
};

export const readBudget = () => {
  const budgetMap = JSON.parse(localStorage.getItem(BUDGET_STORAGE_KEY));
  return budgetMap ? budgetMap : { incomes: [], expenses: [] };
};
