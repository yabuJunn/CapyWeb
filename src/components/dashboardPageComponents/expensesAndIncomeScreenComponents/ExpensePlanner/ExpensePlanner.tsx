import  { useState } from 'react';
import PlannerIcon from "../../../../../src/assets/svg/PlannerIcon.svg";
import NuCardIcon from "../../../../../src/assets/svg/nu.svg";
import VisaCardIcon from "../../../../../src/assets/svg/visa.svg";
import FalabellaCardIcon from "../../../../../src/assets/svg/falabella.svg";
import NequiCardIcon from "../../../../../src/assets/svg/nequi.svg";
import HomeIcon from "../../../../../src/assets/svg/home.svg";
import MarketIcon from "../../../../../src/assets/svg/shopping-cart.svg";
import ClothesIcon from "../../../../../src/assets/svg/shopping-bag.svg";

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
    if (showPopup) {
      setSelectedCard("");
      setBudget("");
      setCategory("");
    }
  };

  const handleAddExpense = () => {
    if (selectedCard && budget && category) {
      setExpenses([...expenses, { selectedCard, budget: parseFloat(budget), category }]);
      setShowPopup(false);
    } else {
      alert("Please fill in all fields");
    }
  };

  // Mapeo de imágenes de tarjetas
  const cardIcons: { [key: string]: string } = {
    nu: NuCardIcon,
    visa: VisaCardIcon,
    falabella: FalabellaCardIcon,
    nequi: NequiCardIcon,
  };

  // Mapeo de imágenes de categorías
  const categoryIcons: { [key: string]: string } = {
    home: HomeIcon,
    market: MarketIcon,
    clothes: ClothesIcon,
  };

  return (
    <div className='planner'>
      <h1>Monthly Expense Planner</h1>

      {expenses.length === 0 ? (
        <>
          <img className="PlannerIcon" src={PlannerIcon} alt="PlannerIcon" />
          <h3>You don't have budgeted expenses</h3>
        </>
      ) : (
        <div className="expense-list">
         {expenses.map((expense, index) => (
    <div key={index} className="expense-item">
        <img src={cardIcons[expense.selectedCard]} alt={expense.selectedCard} className="card-icon" />
        <div className="expense-info">
            <p>Budget: ${expense.budget}</p>
            <div className="category-info">
                <img src={categoryIcons[expense.category]} alt={expense.category} className="category-icon" />
                <p>{expense.category}</p>
            </div>
        </div>
    </div>
          ))}
        </div>
      )}

      <button className="add" onClick={togglePopUp}>Add a new expense</button>

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

          <h3>Categories</h3>
          <select name="categories" value={category} onChange={(e) => setCategory(e.target.value)} required>
            <option value="" disabled>Category</option>
            <option value="home">Home</option>
            <option value="market">Market</option>
            <option value="clothes">Clothes</option>
          </select>

          <div className="button-container">
            <button className="close-button" onClick={togglePopUp}>Cancel</button>
            <button className="add-button" onClick={handleAddExpense}>Add  expense</button>
          </div>
        </div>
      )}
    </div>
  );
};
