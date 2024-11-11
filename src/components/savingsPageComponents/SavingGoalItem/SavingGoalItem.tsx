import './SavingGoalItem.css'

import { Progress } from '../../../components/ui/progress'

export interface SavingGoalItemProps {
    goalImage: string,
    goalImageColor: string
    goalTitle: string,
    goalMonthlySaving: number,
    goalActualFee: number,
    goalTotalFee: number
}

export const SavingGoalItem = ({ goalImage, goalImageColor, goalTitle, goalMonthlySaving, goalActualFee, goalTotalFee }: SavingGoalItemProps) => {
    return <>
        <div className='savingGoalItemContainer'>
            <div className='savingGoalHeader'>
                <div className='savingGoalTitle'>
                    <img src={goalImage} alt="" style={{ backgroundColor: goalImageColor }} />
                    <div className='savingGoalTitleText'>
                        <h4>{goalTitle}</h4>
                        <p>Savings per month: {goalMonthlySaving}</p>
                    </div>
                </div>

                <button>
                    Edit
                </button>
            </div>

            <div className='savingGoalGraphContainer'>
                <div className='savingGoalGraphLabels'>
                    <p>Actual: ${goalActualFee} cop</p>
                    <p>Goal: ${goalTotalFee} cop</p>
                </div>
                <Progress value={(100 * goalActualFee) / goalTotalFee} className="w-[100%] h-[4vh]" style={{ border: '3px white solid' }}></Progress>
            </div>
        </div>
    </>
}