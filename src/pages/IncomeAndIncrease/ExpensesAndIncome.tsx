import { ExpensePlanner } from "../../components/dashboardPageComponents/expensesAndIncomeScreenComponents/ExpensePlanner/ExpensePlanner";
import { ExpensesGraphic } from "../../components/dashboardPageComponents/expensesAndIncomeScreenComponents/ExpensesGraphic/ExpensesGraphic";
import { PieChartGraphic } from "../../components/dashboardPageComponents/expensesAndIncomeScreenComponents/PieChart/PieChartGraphic";
import { History } from "../../components/dashboardPageComponents/expensesAndIncomeScreenComponents/History/History";
import "./ExpensesAndIncome.css"

export const ExpensesAndIncome = () => {
  return (
    <div className="page">
      
      
      

      <div className="container">
        <div className="main-div">
          <div className="expense-graphic">
          <ExpensesGraphic />
          </div>

          <div className="piechart-graphic">
          <PieChartGraphic />
            
          </div>
        
        </div>
        <div className="right-div">Hola</div>
        <div className="left-div">Hola</div>
      </div>
    </div>
  );
};
