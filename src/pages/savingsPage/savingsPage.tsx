import './savingsPage.css'

//Import Components
import Nav from '../../components/Nav/Nav'

//Import Imagenes

export const SavingsPage = () => {

    return <>
        <main className='page'>

            <div id='marginPage'>
                <div id='TitleTextContainer'>
                    <h1>Ahorros</h1>
                </div>

                <div id='ContentContainer'>
                    <Nav></Nav>

                    <div id='SavingsCardsContainer'>
                        <div id='leftCardsContainer'>
                            <div id='summarySavingsContainer'>
                                <div id='generalSavings'>

                                </div>

                                <div id='categorySavings'>

                                </div>
                            </div>

                            <div id='savingsGoalsContainer'>

                            </div>
                        </div>

                        <div id='savingsHistoryContainer'>

                        </div>
                    </div>
                </div>
            </div>

            <div id='background'>

            </div>
        </main>

    </>
}