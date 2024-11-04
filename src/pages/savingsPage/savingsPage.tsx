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
                                <GeneralSavings></GeneralSavings>

                                <CategorySavings></CategorySavings>

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