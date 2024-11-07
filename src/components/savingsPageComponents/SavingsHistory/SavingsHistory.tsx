import './SavingsHistory.css'

import { SavingHistoryItem } from '../SavingHistoryItem/SavingHistoryItem'
import { savingType } from '../../../store/savings/types'

interface SavingsHistoryProps {
    savingsData: Array<savingType>
}

export const SavingsHistory = ({ savingsData }: SavingsHistoryProps) => {
    return (
        <div id="savingsHistoryContainer">
            <h3>Savings History</h3>
            <div id="savingsHistoryItemsContainer">
                {savingsData.map((savingItem) => (
                    savingItem.savingHistory.map((savingItemHistoryItem) => (
                        <SavingHistoryItem
                            key={`${savingItem.savingName}-${savingItemHistoryItem.date}`}
                            savingHistoryImage={savingItem.savingImage}
                            savingHistoryColor={savingItem.savingColor}
                            savingHistoryTitle={savingItem.savingName}
                            savingHistoryDate={savingItemHistoryItem.date}
                            savingHistoryDeposit={savingItemHistoryItem.deposit}
                        />
                    ))
                ))}
            </div>
        </div>
    )
}