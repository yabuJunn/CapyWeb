import { ExpensesGraphic } from "../../components/dashboardPageComponents/expensesAndIncomeScreenComponents/ExpensesGraphic/ExpensesGraphic";
import { PieChartGraphic } from "../../components/dashboardPageComponents/expensesAndIncomeScreenComponents/ExpensesGraphic/PieChart/PieChartGraphic";


export const ExpensesAndIncome = () => {
  return (
    <div className='page'>
        <h1>Income and Increase</h1>
        <ExpensesGraphic />
        <PieChartGraphic />
 
    </div>
  );
}