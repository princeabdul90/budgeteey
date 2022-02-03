import { useEffect, useState } from "react";
import { getMonth, formatValue, calPercentage } from "../utils/wrangler";

function TopComponent({ totalIncome, totalExpense, totalAvailable }) {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    if (totalIncome > totalExpense) {
      setPercentage(calPercentage(totalExpense, totalIncome));
    }else{
      setPercentage(0)
    }
  }, [totalIncome, totalExpense]);

  return (
    <div className="top">
      <div className="budget">
        <div className="budget__title">
          Available Budget in{" "}
          <span className="budget__title--month">{getMonth()}</span>:
        </div>

        <div className="budget__value">+ {formatValue(totalAvailable)}</div>

        <div className="budget__income clearfix">
          <div className="budget__income--text">Income</div>
          <div className="right">
            <div className="budget__income--value">
              + {formatValue(totalIncome)}
            </div>
            <div className="budget__income--percentage">&nbsp;</div>
          </div>
        </div>

        <div className="budget__expenses clearfix">
          <div className="budget__expenses--text">Expenses</div>
          <div className="right clearfix">
            <div className="budget__expenses--value">
              - {formatValue(totalExpense)}
            </div>
            <div className="budget__expenses--percentage">{percentage}%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopComponent;
