import React, { useState } from 'react';
import PlannerIcon from "../../../../../src/assets/svg/PlannerIcon.svg";

import './ExpensePlanner.css'; 
interface Expense {
  selectedCard: string;
  budget: number;
  category: string;
}

export const ExpensePlanner = () => {
  const [showPopup, setShowPopup] = useState(false);

  const [selectedCard, setSelectedCard] = useState("");
  const [budget, setBudget] = useState("");
  const [category, setCategory] = useState("");

  const [expenses, setExpenses] = useState<Expense[]>([]);
  const togglePopUp = () => {
    setShowPopup(!showPopup);
  };

  const handleAddExpense = () => {
    if (selectedCard && budget && category) {
      setExpenses([...expenses, { selectedCard, budget: parseFloat(budget), category }]);
      setShowPopup(false); // Cerrar popup
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className='planner'>

      <h1>Monthly expense planner</h1>
      <img className="PlannerIcon" src={PlannerIcon} alt="PlannerIcon" />
      <h3>You don't have budgeted expenses</h3>

      {expenses.length > 0 && (
        <div className="expense-list">
          {expenses.map((expense, index) => (
            <div key={index} className="expense-item">
              <p>Card: {expense.selectedCard}</p>
              <p>Budget: ${expense.budget}</p>
              <p>Category: {expense.category}</p>
            </div>
          ))}
        </div>
      )}
      <button className ="add" onClick={togglePopUp}>Add a new expense</button>


      {showPopup && (
        <div className='popup'>
          <p className='title'>New Expense</p>
          <h3>Cards</h3>
          <select name="cards" value={selectedCard} onChange={(e) => setSelectedCard(e.target.value)} required>
            <option value="" disabled>My cards</option>
            <option value="nu">Nu</option>
            <option value="visa">Visa</option>
            <option value="falabella">Falabella</option>
            <option value="nequi">Nequi</option>
          </select>

          <h3>Budget</h3>
          <input
            className='budget'
            type='number'
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            placeholder="Enter amount"
          />

          <h3>Categorías</h3>
          <select name="categories" value={category} onChange={(e) => setCategory(e.target.value)} required>
            <option value="" disabled>Category</option>
            <option value="home">Home</option>
            <option value="market">Market</option>
            <option value="clothes">Clothes</option>
          </select>

    <div className="button-container"> 
      <button className="close-button" onClick={togglePopUp}>Cancel</button> 
      <button className="add-button" onClick={handleAddExpense}>Add new expense</button> 

    </div>
  </div>
)}

    </div>
  );
};
