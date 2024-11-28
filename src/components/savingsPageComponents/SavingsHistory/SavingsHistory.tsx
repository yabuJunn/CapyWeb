import './SavingsHistory.css'

import { SavingHistoryItem } from '../SavingHistoryItem/SavingHistoryItem'
import { savingEnum, savingType } from '../../../store/savings/types'

import fireIconWhite from '../../../assets/desktop/svg/fireIconWhite.svg'
import planetIconBlack from '../../../assets/desktop/svg/planetIconBlack.svg'
import KeyIconWhite from '../../../assets/desktop/svg/KeyIconWhite.svg'

interface SavingsHistoryProps {
    savingsData: Array<savingType>
}

export const SavingsHistory = ({ savingsData }: SavingsHistoryProps) => {
    return (
        <div id="savingsHistoryContainer">
            <h3>Savings History</h3>
            <div id="savingsHistoryItemsContainer">
                {savingsData.map((savingItem) => (
                    savingItem.savingHistory.map((savingItemHistoryItem) => {
                        switch (savingItem.savingImage) {
                            case savingEnum.fire:
                                return <SavingHistoryItem
                                    key={`${savingItem.savingName}-${savingItemHistoryItem.date.toDate().getMonth()}-${savingItemHistoryItem.date.toDate().getMilliseconds()}`}
                                    savingHistoryImage={fireIconWhite}
                                    savingHistoryColor={savingItem.savingColor}
                                    savingHistoryTitle={savingItem.savingName}
                                    savingHistoryDate={savingItemHistoryItem.date.toDate().toLocaleDateString()}
                                    savingHistoryDeposit={savingItemHistoryItem.deposit}
                                />
                            case savingEnum.globe:
                                return <SavingHistoryItem
                                    key={`${savingItem.savingName}-${savingItemHistoryItem.date.toDate().getMonth()}-${savingItemHistoryItem.date.toDate().getMilliseconds()}`}
                                    savingHistoryImage={planetIconBlack}
                                    savingHistoryColor={savingItem.savingColor}
                                    savingHistoryTitle={savingItem.savingName}
                                    savingHistoryDate={savingItemHistoryItem.date.toDate().toLocaleDateString()}
                                    savingHistoryDeposit={savingItemHistoryItem.deposit}
                                />
                            case savingEnum.key:
                                return <SavingHistoryItem
                                    key={`${savingItem.savingName}-${savingItemHistoryItem.date.toDate().getMonth()}-${savingItemHistoryItem.date.toDate().getMilliseconds()}`}
                                    savingHistoryImage={KeyIconWhite}
                                    savingHistoryColor={savingItem.savingColor}
                                    savingHistoryTitle={savingItem.savingName}
                                    savingHistoryDate={savingItemHistoryItem.date.toDate().toLocaleDateString()}
                                    savingHistoryDeposit={savingItemHistoryItem.deposit}
                                />
                            default:
                                break;
                        }

                    })
                ))}
            </div>
        </div>
    )
}
