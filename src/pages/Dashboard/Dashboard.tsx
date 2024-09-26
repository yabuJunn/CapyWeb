import './Dashboard.css'

//Import Components
import Nav from '../../components/Nav/Nav'

export const Dashboard = () => {
    return <>
        <main className='page'>

            <div id='marginPage'>
                <div id='TitleTextContainer'>
                    <h1>Dashboard</h1>
                    <p><span className='TextHint'>Hola,</span> Isabella</p>
                </div>

                <div id='ContentContainer'>
                    <Nav></Nav>

                    <div id='gridContainer'>

                    </div>
                </div>
            </div>

            <div id='background'>

            </div>
        </main>
    </>
}