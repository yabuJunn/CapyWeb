import React, { useState } from 'react';
import PlannerIcon from "../../../../../src/assets/svg/PlannerIcon.svg"

export const ExpensePlanner = () => {

 const [showPopup, setShowPopup ] = useState(false) 


const togglePopUp = () =>{
  setShowPopup(!showPopup)

}
  return (
    <div className='planner'>
        <h1>Monthly expense planner</h1>
        <img className="PlannerIcon" src={PlannerIcon} alt="PlannerIcon" />
        <h3>You don't have budgeted expenses</h3>
        <button onClick={togglePopUp}>Add a new expense</button>

        {(showPopup && (
          <div>
            <h2>New Expense</h2>
            <h3>Tarjetas</h3>
            <select name="tarjetas" required>
            <option value="" disabled selected>Tarjetas</option> 
            <option value="nu">Nu</option> 
            <option value="visa">Visa</option> 
            <option value="falabella">Falabella</option> 
            <option value="nequi">Nequi</option> 
            </select>

            <h3>Presupuesto</h3>
            <input type='number' />

            <h3>Categporías</h3>
            <select name="categories" required>
            <option value="" disabled selected>Categoría</option> 
            <option value={"hogar"}>Hogar</option>
            <option value={"mercado"}>Mercado</option>
            <option value={"ropa"}>Ropa</option>
            </select>

          </div>
        ))}
    </div>
  );
}