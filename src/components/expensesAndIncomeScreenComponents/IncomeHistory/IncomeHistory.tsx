import { useState } from "react";
import { expenses, Category } from "./data";
import "./IncomeHistory.css";

export const IncomeHistory = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | "">(""); // State for selected category

  // Select handler
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value as Category);
  };

  // Filter
  const filteredExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  return (
    <div className="generalHistoryIncomes">
      <div className="topHistoryIncomes">
        <h1>History</h1>
        <select
          className="select-history-incomes"
          name="categories"
          onChange={handleChange}
          value={selectedCategory}
          required
        >
          <option value="" disabled>
            Cards
          </option>
          <option value="visa">Visa</option>
          <option value="nu">Nu</option>
        </select>
      </div>

      <div>
        {filteredExpenses.map((expense, index) => (
          <li
            className="cards-incomes-info"
            key={index}
            style={{ marginBottom: "20px", listStyleType: "none" }}
          >
            <div className="incomes-content">
              {expense.img && (
                <img
                  className="image-card-incomes"
                  src={expense.img}
                  alt={`Image of`}
                  width={50}
                  height={50}
                />
              )}
              <div className="card-container-incomes-details">
                <div className="incomes-details">
                  <p>{expense.date}</p>
                </div>
                <p className="history-incomes-amount">${expense.amount}</p>
              </div>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};
