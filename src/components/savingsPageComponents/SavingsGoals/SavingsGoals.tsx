import './SavingsGoals.css'

import fireIconWhite from '../../../assets/svg/fireIconWhite.svg'

import { Progress } from '../../../components/ui/progress'

export const SavingsGoals = () => {

    return <>
        <div id='savingsGoalsContainer'>
            <div id='savingsGoalsHeader'>
                <h3>Savings Goals</h3>
                <button>Create savings goal</button>
            </div>

            <div id='savingsGoalsListContainer'>
                <div className='savingGoalItem'>
                    <div className='savingGoalHeader'>
                        <div className='savingGoalTitle'>
                            <img src={fireIconWhite} alt="" style={{ backgroundColor: '#2D18BF' }} />
                            <div className='savingGoalTitleText'>
                                <h4>My Party</h4>
                                <p>Savings per month: $50,000 cop</p>
                            </div>
                        </div>

                        <button>
                            Edit
                        </button>
                    </div>

                    <div className='savingGoalGraphContainer'>
                        <div className='savingGoalGraphLabels'>
                            <p>$100,000 cop</p>
                            <p>Goal: $600,000 cop</p>
                        </div>
                        <Progress value={30} className="w-[90%] h-[4vh]" style={{ border: '3px white solid' }}></Progress>
                    </div>
                </div>

                <div className='savingGoalItem'>
                    <div className='savingGoalHeader'>
                        <div className='savingGoalTitle'>
                            <img src={fireIconWhite} alt="" style={{ backgroundColor: '#2D18BF' }} />
                            <div className='savingGoalTitleText'>
                                <h4>My Party</h4>
                                <p>Savings per month: $50,000 cop</p>
                            </div>
                        </div>

                        <button>
                            Edit
                        </button>
                    </div>

                    <div className='savingGoalGraphContainer'>
                        <div className='savingGoalGraphLabels'>
                            <p>$100,000 cop</p>
                            <p>Goal: $600,000 cop</p>
                        </div>
                        <Progress value={30} className="w-[90%] h-[4vh]" style={{ border: '3px white solid' }}></Progress>
                    </div>
                </div>
            </div>
        </div>
    </>
}