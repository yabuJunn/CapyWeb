import './Dashboard.css'

//Import Components
import { GlobalAppNav } from '../../components/Nav/Nav'
import { InteractiveGrid } from '../../components/dashboardPageComponents/InteractiveGrid/InteractiveGrid'
import { RootState } from '../../store/store'
import { getUser } from '../../services/Firebase/FirestoreUsers'
import { useDispatch, useSelector } from 'react-redux'
import { changeUserEmail, changeUserName, changeUserUID } from '../../store/userData/slice'

export const Dashboard = () => {
    const sessionStorageUserUID = sessionStorage.getItem('userUID')

    const userDataRedux = useSelector((state: RootState) => state.userData)
    const dispatch = useDispatch()

    const fetchUserData = async (sessionStorageUserUID: string) => {

        const userData = await getUser(sessionStorageUserUID)
        console.log(userData)

        sessionStorage.setItem('userUID', sessionStorageUserUID)

        if (userData) {
            dispatch(changeUserName(userData.name))
            dispatch(changeUserEmail(userData.email))
            dispatch(changeUserUID(userData.userUID))
            if (userData) {
                dispatch(changeUserName(userData.name))
                dispatch(changeUserEmail(userData.email))
                dispatch(changeUserUID(userData.userUID))

            } else {
                alert("userData is undefined")
            }
        }
    }

    if (userDataRedux.userName === "" && sessionStorageUserUID !== null) {
        fetchUserData(sessionStorageUserUID)
    }

    return <>
        <main className='page' id='dashboardPage'>

            <div id='marginPage'>
                <GlobalAppNav></GlobalAppNav>

                <div id='ContentContainerDashboard'>
                    <div id='TitleTextContainer'>
                        <h1>Dashboard</h1>
                        <p><span className='TextHint'>Hola,</span> {userDataRedux.userName}</p>
                    </div>


                    <InteractiveGrid></InteractiveGrid>
                </div>


            </div>

            <div id='backgroundDashboard' className='backgroundPage'>

            </div>
        </main >
    </>
}
