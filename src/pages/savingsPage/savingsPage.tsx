import './savingsPage.css'

//Import Components
import { GlobalAppNav } from '../../components/Nav/Nav'
import { GeneralSavings } from '../../components/savingsPageComponents/GeneralSavings/GeneralSavings'
import { CategorySavings, savingItemType } from '../../components/savingsPageComponents/CategorySavings/CategorySavings'
import { SavingsGoals } from '../../components/savingsPageComponents/SavingsGoals/SavingsGoals'
import { SavingsHistory } from '../../components/savingsPageComponents/SavingsHistory/SavingsHistory'
import { SavingGoalItemProps } from '../../components/savingsPageComponents/SavingGoalItem/SavingGoalItem'

import { useSelector } from 'react-redux'
import { AddSavingGoalModal } from '../../components/savingsPageComponents/AddSavingGoalModal/AddSavingGoalModal'
import { RootState } from '../../store/store'
// import { changeUserExpGained } from '../../store/rewards/slice'
// import { rewardsSliceType } from '../../store/rewards/types'
// import { addIncome } from '../../store/incomes/slice'

export const SavingsPage = () => {

    const addSavingModalBoolean: boolean = useSelector((state: RootState) => state.global.addSavingModal);
    const savingsData = useSelector((state: RootState) => state.savings)
    const userDataData = useSelector((state: RootState) => state.userData)

    let savingDataTotalValue = 0
    savingsData.savingsData.forEach((saving) => {
        saving.savingHistory.forEach((savingHistory) => {
            savingDataTotalValue = savingDataTotalValue + savingHistory.deposit
        })
    })

    const valueSavingsPercentage = (100 * savingDataTotalValue / userDataData.totalIncome)

    const chartData: Array<savingItemType> = []
    const savingsGoalsData: Array<SavingGoalItemProps> = []

    savingsData.savingsData.forEach((saving) => {
        chartData.push({
            savingName: saving.savingName,
            savingValue: (100 * saving.savingValue) / savingDataTotalValue,
            fill: saving.savingColor,
            percentage: (100 * saving.savingValue) / savingDataTotalValue
        })

        if (saving.savingName !== 'Others') {
            savingsGoalsData.push({
                goalImage: saving.savingImage,
                goalImageColor: saving.savingColor,
                goalTitle: saving.savingName,
                goalMonthlySaving: saving.monthlySaving,
                goalActualFee: saving.savingActualFee,
                goalTotalFee: saving.savingTotalFee
            })
        }
    })

    if (addSavingModalBoolean) {

        return <>
            <main className='page' id='savingPage'>

                <AddSavingGoalModal></AddSavingGoalModal>

                <div id='marginPageSavingPage'>
                    <div id='TitleTextContainer'>
                        <h1
                            onClick={() => {
                                //dispatch()
                            }}
                        >Savings</h1>
                    </div>

                    <div id='ContentContainerSavings'>
                        <GlobalAppNav></GlobalAppNav>

                        <div id='SavingsCardsContainer'>
                            <div id='leftCardsContainer'>
                                <div id='summarySavingsContainer'>
                                    <GeneralSavings valueIncome={100 - valueSavingsPercentage} valueSavings={valueSavingsPercentage} incomePercentage={100 - valueSavingsPercentage} savingsPercentage={valueSavingsPercentage}></GeneralSavings>

                                    <CategorySavings chartData={chartData}></CategorySavings>

                                </div>

                                <SavingsGoals savingsGoalsItemsArray={savingsGoalsData}></SavingsGoals>

                            </div>

                            <SavingsHistory savingsData={savingsData.savingsData}></SavingsHistory>

                        </div>
                    </div>
                </div>

                <div id='backgroundSavings'>

                </div>
            </main>

        </>
    } else {
        return <>
            <main className='page' id='savingPage'>

                <GlobalAppNav></GlobalAppNav>

                <div id='marginPageSavingPage'>
                    <div id='TitleTextContainer'>
                        <h1
                            onClick={() => {
                                console.log("Prueba")
                            }}
                        >Savings</h1>
                    </div>

                    <div id='ContentContainerSavings'>

                        <div id='SavingsCardsContainer'>
                            <div id='leftCardsContainer'>
                                <div id='summarySavingsContainer'>
                                    <GeneralSavings valueIncome={100 - valueSavingsPercentage} valueSavings={valueSavingsPercentage} incomePercentage={100 - valueSavingsPercentage} savingsPercentage={valueSavingsPercentage}></GeneralSavings>

                                    <CategorySavings chartData={chartData}></CategorySavings>

                                </div>

                                <SavingsGoals savingsGoalsItemsArray={savingsGoalsData}></SavingsGoals>

                            </div>

                            <SavingsHistory savingsData={savingsData.savingsData}></SavingsHistory>

                        </div>
                    </div>
                </div>

                <div id='backgroundSavings' className='backgroundPage'>

                </div>
            </main>

        </>
    }


}