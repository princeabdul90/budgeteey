import "./App.css";
import { useState } from "react";

import TopComponent from "./components/TopComponent";
import BottomComponent from "./components/BottomComponent";

function App() {
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalAvailable, setTotalAvailble] = useState(0);

  return (
    <div>
      <TopComponent
        totalIncome={totalIncome}
        totalExpense={totalExpense}
        totalAvailable={totalAvailable}
      />
      <BottomComponent
        totalIncome={totalIncome}
        setTotalIncome={setTotalIncome}
        setTotalExpense={setTotalExpense}
        setTotalAvailble={setTotalAvailble}
      />
    </div>
  );
}

export default App;
