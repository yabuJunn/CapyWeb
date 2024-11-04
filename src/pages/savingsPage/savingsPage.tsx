import './savingsPage.css'

//Import Components
import Nav from '../../components/Nav/Nav'
import { GeneralSavings } from '../../components/savingsPageComponents/GeneralSavings/GeneralSavings'
import { CategorySavings } from '../../components/savingsPageComponents/CategorySavings/CategorySavings'
import { SavingsGoals } from '../../components/savingsPageComponents/SavingsGoals/SavingsGoals'
import { SavingsHistory } from '../../components/savingsPageComponents/SavingsHistory/SavingsHistory'

export const SavingsPage = () => {

    return <>
        <main className='page'>

            <div id='marginPage'>
                <div id='TitleTextContainer'>
                    <h1>Savings</h1>
                </div>

                <div id='ContentContainer'>
                    <Nav></Nav>

                    <div id='SavingsCardsContainer'>
                        <div id='leftCardsContainer'>
                            <div id='summarySavingsContainer'>
                                <GeneralSavings valueIncome={70} valueSavings={30} incomePercentage={'70%'} savingsPercentage={'30%'}></GeneralSavings>

                                <CategorySavings chartData={[
                                    { savingName: "Party", savingValue: 40, fill: "#2D18BF", percentage: "40%" },
                                    { savingName: "Trip", savingValue: 28, fill: "#A8F25D", percentage: "28%" },
                                    { savingName: "Motorbike", savingValue: 27, fill: "#F2622E", percentage: "27%" },
                                    { savingName: "Others", savingValue: 5, fill: "#C4C4C4", percentage: "5%" },
                                ]}></CategorySavings>

                            </div>

                            <SavingsGoals></SavingsGoals>

                        </div>

                        <SavingsHistory></SavingsHistory>

                    </div>
                </div>
            </div>

            <div id='background'>

            </div>
        </main>

    </>
}