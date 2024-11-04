import './Dashboard.css'

//Import Components
import Nav from '../../components/Nav/Nav'
import { InteractiveGrid } from '../../components/dashboardPageComponents/InteractiveGrid/InteractiveGrid'

export const Dashboard = () => {
    const userData = sessionStorage.getItem('userData')

    if (userData) {
        const userDataJSON = JSON.parse(userData)
        console.log(userDataJSON)


        return <>
            <main className='page'>

                <div id='marginPage'>
                    <div id='TitleTextContainer'>
                        <h1>Dashboard</h1>
                        <p><span className='TextHint'>Hola,</span> {userDataJSON.data.name}</p>
                    </div>

                    <div id='ContentContainer'>
                        <Nav></Nav>

                        <InteractiveGrid></InteractiveGrid>
                    </div>
                </div>

                <div id='background1'>

                </div>
            </main>
        </>
    }
}