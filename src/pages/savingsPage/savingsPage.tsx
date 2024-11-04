import './savingsPage.css'

//Import Components
import Nav from '../../components/Nav/Nav'
import { GeneralSavings } from '../../components/savingsPageComponents/GeneralSavings/GeneralSavings'
import { CategorySavings, savingItemType } from '../../components/savingsPageComponents/CategorySavings/CategorySavings'
import { SavingsGoals } from '../../components/savingsPageComponents/SavingsGoals/SavingsGoals'
import { SavingsHistory } from '../../components/savingsPageComponents/SavingsHistory/SavingsHistory'
import { SavingGoalItemProps } from '../../components/savingsPageComponents/SavingGoalItem/SavingGoalItem'

//Import images
import fireIconWhite from '../../assets/svg/fireIconWhite.svg'
import planetIconBlack from '../../assets/svg/planetIconBlack.svg'
import KeyIconWhite from '../../assets/svg/KeyIconWhite.svg'

//Savings Data

const savingsData: Array<savingType> = [
    {
        savingName: "Party", savingValue: 40, savingColor: "#2D18BF", savingPercentage: "40%", savingImage: fireIconWhite, monthlySaving: 50000, savingActualFee: 100000, savingTotalFee: 600000,
        savingHistory: [
            {
                date: 'Miercoles 04 de Septiembre',
                deposit: 50000
            },
            {
                date: 'Domingo 04 de Agosto',
                deposit: 50000
            }
        ]
    },
    {
        savingName: "Trip", savingValue: 28, savingColor: "#A8F25D", savingPercentage: "28%", savingImage: planetIconBlack, monthlySaving: 20000, savingActualFee: 40000, savingTotalFee: 480000,
        savingHistory: [
            {
                date: 'Lunes 02 de Septiembre',
                deposit: 20000
            },
            {
                date: 'Sabado 03 de Agosto',
                deposit: 20000
            },
        ]
    },
    {
        savingName: "Motorbike", savingValue: 27, savingColor: "#F2622E", savingPercentage: "27%", savingImage: KeyIconWhite, monthlySaving: 100000, savingActualFee: 400000, savingTotalFee: 1000000,
        savingHistory: [
            {
                date: 'Miercoles 04 de Agosto',
                deposit: 100000
            },
        ]
    },
    {
        savingName: "Others", savingValue: 5, savingColor: "#C4C4C4", savingPercentage: "5%",
        savingImage: '',
        monthlySaving: 0,
        savingActualFee: 0,
        savingTotalFee: 0,
        savingHistory: []
    }
]

export interface savingType {
    savingName: string,
    savingValue: number,
    savingColor: string,
    savingPercentage: string,
    savingImage: string,
    monthlySaving: number,
    savingActualFee: number,
    savingTotalFee: number,
    savingHistory: Array<savingHistoryType>
}

export interface savingHistoryType {
    date: string,
    deposit: number
}


export const SavingsPage = () => {
    const chartData: Array<savingItemType> = []
    const savingsGoalsData: Array<SavingGoalItemProps> = []

    savingsData.forEach((saving) => {
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


    return <>
        <main className='page'>

            <div id='marginPage'>
                <div id='TitleTextContainer'>
                    <h1>Savings</h1>
                </div>

                <div id='ContentContainerSavings'>
                    <Nav></Nav>

                    <div id='SavingsCardsContainer'>
                        <div id='leftCardsContainer'>
                            <div id='summarySavingsContainer'>
                                <GeneralSavings valueIncome={70} valueSavings={30} incomePercentage={'70%'} savingsPercentage={'30%'}></GeneralSavings>

                                <CategorySavings chartData={chartData}></CategorySavings>

                            </div>

                            <SavingsGoals savingsGoalsItemsArray={savingsGoalsData}></SavingsGoals>

                        </div>

                        <SavingsHistory savingsData={savingsData}></SavingsHistory>

                    </div>
                </div>
            </div>

            <div id='backgroundSavings'>

            </div>
        </main>

    </>
}