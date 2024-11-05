import './SavingsGoals.css'

import { SavingGoalItem, SavingGoalItemProps } from '../SavingGoalItem/SavingGoalItem'
import { useDispatch } from 'react-redux'
import { changeAddSavingModal } from '../../../store/store'

interface SavingsGoalsProps {
    savingsGoalsItemsArray: Array<SavingGoalItemProps>
}

export const SavingsGoals = ({ savingsGoalsItemsArray }: SavingsGoalsProps) => {
    const dispatch = useDispatch()


    return <>
        <div id='savingsGoalsContainer'>
            <div id='savingsGoalsHeader'>
                <h3>Savings Goals</h3>
                <button onClick={() => {
                    dispatch(changeAddSavingModal(true))
                }}>Create savings goal</button>
            </div>

            <div id='savingsGoalsListContainer'>
                {savingsGoalsItemsArray.map((goal) => {
                    return <SavingGoalItem goalImage={goal.goalImage} goalImageColor={goal.goalImageColor} goalTitle={goal.goalTitle} goalMonthlySaving={goal.goalMonthlySaving} goalActualFee={goal.goalActualFee} goalTotalFee={goal.goalTotalFee}></SavingGoalItem>
                })}
            </div>
        </div>
    </>
}