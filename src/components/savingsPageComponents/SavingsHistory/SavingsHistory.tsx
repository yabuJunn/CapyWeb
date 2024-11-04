import './SavingsHistory.css'

import fireIconWhite from '../../../assets/svg/fireIconWhite.svg'

export const SavingsHistory = () => {
    return <>
        <div id='savingsHistoryContainer'>
            <h3>Savings History</h3>
            <div id='savingsHistoryItemsContainer'>
                <div className='savingsHistoryItem'>
                    <div className='savingsHistoryItemTitle'>
                        <img src={fireIconWhite} alt="" style={{ backgroundColor: '#2D18BF' }} />
                        <div className='savingsHistoryItemTitleText'>
                            <h4>My Party</h4>
                            <p>Savings per month: $50,000 cop</p>
                        </div>
                    </div>

                    <p className='savingsHistoryItemAmount'>$50,000</p>
                </div>
            </div>
        </div>
    </>
}