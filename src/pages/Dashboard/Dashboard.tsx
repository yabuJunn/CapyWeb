import './Dashboard.css'

//Import Components
import { GlobalAppNav } from '../../components/Nav/Nav'
import { InteractiveGrid } from '../../components/dashboardPageComponents/InteractiveGrid/InteractiveGrid'
import { RootState } from '../../store/store'
import { getRealUser } from '../../services/Firebase/FirestoreUsers'
import { useDispatch, useSelector } from 'react-redux'
import { changeUserEmail, changeUserName, changeUserUID } from '../../store/userData/slice'
import { useEffect } from 'react'
import { NavigationHook } from '../../hooks/navigationHook'

export const Dashboard = () => {
    const { handleNavigation } = NavigationHook()

    const sessionStorageUserUID = sessionStorage.getItem('userUID')

    const userDataRedux = useSelector((state: RootState) => state.userData)
    const dispatch = useDispatch()

    // useEffect(() => {
    //     const registrarUsuarioPrueba = async () => {
    //         const pruebaUserData = await getRealUser('zTOoG8Hr8fUsbxZfQb4GrZlRJu22')

    //         if (pruebaUserData) {
    //             console.log('pruebaUserData: ', pruebaUserData);
    //         }
    //     };

    //     registrarUsuarioPrueba()
    // })

    useEffect(() => {
        if (!sessionStorageUserUID) {
            handleNavigation.navigateToLogin()
        } else if (sessionStorageUserUID !== null) {

            const fetchDataAndDispatch = async () => {
                const userDataFirebase = await getRealUser(sessionStorageUserUID);

                if (userDataFirebase) {
                    dispatch(changeUserName(userDataFirebase.name));
                    dispatch(changeUserEmail(userDataFirebase.email));
                    dispatch(changeUserUID(userDataFirebase.userUID));
                } else {
                    alert("userData is undefined");
                }
            };

            fetchDataAndDispatch();
        }
    }, [dispatch, sessionStorageUserUID, userDataRedux.userName]);

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
