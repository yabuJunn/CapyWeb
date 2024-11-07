import './SavingsGoals.css'

import { SavingGoalItem, SavingGoalItemProps } from '../SavingGoalItem/SavingGoalItem'

interface SavingsGoalsProps {
    savingsGoalsItemsArray: Array<SavingGoalItemProps>
}

export const SavingsGoals = ({ savingsGoalsItemsArray }: SavingsGoalsProps) => {
    
    return <>
        <div id='savingsGoalsContainer'>
            <div id='savingsGoalsHeader'>
                <h3>Savings Goals</h3>
                <button>Create savings goal</button>
            </div>

            <div id='savingsGoalsListContainer'>
                {savingsGoalsItemsArray.map((goal) => {
                    return <SavingGoalItem goalImage={goal.goalImage} goalImageColor={goal.goalImageColor} goalTitle={goal.goalTitle} goalMonthlySaving={goal.goalMonthlySaving} goalActualFee={goal.goalActualFee} goalTotalFee={goal.goalTotalFee}></SavingGoalItem>
                })}
            </div>
        </div>
    </>
}