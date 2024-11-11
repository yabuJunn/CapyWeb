import { ExpensesGraphic } from "../../components/expensesAndIncomeScreenComponents/ExpensesGraphic/ExpensesGraphic";
import { IncomesGraphic } from "../../components/expensesAndIncomeScreenComponents/IncomesGraphic/IncomesGraphic";
import { ExpensePlanner } from "../../components/expensesAndIncomeScreenComponents/ExpensePlanner/ExpensePlanner";
import { History } from "../../components/expensesAndIncomeScreenComponents/History/History";
import { ExpensesPieChart } from "../../components/expensesAndIncomeScreenComponents/PieChart2/PieChart2";
import { IncomePieChart } from "../../components/expensesAndIncomeScreenComponents/IncomePieChart/IncomePieChart";
import { IncomeHistory } from "../../components/expensesAndIncomeScreenComponents/IncomeHistory/IncomeHistory";
import {
  realExpenseType,
  realIncomeType,
  expensesData,
  incomesData,
  expensesSliceType,
  expenseNameCategories,
} from "./dataIncomeAndExpense";
import {
  ExpenseData,
  CategoryPercentage,
} from "../../components/expensesAndIncomeScreenComponents/ExpensesGraphic/ExpensesGraphic";
import "./ExpensesAndIncome.css";
import { useState, useEffect } from "react";
import { GlobalAppNav } from "../../components/Nav/Nav";
import { PieCardMonthSelect } from "../../components/expensesAndIncomeScreenComponents/PieCardMonthSelect/PieCardMonthSelect";

function getMonthName(date: Date): string {
  return date.toLocaleString("en-US", { month: "long" });
}

function calculateExpensesData(expenses: Array<realExpenseType>) {
  const monthlyExpenseData: {
    [month: string]: {
      totalAmount: number;
      categoryAmounts: { [key: string]: { amount: number; fill: string } };
      value: number;
    };
  } = {};

  expenses.forEach((expense) => {
    // Convertir expenseDate de Timestamp a Date
    const month = getMonthName(expense.expenseDate.toDate());

    // Inicializar el objeto del mes si no existe
    if (!monthlyExpenseData[month]) {
      monthlyExpenseData[month] = { totalAmount: 0, categoryAmounts: {}, value: 0 };
    }

    // Actualizar el totalAmount del mes
    monthlyExpenseData[month].totalAmount += expense.expenseAmount;

    // Verificar si la categoría específica ya existe en categoryAmounts
    if (!monthlyExpenseData[month].categoryAmounts[expense.expenseCategory]) {
      monthlyExpenseData[month].categoryAmounts[expense.expenseCategory] = {
        amount: 0,
        fill: expense.expenseColor
      };
    }

    // Sumar el monto a la categoría correspondiente
    monthlyExpenseData[month].categoryAmounts[expense.expenseCategory].amount +=
      expense.expenseAmount;

    // Actualizar el valor total del mes si es necesario
    monthlyExpenseData[month].value += expense.expenseAmount;
  });

  const result = Object.keys(monthlyExpenseData).map((month) => {
    const monthData = monthlyExpenseData[month];
    const categoryPercentages = Object.keys(monthData.categoryAmounts).map(
      (category) => {
        const categoryAmount = monthData.categoryAmounts[category];
        const percentage = (categoryAmount.amount / monthData.totalAmount) * 100;
        const fill = categoryAmount.fill
        return { category, percentage: parseFloat(percentage.toFixed(2)), fill: fill, value: categoryAmount };
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

function calculateIncomesData(incomes: Array<realIncomeType>) {
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

export interface expenseCategoryType {
  totalCategoryExpenses: number,
  categoryMappedData: Array<{
    expenseCategoryName: expenseNameCategories,
    expenseCategoryValue: number,
    fill: string,
    expensePercentage: number
  }>
}

enum monthsSelectorNames {
  total = "Total",
  january = "January",
  february = "February",
  march = "March",
  april = "April",
  may = "May",
  june = "June",
  july = "July",
  august = "August",
  september = "September",
  october = "October",
  november = "November",
  december = "December"
}

const calculateTotalExpensesCategorty = (realExpensesData: Array<realExpenseType>) => {
  const categoryExpensesData: expenseCategoryType = {
    totalCategoryExpenses: 0,
    categoryMappedData: []
  }

  //Calculate totalCategoryExpenses
  realExpensesData.forEach((expenseItem) => {
    categoryExpensesData.totalCategoryExpenses += expenseItem.expenseAmount
  })

  //Calculate each category expenses amount
  realExpensesData.forEach((expenseItem) => {
    const foundCategoryExpensed = categoryExpensesData.categoryMappedData.find(categoryMapped => categoryMapped.expenseCategoryName === expenseItem.expenseCategory)
    if (!foundCategoryExpensed) {
      categoryExpensesData.categoryMappedData.push({
        expenseCategoryName: expenseItem.expenseCategory,
        expenseCategoryValue: expenseItem.expenseAmount,
        fill: expenseItem.expenseColor,
        expensePercentage: 0
      })
    } else {
      categoryExpensesData.categoryMappedData[categoryExpensesData.categoryMappedData.indexOf(foundCategoryExpensed)].expenseCategoryValue += expenseItem.expenseAmount
    }
  });

  //Calculates each category expenses percetage of the total
  categoryExpensesData.categoryMappedData.forEach((categoryMappedExpense) => {
    categoryMappedExpense.expensePercentage = (100 * categoryMappedExpense.expenseCategoryValue) / categoryExpensesData.totalCategoryExpenses
  })

  return categoryExpensesData
}

export type expenseDataResultsType = Array<ExpenseData>

export const ExpensesAndIncomePage = () => {
  const [selectedOption, setSelectedOption] = useState("Gastos");
  const [expenseResults, setExpenseResults] = useState<expenseDataResultsType>([]);
  const [incomeResults] = useState<ExpenseData[]>([]);
  const [totalExpenseCategory, setTotalExpenseCategory] = useState<expenseCategoryType>({ totalCategoryExpenses: 0, categoryMappedData: [] })
  const [monthSelector, setMonthSelector] = useState("Total")

  useEffect(() => {
    const expenseResults = calculateExpensesData(expensesData.realExpenses);
    // console.log("Gastos por mes:", expenseResults);
    setExpenseResults(expenseResults);
    // console.log(expenseResults);

    const incomeResults = calculateIncomesData(incomesData.realIncomes);
    //setIncomeResults(incomeResults);
    // console.log(incomeResults);

    const totalExpensesCategoryResult = calculateTotalExpensesCategorty(expensesData.realExpenses)
    setTotalExpenseCategory(totalExpensesCategoryResult)
  }, []);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleMonthSelectorChannge = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMonthSelector(event.target.value);
  };

  const mappedExpensesGraphicData = expenseResults.map((result) => ({
    month: result.month,
    totalAmount: result.totalAmount,
    categoryPercentages: result.categoryPercentages.map(
      (category) => ({
        expenseCategoryName: category.category,
        fill: category.fill,
        expensePercentage: category.percentage
      })
    ),
  }));

  const mappedIncomeResults = incomeResults.map((result) => ({
    month: result.month,
    totalAmount: result.totalAmount,
  }));

  const foundMonthData = expenseResults.find(expenseMonth => expenseMonth.month === monthSelector)

  //Expenses or Incomes Conditional
  if (selectedOption === "Gastos") {
    switch (monthSelector) {
      case monthsSelectorNames.total:
        return <>
          <main className="page" id="expensesAndIncomePage">
            <h1 id="expensesAndIncomePageTitle">Expenses & Income</h1>

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
                  <div className="expense-graphic expense-graphic-color1" >
                    <ExpensesGraphic data={mappedExpensesGraphicData} />
                  </div>
                  <div className="piechart-graphic">
                    <div className="pie-card-right">
                      {/* Aqui va el select y los hints */}
                      <PieCardMonthSelect monthsArray={expenseResults.map((expense) => expense.month)} handleMonthSelectorChannge={handleMonthSelectorChannge}></PieCardMonthSelect>
                    </div>
                    <ExpensesPieChart data={totalExpenseCategory} isMonthData={false} monthData={{ month: "", totalAmount: 0, categoryPercentages: [] }} />
                  </div>
                </div>
              </div>

              <div className="chart-expense-bottom">
                <div className="left-div">
                  <ExpensePlanner />
                </div>
                <div className="right-div">
                  <History /*chartData={chartData}*/ />
                </div>
              </div>
            </div>

            <div id="backgroundExpensesAndIncomes" className="backgroundPage">

            </div>
          </main >
        </>
        break;
      case monthsSelectorNames.october:
        if (foundMonthData) {
          return <>
            <main className="page" id="expensesAndIncomePage">
              <h1 id="expensesAndIncomePageTitle">Expenses & Income</h1>

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
                    <div className="expense-graphic expense-graphic-color1" >
                      <ExpensesGraphic data={mappedExpensesGraphicData} />
                    </div>
                    <div className="piechart-graphic">
                      <div className="pie-card-right">
                        {/* Aqui va el select y los hints */}
                        <PieCardMonthSelect monthsArray={expenseResults.map((expense) => expense.month)} handleMonthSelectorChannge={handleMonthSelectorChannge}></PieCardMonthSelect>
                      </div>
                      <ExpensesPieChart data={totalExpenseCategory} isMonthData={true} monthData={foundMonthData} />
                    </div>
                  </div>
                </div>

                <div className="chart-expense-bottom">
                  <div className="left-div">
                    <ExpensePlanner />
                  </div>
                  <div className="right-div">
                    <History /*chartData={chartData}*/ />
                  </div>
                </div>
              </div>

              <div id="backgroundExpensesAndIncomes" className="backgroundPage">

              </div>
            </main >
          </>
        }
        break;

      default:
        break;
    }

  } else if (selectedOption === "Ingresos") {
    return <>
      <main className="page" id="expensesAndIncomePage">
        <h1 id="expensesAndIncomePageTitle">Expenses & Income</h1>

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
              <div className="expense-graphic expense-graphic-color-2">
                <IncomesGraphic data={mappedIncomeResults} />
              </div>
              <div className="piechart-graphic">
                <div className="pie-card-right">
                  <select className="select-expenses-pie" name="" id="">
                    <option value="July">Total</option>
                    <option value="July">July</option>
                    <option value="Igresos">August</option>
                  </select>
                </div>
                <IncomePieChart />
              </div>
            </div>
          </div>

          <div className="chart-expense-bottom">
            <div className="left-div">
              <ExpensePlanner />
            </div>
            <div className="right-div">
              <IncomeHistory /*chartData={chartData}*/ />
            </div>
          </div>
        </div>

        <div id="backgroundExpensesAndIncomes" className="backgroundPage">

        </div>
      </main>
    </>
  }

};
