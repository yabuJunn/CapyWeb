/*import { ExpensePlanner } from "../../components/dashboardPageComponents/expensesAndIncomeScreenComponents/ExpensePlanner/ExpensePlanner";*/
import { ExpensesGraphic } from "../../components/dashboardPageComponents/expensesAndIncomeScreenComponents/ExpensesGraphic/ExpensesGraphic";
import { IncomesGraphic } from "../../components/dashboardPageComponents/expensesAndIncomeScreenComponents/IncomesGraphic/IncomesGraphic";
import { ExpensePlanner } from "../../components/dashboardPageComponents/expensesAndIncomeScreenComponents/ExpensePlanner/ExpensePlanner";
import { History } from "../../components/dashboardPageComponents/expensesAndIncomeScreenComponents/History/History";
import { PieChart2 } from "../../components/dashboardPageComponents/expensesAndIncomeScreenComponents/PieChart2/PieChart2";
import { IncomePieChart } from "../../components/dashboardPageComponents/expensesAndIncomeScreenComponents/IncomePieChart/IncomePieChart";
import { IncomeHistory } from "../../components/dashboardPageComponents/expensesAndIncomeScreenComponents/IncomeHistory/IncomeHistory";
import "./ExpensesAndIncome.css";
import { useState } from "react";

export const ExpensesAndIncomePage = () => {
  const [selectedOption, setSelectedOption] = useState("Gastos");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <main className="page">
      <h1>Expenses & Income</h1>

      {/* <div className="nav-div">
          <Nav />
        </div>*/}

      <div className="container">
        <div className="main-div">
          <select
            className="select-expenses-graphic"
            name=""
            id=""
            onChange={handleSelectChange}
          >
            <option value="Gastos">Expenses</option>
            <option value="Ingresos">Income</option>
          </select>
          <div className="expense-graphic-top">
            <div
              className={`expense-graphic ${
                selectedOption === "Gastos"
                  ? "expense-graphic-color1"
                  : "expense-graphic-color-2"
              }`}
            >
              {selectedOption === "Gastos" ? (
                <ExpensesGraphic />
              ) : (
                <IncomesGraphic />
              )}
            </div>
            <div className="piechart-graphic">
              {selectedOption === "Gastos" ? <PieChart2 /> : <IncomePieChart />}
            </div>
          </div>
        </div>

        <div className="chart-expense-bottom">
          <div className="left-div">
            <ExpensePlanner />
          </div>
          <div className="right-div">
            {selectedOption === "Gastos" ? <History /> : <IncomeHistory />}
          </div>
        </div>
      </div>
      <div id="background"></div>
    </main>
  );
};
