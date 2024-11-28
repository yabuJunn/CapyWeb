import './SavingGoalItem.css'

import { Progress } from '../../../components/ui/progress'
import { useState } from 'react'

import xIconWhite from '../../../assets/desktop/svg/icons/xIconWhite.svg'

export interface SavingGoalItemProps {
    goalImage: string,
    goalImageColor: string
    goalTitle: string,
    goalMonthlySaving: number,
    goalActualFee: number,
    goalTotalFee: number
}

export const SavingGoalItem = ({ goalImage, goalImageColor, goalTitle, goalMonthlySaving, goalActualFee, goalTotalFee }: SavingGoalItemProps) => {
    const [editSavingModal, setEditSavingModal] = useState(false)

    if (editSavingModal) {
        return <>
            <div id='savingGoalItemEditModalContainer'>
                <div id='savingGoalItemEditModalContent'>
                    <button id='savingGoalEditCloseModalButton' onClick={() => {
                        setEditSavingModal(false)
                    }}>
                        <img src={xIconWhite} alt="close edit saving" />
                    </button>

                    <form action="" id="savingGoalItemEditModalContentForm">
                        <h3>Edit Saving</h3>

                        <div className="editGoalInputTextContainer">
                            <label htmlFor="">Saving name</label>
                            <input type="text" placeholder="Enter saving name" value={goalTitle} />
                        </div>

                        <div id='EditModalButtonsContainer'>
                            <button id='addMonthlySavingButton'>Add Monthly Saving</button>
                            <button id='deleteSavingButton'>Delete Saving</button>
                        </div>
                    </form>


                </div>
            </div>

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
    } else {
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

                    <button onClick={() => { setEditSavingModal(true) }}>Edit</button>
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
}