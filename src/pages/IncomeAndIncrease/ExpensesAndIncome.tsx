import { ExpensesGraphic } from "../../components/dashboardPageComponents/expensesAndIncomeScreenComponents/ExpensesGraphic/ExpensesGraphic";
import { IncomesGraphic } from "../../components/dashboardPageComponents/expensesAndIncomeScreenComponents/IncomesGraphic/IncomesGraphic";
import { ExpensePlanner } from "../../components/dashboardPageComponents/expensesAndIncomeScreenComponents/ExpensePlanner/ExpensePlanner";
import { History } from "../../components/dashboardPageComponents/expensesAndIncomeScreenComponents/History/History";
import { PieChart2 } from "../../components/dashboardPageComponents/expensesAndIncomeScreenComponents/PieChart2/PieChart2";
import { IncomePieChart } from "../../components/dashboardPageComponents/expensesAndIncomeScreenComponents/IncomePieChart/IncomePieChart";
import { IncomeHistory } from "../../components/dashboardPageComponents/expensesAndIncomeScreenComponents/IncomeHistory/IncomeHistory";
import {
  realExpenseType,
  realIncomeType,
  expensesData,
  incomesData,
} from "./dataIncomeAndExpense";
import {
  ExpenseData,
  CategoryPercentage,
} from "../../components/dashboardPageComponents/expensesAndIncomeScreenComponents/ExpensesGraphic/ExpensesGraphic";
import "./ExpensesAndIncome.css";
import { useState, useEffect } from "react";
import { GlobalAppNav } from "../../components/Nav/Nav";

export function getMonthName(date: Date): string {
  return date.toLocaleString("en-US", { month: "long" });
}

export function calculateExpensesData(expenses: Array<realExpenseType>) {
  const monthlyExpenseData: {
    [month: string]: {
      totalAmount: number;
      categoryAmounts: { [key: string]: number };
    };
  } = {};

  expenses.forEach((expense) => {
    // Convertir expenseDate de Timestamp a Date
    const month = getMonthName(expense.expenseDate.toDate());

    if (!monthlyExpenseData[month]) {
      monthlyExpenseData[month] = { totalAmount: 0, categoryAmounts: {} };
    }

    monthlyExpenseData[month].totalAmount += expense.expenseAmount;

    if (!monthlyExpenseData[month].categoryAmounts[expense.expenseCategory]) {
      monthlyExpenseData[month].categoryAmounts[expense.expenseCategory] = 0;
    }
    monthlyExpenseData[month].categoryAmounts[expense.expenseCategory] +=
      expense.expenseAmount;
  });

  const result = Object.keys(monthlyExpenseData).map((month) => {
    const monthData = monthlyExpenseData[month];
    const categoryPercentages = Object.keys(monthData.categoryAmounts).map(
      (category) => {
        const categoryAmount = monthData.categoryAmounts[category];
        const percentage = (categoryAmount / monthData.totalAmount) * 100;
        return { category, percentage: parseFloat(percentage.toFixed(2)) };
      }
    );

    return {
      month,
      totalAmount: monthData.totalAmount,
      categoryPercentages,
    };
  });

  return result;
}

export function calculateIncomesData(incomes: Array<realIncomeType>) {
  const monthlyIncomeData: {
    [month: string]: {
      totalAmount: number;
      entryAmounts: { [key: string]: number };
    };
  } = {};

  incomes.forEach((income) => {
    // Convertir incomeDate de Timestamp a Date
    const month = getMonthName(income.incomeDate.toDate());

    if (!monthlyIncomeData[month]) {
      monthlyIncomeData[month] = { totalAmount: 0, entryAmounts: {} };
    }

    monthlyIncomeData[month].totalAmount += income.incomeAmount;

    if (!monthlyIncomeData[month].entryAmounts[income.incomeEntrie]) {
      monthlyIncomeData[month].entryAmounts[income.incomeEntrie] = 0;
    }
    monthlyIncomeData[month].entryAmounts[income.incomeEntrie] +=
      income.incomeAmount;
  });

  const result = Object.keys(monthlyIncomeData).map((month) => {
    const monthData = monthlyIncomeData[month];
    const entryPercentages = Object.keys(monthData.entryAmounts).map(
      (entry) => {
        const entryAmount = monthData.entryAmounts[entry];
        const percentage = (entryAmount / monthData.totalAmount) * 100;
        return { entry, percentage: parseFloat(percentage.toFixed(2)) };
      }
    );

    return {
      month,
      totalAmount: monthData.totalAmount,
      entryPercentages,
    };
  });

  return result;
}

export const ExpensesAndIncomePage = () => {
  const [selectedOption, setSelectedOption] = useState("Gastos");
  const [expenseResults, setExpenseResults] = useState<ExpenseData[]>([]);
  const [incomeResults] = useState<ExpenseData[]>([]);

  useEffect(() => {
    const expenseResults = calculateExpensesData(expensesData.realExpenses);
    console.log("Gastos por mes:", expenseResults);
    setExpenseResults(expenseResults);
    console.log(expenseResults);

    const incomeResults = calculateIncomesData(incomesData.realIncomes);
    //setIncomeResults(incomeResults);
    console.log(incomeResults);

  }, []);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const mappedExpenseResults = expenseResults.map((result) => ({
    month: result.month,
    totalAmount: result.totalAmount,
    categoryPercentages: result.categoryPercentages.map(
      (category: CategoryPercentage) => ({
        category: category.category,
        percentage: category.percentage,
      })
    ),
  }));

  console.log(mappedExpenseResults);

  const mappedIncomeResults = incomeResults.map((result) => ({
    month: result.month,
    totalAmount: result.totalAmount,
  }));


  return (
    <main className="page">
      <h1>Expenses & Income</h1>

      <GlobalAppNav></GlobalAppNav>

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
              className={`expense-graphic ${selectedOption === "Gastos"
                  ? "expense-graphic-color1"
                  : "expense-graphic-color-2"
                }`}
            >
              {selectedOption === "Gastos" ? (
                <ExpensesGraphic data={mappedExpenseResults} />
              ) : (
                <IncomesGraphic data={mappedIncomeResults} />
              )}
            </div>
            <div className="piechart-graphic">
              {selectedOption === "Gastos" ? (
                <PieChart2 data={mappedExpenseResults} />
              ) : (
                <IncomePieChart />
              )}
            </div>
          </div>
        </div>

        <div className="chart-expense-bottom">
          <div className="left-div">
            <ExpensePlanner />
          </div>
          <div className="right-div">
            {selectedOption === "Gastos" ? (
              <History /*chartData={chartData}*/ />
            ) : (
              <IncomeHistory /*chartData={chartData}*/ />
            )}
          </div>
        </div>
      </div>
      <div id="background"></div>
    </main>
  );
};
