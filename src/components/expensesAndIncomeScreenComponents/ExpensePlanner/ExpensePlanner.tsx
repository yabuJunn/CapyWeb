import './ExpensePlanner.css';

import { useEffect, useState } from 'react';

//  Import Incomes Images
import PlannerIcon from "../../../../src/assets/desktop/svg/PlannerIcon.svg";

//  Import Expenses Images
import cartSvg from '../../../assets/desktop/svg/cart.svg'
import shoppingSvg from '../../../assets/desktop/svg/shopping.svg'
import homeSvg from '../../../assets/desktop/svg/home.svg'
import travelSvg from '../../../assets/desktop/svg/globeIconWhite.svg'
import outingsSvg from '../../../assets/desktop/svg/outingsSvg.svg'
import otherExpenseSvg from '../../../assets/desktop/svg/otherExpenseSvg.svg'
import familySvg from '../../../assets/desktop/svg/familySvg.svg'
import friendsSvg from '../../../assets/desktop/svg/friendsSvg.svg'

//  Import Incomes Images
import nuSvg from '../../../assets/desktop/svg/nuSvg.svg';
import masterCardSvg from '../../../assets/desktop/svg/mastercardSvg.svg';
import visaSvg from '../../../assets/desktop/svg/visaSvg.svg';
import efectivoSvg from '../../../assets/desktop/svg/efectivoSvg.svg';
import debitoSvg from '../../../assets/desktop/svg/debitoSvg.svg';
import otroCardSvg from '../../../assets/desktop/svg/otroSvg.svg';
import { incomeNameEntries } from '../../../store/incomes/types';
import { expenseNameCategories, plannedExpenseType } from '../../../store/expenses/types';

interface ExpensePlannerProps {
  ExpensePlannerData: plannedExpenseType[]
}

export const ExpensePlanner = ({ ExpensePlannerData }: ExpensePlannerProps) => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCard, setSelectedCard] = useState<incomeNameEntries>(incomeNameEntries.cards);
  const [budget, setBudget] = useState("");
  const [category, setCategory] = useState<expenseNameCategories>(expenseNameCategories.category);
  const [plannedExpenses, setPlannedExpenses] = useState<plannedExpenseType[]>(ExpensePlannerData);

  useEffect(() => {
    setPlannedExpenses(ExpensePlannerData)
  }, [ExpensePlannerData])

  const togglePopUp = () => {
    setShowPopup(!showPopup);
    if (showPopup) {
      setSelectedCard(incomeNameEntries.cards);
      setBudget("");
      setCategory(expenseNameCategories.category);
    }
  };

  const handleAddExpense = () => {
    if (selectedCard && budget && category) {
      // setPlannedExpenses([...plannedExpenses, { selectedCard, budget: parseFloat(budget), category }]);
      setShowPopup(false);
    } else {
      alert("Please fill in all fields");
    }
  };

  // Mapeo de imágenes de tarjetas
  // const cardIcons: { [key: string]: string } = {
  //   nu: NuCardIcon,
  //   visa: VisaCardIcon,
  //   falabella: FalabellaCardIcon,
  //   nequi: NequiCardIcon,
  // };

  const iconMap: Record<string, string> = {
    [incomeNameEntries.nu]: nuSvg,
    [incomeNameEntries.visa]: visaSvg,
    [incomeNameEntries.masterCard]: masterCardSvg,
    [incomeNameEntries.efectivo]: efectivoSvg,
    [incomeNameEntries.debito]: debitoSvg,
    [incomeNameEntries.otro]: otroCardSvg,
  };

  // Crear el objeto cardIcons usando los valores de incomeNameEntries como claves
  const cardIcons: Record<string, string> = Object.values(incomeNameEntries).reduce((acc, value) => {
    if (iconMap[value]) {
      acc[value] = iconMap[value];
    }
    return acc;
  }, {} as Record<string, string>);

  // console.log("cardIcons: ", cardIcons);

  // Mapeo de imágenes de categorías
  // const categoryIcons: { [key: string]: string } = {
  //   home: HomeIcon,
  //   market: MarketIcon,
  //   clothes: ClothesIcon,
  // };
  // Mapa de íconos para cada categoría en el enum expenseNameCategories
  const expenseIconMap: Partial<Record<expenseNameCategories, string>> = {
    [expenseNameCategories.hogar]: homeSvg,
    [expenseNameCategories.mercado]: cartSvg,
    [expenseNameCategories.ropa]: shoppingSvg,
    [expenseNameCategories.salidas]: outingsSvg,
    [expenseNameCategories.viajes]: travelSvg,
    [expenseNameCategories.familia]: familySvg,
    [expenseNameCategories.Amigos]: friendsSvg,
    [expenseNameCategories.otro]: otherExpenseSvg,
  };

  // Crear el objeto categoryIcons usando los valores de expenseNameCategories como claves
  const categoryIcons: Record<string, string> = Object.values(expenseNameCategories).reduce((acc, value) => {
    if (expenseIconMap[value as expenseNameCategories]) {
      acc[value] = expenseIconMap[value as expenseNameCategories]!;
    }
    return acc;
  }, {} as Record<string, string>);


  // console.log("categoryIcons: ", categoryIcons)

  return (
    <div className='planner'>
      <h2>Monthly Expense Planner</h2>

      {plannedExpenses.length === 0 ? (
        <>
          <img className="PlannerIcon" src={PlannerIcon} alt="PlannerIcon" />
          <h3>You don't have budgeted expenses</h3>
        </>
      ) : (
        <div className="expense-list">
          {plannedExpenses.map((expense, index) => {
            const cardIconSrc = cardIcons[expense.expenseEntrie]
            const categoryIconSrc = categoryIcons[expense.expenseCategory]
            return (
              <div key={index} className="expense-item">
                <img src={cardIconSrc} alt={expense.expenseCategory} className="card-icon" />
                <div className="expense-info">
                  <p>Budget: ${expense.expenseAmount}</p>
                  <div className="category-info">
                    <img src={categoryIconSrc} alt={expense.expenseCategory} className="category-icon" />
                    <p>{expense.expenseCategory}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <button className="add" onClick={togglePopUp}>Add a new expense</button>

      {showPopup && (
        <div className='popup'>
          <p className='title'>New Expense</p>
          <h3>Cards</h3>
          <select name="cards" value={selectedCard} onChange={(e) => setSelectedCard(e.target.value as incomeNameEntries)} required>
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
          <select name="categories" value={category} onChange={(e) => setCategory(e.target.value as expenseNameCategories)} required>
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