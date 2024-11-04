import { ExpensePlanner } from "../../components/dashboardPageComponents/expensesAndIncomeScreenComponents/ExpensePlanner/ExpensePlanner";
import { ExpensesGraphic } from "../../components/dashboardPageComponents/expensesAndIncomeScreenComponents/ExpensesGraphic/ExpensesGraphic";
import { PieChartGraphic } from "../../components/dashboardPageComponents/expensesAndIncomeScreenComponents/PieChart/PieChartGraphic";
import { History } from "../../components/dashboardPageComponents/expensesAndIncomeScreenComponents/History/History";
import { PieChart2 } from "../../components/dashboardPageComponents/expensesAndIncomeScreenComponents/PieChart2/PieChart2";
import "./ExpensesAndIncome.css";
import Nav from "../../components/Nav/Nav";

export const ExpensesAndIncomePage = () => {
  return (
    <main className="page">
      <h1>Expenses & Income</h1>

      {/* <div className="nav-div">
          <Nav />
        </div>*/}

      <div className="container">
        <div className="main-div">
          <div className="expense-graphic">
            <ExpensesGraphic />
          </div>

          <div className="piechart-graphic">
            <PieChart2 />
          </div>
        </div>
       {/*  <div className="right-div">
          <History />
        </div>
        <div className="left-div">
          <ExpensePlanner />
        </div> */}
      </div>
      <div id="background"></div>
    </main>
  );
};
