import { expenseNameCategories } from '../../../store/expenses/types'
import './PieCardHints.css'

interface PieCardHintsProps {
    categoryArrayTotal: Array<{
        fill: string,
        expenseCategoryName: expenseNameCategories,
        expenseCategoryValue: number,
        expensePercentage: number
    }>,
    isMonthData: boolean,
    categoryArrayMonth: Array<{
        expenseCategoryName: string;
        fill: string;
        expensePercentage: number;
    }>,
}

export const PieCardHints = ({ categoryArrayTotal, isMonthData, categoryArrayMonth }: PieCardHintsProps) => {
    console.log(categoryArrayMonth)
    if (isMonthData) {
        return <>
            <ul className="container-info-pie-chart">
                {categoryArrayMonth.map((categoryItem) => (
                    <li key={categoryItem.expenseCategoryName} className="info-pie-chart-color">
                        <div className='hint'>
                            <div className='color' style={{ backgroundColor: categoryItem.fill }}></div>
                            <p>{categoryItem.expenseCategoryName}</p>
                            <p>{categoryItem.expensePercentage.toFixed(2)}%</p>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    } else {
        return <>
            <ul className="container-info-pie-chart">
                {categoryArrayTotal.map((categoryItem) => (
                    <li key={categoryItem.expenseCategoryName} className="info-pie-chart-color">
                        <div className='hint'>
                            <div className='color' style={{ backgroundColor: categoryItem.fill }}></div>
                            <p>{categoryItem.expenseCategoryName}</p>
                            <p>{categoryItem.expensePercentage.toFixed(2)}%</p>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    }
}
