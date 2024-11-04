import './Dashboard.css'

//Import Components
import { GlobalAppNav } from '../../components/Nav/Nav'
import { InteractiveGrid } from '../../components/dashboardPageComponents/InteractiveGrid/InteractiveGrid'

export const Dashboard = () => {
    const userData = sessionStorage.getItem('userData')

    if (userData) {
        const userDataJSON = JSON.parse(userData)
        console.log(userDataJSON)


        return <>
            <main className='page' id='dashboardPage'>

                <div id='marginPage'>
                    <GlobalAppNav></GlobalAppNav>

                    <div id='ContentContainerDashboard'>
                        <div id='TitleTextContainer'>
                            <h1>Dashboard</h1>
                            <p><span className='TextHint'>Hola,</span> {userDataJSON.data.name}</p>
                        </div>


                        <InteractiveGrid></InteractiveGrid>
                    </div>
                </div>

                <div id='backgroundDashboard'>

                </div>
            </main>
        </>
    }
}