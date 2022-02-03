import { formatValue, calPercentage } from "../utils/wrangler";

function ExpenseListComponent({ expenses, deleteExpense, totalIncome }) {
  const percentage = (value) => {
    return calPercentage(value, totalIncome);
  };

  const renderExpense = expenses.map((expense) => {
    const { id, description, amount } = expense;
    return (
      <div className="item clearfix" id="expense-0" key={id}>
        <div className="item__description">{description}</div>
        <div className="right clearfix">
          <div className="item__value">- {formatValue(amount)}</div>
          <div className="item__percentage">{percentage(amount)}%</div>
          <div className="item__delete">
            <button className="item__delete--btn" onClick={deleteExpense(id)}>
              <i className="ion-ios-close-outline"></i>
            </button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="expenses">
      <h2 className="expenses__title">Expenses</h2>

      <div className="expenses__list">{renderExpense}</div>
    </div>
  );
}

export default ExpenseListComponent;
