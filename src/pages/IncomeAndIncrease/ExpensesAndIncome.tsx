import { ExpensePlanner } from "../../components/dashboardPageComponents/expensesAndIncomeScreenComponents/ExpensePlanner/ExpensePlanner";
import { ExpensesGraphic } from "../../components/dashboardPageComponents/expensesAndIncomeScreenComponents/ExpensesGraphic/ExpensesGraphic";
import { PieChartGraphic } from "../../components/dashboardPageComponents/expensesAndIncomeScreenComponents/PieChart/PieChartGraphic";
import { History } from "../../components/dashboardPageComponents/expensesAndIncomeScreenComponents/History/History";
import Nav from "../../components/Nav/Nav";

export const ExpensesAndIncome = () => {
  return (
    <div className='ExpensesAndIncome'>
        <h1>Income and Increase</h1>
        <Nav/>
        <ExpensesGraphic />
        <PieChartGraphic />
        <ExpensePlanner />
        <History />

 
    </div>
  );
}