import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { storeBudget, readBudget, calculateTotal } from "../utils/wrangler";

import IncomeListComponent from "./IncomeListComponent";
import ExpenseListComponent from "./ExpenseListComponent";

function BottomComponent({
  totalIncome,
  setTotalIncome,
  setTotalExpense,
  setTotalAvailble,
}) {
  const initialValue = { description: "", amount: "" };

  const [inputValue, setInputValue] = useState(initialValue);
  const [selectIncExp, setSelectIncExp] = useState("inc");
  const storedBudget = readBudget();
  const [incomes, setIncomes] = useState(storedBudget.incomes);
  const [expenses, setExpenses] = useState(storedBudget.expenses);

  // const inc = calculateTotal(incomes);
  // const exp = calculateTotal(expenses);

  useEffect(() => {
    setTotalIncome(calculateTotal(incomes));
    setTotalExpense(calculateTotal(expenses));
    setTotalAvailble(calculateTotal(incomes) - calculateTotal(expenses));
  }, [incomes, expenses]);

  useEffect(() => {
    storeBudget({ incomes, expenses });
  });

  const deleteExpense = (id) => () => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const deleteIncome = (id) => () => {
    setIncomes(incomes.filter((income) => income.id !== id));
  };

  const onChange = (event) => {
    setInputValue({ ...inputValue, [event.target.name]: event.target.value });
  };

  const onEnterKey = (event) => {
    if (event.key === "Enter") {
      addIncExp();
    }
  };

  const onSelectChange = (event) => {
    setSelectIncExp(event.target.value);
  };

  const addIncExp = () => {
    if (selectIncExp === "inc") {
      setIncomes([
        ...incomes,
        {
          description: inputValue.description,
          amount: inputValue.amount,
          id: uuidv4(),
        },
      ]);
    } else {
      setExpenses([
        ...expenses,
        {
          description: inputValue.description,
          amount: inputValue.amount,
          id: uuidv4(),
        },
      ]);
    }
  };

  return (
    <div className="bottom">
      <div className="add">
        <div className="add__container">
          <select
            className="add__type"
            value={selectIncExp}
            onChange={onSelectChange}
          >
            <option value="inc">+</option>
            <option value="exp">-</option>
          </select>
          <input
            type="text"
            className="add__description"
            placeholder="Add description"
            name="description"
            value={inputValue.description}
            onChange={onChange}
            onKeyPress={onEnterKey}
          />
          <input
            type="number"
            className="add__value"
            placeholder="Value"
            name="amount"
            value={inputValue.amount}
            onChange={onChange}
            onKeyPress={onEnterKey}
          />
          <button className="add__btn" onClick={addIncExp}>
            <i className="ion-ios-checkmark-outline"></i>
          </button>
        </div>
      </div>

      <div className="container clearfix">
        <IncomeListComponent incomes={incomes} deleteIncome={deleteIncome} />
        <ExpenseListComponent
          totalIncome={totalIncome}
          expenses={expenses}
          deleteExpense={deleteExpense}
        />
      </div>
    </div>
  );
}

export default BottomComponent;
