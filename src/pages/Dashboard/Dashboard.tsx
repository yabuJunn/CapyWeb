import './Dashboard.css'

//Import Components
import { GlobalAppNav } from '../../components/Nav/Nav'
import { InteractiveGrid } from '../../components/dashboardPageComponents/InteractiveGrid/InteractiveGrid'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { getUser } from '../../services/Firebase/FirestoreUsers'
import { changeUserEmail, changeUserName, changeUserUID } from '../../store/userData/slice'

export const Dashboard = () => {
    const sessionStorageUserUID = sessionStorage.getItem('userUID')

    const userDataData = useSelector((state: RootState) => state.userData)
    const dispatch = useDispatch()

    if (userDataData.userName === "" && sessionStorageUserUID !== null) {
        const prueba = async () => {
            const userData = await getUser(sessionStorageUserUID)
            console.log(userData)

            sessionStorage.setItem('userUID', sessionStorageUserUID)

            if (userData) {
                dispatch(changeUserName(userData.name))
                dispatch(changeUserEmail(userData.email))
                dispatch(changeUserUID(userData.userUID))

            } else {
                alert("userData is undefined")
            }
        }
        prueba()
    }

    return <>
        <main className='page' id='dashboardPage'>

            <div id='marginPage'>
                <GlobalAppNav></GlobalAppNav>

                <div id='ContentContainerDashboard'>
                    <div id='TitleTextContainer'>
                        <h1>Dashboard</h1>
                        <p><span className='TextHint'>Hola,</span> {userDataData.userName}</p>
                    </div>


                    <InteractiveGrid></InteractiveGrid>
                </div>
            </div>

            <div id='backgroundDashboard'>

            </div>
        </main>
    </>
}
