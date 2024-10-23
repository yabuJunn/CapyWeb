import React, { useState } from 'react';
import PlannerIcon from "../../../../../src/assets/svg/PlannerIcon.svg";

import './ExpensePlanner.css'; 

export const ExpensePlanner = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopUp = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className='planner'>

      <h1>Monthly expense planner</h1>
      <img className="PlannerIcon" src={PlannerIcon} alt="PlannerIcon" />
      <h3>You don't have budgeted expenses</h3>
      <button className ="add" onClick={togglePopUp}>Add a new expense</button>

      {showPopup && (
  <div className='popup'>
    <p className='title'>New Expense</p>
    <h3>Cards</h3>
    <select name="cards" required>
      <option value="" disabled selected>My cards</option>
      <option value="nu">Nu</option>
      <option value="visa">Visa</option>
      <option value="falabella">Falabella</option>
      <option value="nequi">Nequi</option>
    </select>

    <h3>Budget</h3>
    <input className='budget' type='number' placeholder="Enter amount" />

    <h3>Categorías</h3>
    <select name="categories" required>
      <option value="" disabled selected>Category</option>
      <option value={"home"}>Home</option>
      <option value={"market"}>Market</option>
      <option value={"clothes"}>Clothes</option>
    </select>

    <div className="button-container"> 
      <button className="close-button" onClick={togglePopUp}>Cancel</button> 
      <button className="add-button">Add new expense</button> 

    </div>
  </div>
)}

    </div>
  );
};
