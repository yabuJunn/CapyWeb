import { useState } from 'react';
import { expenses, Category } from './data'; 
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
    <div className="generalHistory">
      <div className='topHistory'>
        <h1>History</h1>
        <select name="categories" onChange={handleChange} value={selectedCategory} required>
          <option value="" disabled>Category</option> 
          <option value="home">Home</option>
          <option value="market">Market</option>
          <option value="clothes">Clothes</option>
        </select>
      </div>
      
      <div>
        {filteredExpenses.map((expense, index) => (
          <li key={index} style={{ marginBottom: '20px', listStyleType: 'none' }}>
            <div className="expense-content">
              {expense.img && (
                <img src={expense.img} alt={`Image of ${expense.place}`} width={50} height={50} />
              )}
              <div className="expense-details">
                <h2>{expense.place}</h2>
                <p>Category: {expense.category}</p>
                <p>Date: {expense.date}</p>
                <p>Amount: ${expense.amount}</p>
              </div>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};