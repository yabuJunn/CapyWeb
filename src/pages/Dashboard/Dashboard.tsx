import './Dashboard.css'

//Import Components
import Nav from '../../components/Nav/Nav'

export const Dashboard = () => {
    return <>
        <main className='page'>
            <div id='TitleTextContainer'>
                <h1>Dashboard</h1>
                <p>Hola, Isabella</p>
            </div>

            <div id='ContentContainer'>
                <Nav></Nav>
            </div>

            <div id='background '>

            </div>
        </main>


    </>
}