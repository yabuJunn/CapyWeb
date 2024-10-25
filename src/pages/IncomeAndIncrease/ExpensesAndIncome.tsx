import { ExpensePlanner } from "../../components/dashboardPageComponents/expensesAndIncomeScreenComponents/ExpensePlanner/ExpensePlanner";
import { ExpensesGraphic } from "../../components/dashboardPageComponents/expensesAndIncomeScreenComponents/ExpensesGraphic/ExpensesGraphic";
import { PieChartGraphic } from "../../components/dashboardPageComponents/expensesAndIncomeScreenComponents/PieChart/PieChartGraphic";
import { History } from "../../components/dashboardPageComponents/expensesAndIncomeScreenComponents/History/History";

export const ExpensesAndIncome = () => {
  return (
    <div className="page">
      <h1>Income and Increase</h1>
      <ExpensesGraphic />
      <PieChartGraphic />
      <ExpensePlanner />
      <History />

      <div className="container">
        <div className="main-div">Hola</div>
        <div className="right-div">Hola</div>
        <div className="left-div">Hola</div>
      </div>
    </div>
  );
};
