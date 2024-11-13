import { useState } from "react";
import { expenses, Category } from "./data";
import "./History.css";

export const History = () => {
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
          <option value="" disabled>
            Category
          </option>
          <option value="home">Home</option>
          <option value="market">Market</option>
          <option value="clothes">Clothes</option>
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
                  <p>{expense.category}</p>
                  <p>{expense.date}</p>
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
