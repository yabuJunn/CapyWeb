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

                    <div id='cardsContainer'>
                        <div id='leftCards'>

                        </div>
                            
                        <div id='rigthCards'>

                        </div>
                    </div>
                </div>
            </div>

            <div id='background'>

            </div>
        </main>

    </>
}