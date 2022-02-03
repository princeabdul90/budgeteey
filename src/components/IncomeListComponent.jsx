import { formatValue } from "../utils/wrangler";

function IncomeListComponent({ incomes, deleteIncome }) {
  const renderIncomes = incomes.map((income) => {
    const { id, description, amount } = income;
    return (
      <div className="item clearfix" id="income-0" key={id}>
        <div className="item__description">{description}</div>
        <div className="right clearfix">
          <div className="item__value">+ {formatValue(amount)}</div>
          <div className="item__delete">
            <button className="item__delete--btn" onClick={deleteIncome(id)}>
              <i className="ion-ios-close-outline"></i>
            </button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="income">
      <h2 className="icome__title">Income</h2>
      <div className="income__list">{renderIncomes}</div>
    </div>
  );
}

export default IncomeListComponent;
