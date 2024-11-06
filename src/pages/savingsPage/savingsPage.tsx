import './savingsPage.css'

//Import Components
import { GlobalAppNav } from '../../components/Nav/Nav'
import { GeneralSavings } from '../../components/savingsPageComponents/GeneralSavings/GeneralSavings'
import { CategorySavings, savingItemType } from '../../components/savingsPageComponents/CategorySavings/CategorySavings'
import { SavingsGoals } from '../../components/savingsPageComponents/SavingsGoals/SavingsGoals'
import { SavingsHistory } from '../../components/savingsPageComponents/SavingsHistory/SavingsHistory'
import { SavingGoalItemProps } from '../../components/savingsPageComponents/SavingGoalItem/SavingGoalItem'

import { useDispatch, useSelector } from 'react-redux'
import { savingSliceType } from '../../store/savings/types'
import { AddSavingGoalModal } from '../../components/savingsPageComponents/AddSavingGoalModal/AddSavingGoalModal'
import { changeUserExpGained } from '../../store/rewards/slice'
import { rewardsSliceType } from '../../store/rewards/types'


export const SavingsPage = () => {

    const addSavingModalBoolean: savingSliceType = useSelector((state) => state.global.addSavingModal)
    const savingsData: savingSliceType = useSelector((state) => state.savings)
    //Pruebas redux

    //const dispatch = useDispatch()

    //const rewardsData: rewardsSliceType = useSelector((state) => state.rewards)

    //Pruebas redux

    const chartData: Array<savingItemType> = []
    const savingsGoalsData: Array<SavingGoalItemProps> = []

    savingsData.savingsData.forEach((saving) => {
        chartData.push({
            savingName: saving.savingName,
            savingValue: saving.savingValue,
            fill: saving.savingColor,
            percentage: saving.savingPercentage
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
            <main className='page'>

                <AddSavingGoalModal></AddSavingGoalModal>

                <div id='marginPage'>
                    <div id='TitleTextContainer'>
                        <h1
                            onClick={() => {
                                console.log("Prueba")
                            }}
                        >Savings</h1>
                    </div>

                    <div id='ContentContainerSavings'>
                        <GlobalAppNav></GlobalAppNav>

                        <div id='SavingsCardsContainer'>
                            <div id='leftCardsContainer'>
                                <div id='summarySavingsContainer'>
                                    <GeneralSavings valueIncome={70} valueSavings={30} incomePercentage={'70%'} savingsPercentage={'30%'}></GeneralSavings>

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
            <main className='page'>

                <div id='marginPage'>
                    <div id='TitleTextContainer'>
                        <h1
                            onClick={() => {
                                console.log("Prueba")
                            }}
                        >Savings</h1>
                    </div>

                    <div id='ContentContainerSavings'>
                        <GlobalAppNav></GlobalAppNav>

                        <div id='SavingsCardsContainer'>
                            <div id='leftCardsContainer'>
                                <div id='summarySavingsContainer'>
                                    <GeneralSavings valueIncome={70} valueSavings={30} incomePercentage={'70%'} savingsPercentage={'30%'}></GeneralSavings>

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
    }


}