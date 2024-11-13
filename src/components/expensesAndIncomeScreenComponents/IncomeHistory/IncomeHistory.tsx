import { useEffect, useState } from "react";
import { incomesHistory, incomeHistoryType, incomeCategory } from "./data";
import "./IncomeHistory.css";

export const IncomeHistory = () => {
  const [selectedCategory, setSelectedCategory] = useState<incomeCategory>(incomeCategory.cards); // State for selected category
  const [filteredIncomes, setFilteredIncomes] = useState<incomeHistoryType[]>(incomesHistory);

  // Select handler
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value as incomeCategory);
  };

  useEffect(() => {
    if (selectedCategory === incomeCategory.cards) {
      setFilteredIncomes(incomesHistory)
    } else {
      const filteredIncomes = incomesHistory.filter((incomes) => incomes.category === selectedCategory)
      setFilteredIncomes(filteredIncomes)
    }
  }, [selectedCategory])

  console.log(filteredIncomes)

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
          <option value={incomeCategory.cards}>{incomeCategory.cards}</option>
          <option value={incomeCategory.visa}>{incomeCategory.visa}</option>
          <option value={incomeCategory.nu}>{incomeCategory.nu}</option>
        </select>
      </div>

      <div>
        {filteredIncomes.map((incomes, index) => (
          <li
            className="cards-incomes-info"
            key={index}
            style={{ marginBottom: "20px", listStyleType: "none" }}
          >
            <div className="incomes-content">
              {incomes.img && (
                <img
                  className="image-card-incomes"
                  src={incomes.img}
                  alt={`Image of`}
                  width={50}
                  height={50}
                />
              )}
              <div className="card-container-incomes-details">
                <div className="incomes-details">
                  <p>{incomes.date}</p>
                </div>
                <p className="history-incomes-amount">${incomes.amount}</p>
              </div>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};
