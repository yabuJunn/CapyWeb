import { useEffect, useState } from "react";
import { expenses, expensesCategory, Expense } from "./data";
import "./History.css";

export const History = () => {
  const [selectedCategory, setSelectedCategory] = useState<expensesCategory>(expensesCategory.category); // State for selected category
  const [filteredExpenses, setFilteredExpenses] = useState<Expense[]>(expenses);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value as expensesCategory);
  };


  useEffect(() => {
    if (selectedCategory === expensesCategory.category) {
      setFilteredExpenses(expenses)
    } else {
      const filteredExpenses = expenses.filter((expense) => expense.category === selectedCategory)
      setFilteredExpenses(filteredExpenses)
    }
  }, [selectedCategory])

  console.log(selectedCategory)

  return (
    <div className="generalHistoryExpenses">
      <div className="topHistoryExpenses">
        <h1>History</h1>
        <select
          className="select-history-expenses"
          name="categories"
          onChange={handleChange}
          value={selectedCategory}
          required
        >
          <option value={expensesCategory.category}>Category</option>
          <option value={expensesCategory.home}>Home</option>
          <option value={expensesCategory.market}>Market</option>
          <option value={expensesCategory.clothes}>Clothes</option>
        </select>
      </div>

      <div>
        {filteredExpenses.map((expense, index) => (
          <li
            className="cards-expenses-info"
            key={index}
            style={{ marginBottom: "20px", listStyleType: "none" }}
          >
            <div className="expense-content">
              {expense.img && (
                <img
                  className="image-card-expenses"
                  src={expense.img}
                  alt={`Image of ${expense.place}`}
                  width={50}
                  height={50}
                />
              )}
              <div className="card-container-expense-details">
                <div className="expense-details">
                  <h2>{expense.place}</h2>
                  <p>Category: {expense.category}</p>
                  <p>Date: {expense.date}</p>
                </div>
                <p className="history-expense-amount">${expense.amount}</p>
              </div>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};
