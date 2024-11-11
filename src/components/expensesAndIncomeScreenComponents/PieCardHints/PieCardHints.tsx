import { expenseNameCategories } from '../../../store/expenses/types'
import './PieCardHints.css'

interface PieCardHintsProps {
    categoryArray: Array<{
        categoryColor: string,
        categoryName: expenseNameCategories,
        categoryPercentage: number
    }>
}

export const PieCardHints = ({ categoryArray }: PieCardHintsProps) => {
    return <>
        <ul className="container-info-pie-chart">
            {categoryArray.map((categoryItem) => (
                <li key={categoryItem.categoryName} className="info-pie-chart-color">

                </li>
            ))}
        </ul>
    </>
}
