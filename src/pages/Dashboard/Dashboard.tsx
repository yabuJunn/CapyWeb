import './Dashboard.css'

//Import Components
import { GlobalAppNav } from '../../components/Nav/Nav'
import { InteractiveGrid } from '../../components/dashboardPageComponents/InteractiveGrid/InteractiveGrid'
import { RootState } from '../../store/store'
import { getUser } from '../../services/Firebase/FirestoreUsers'
import { useDispatch, useSelector } from 'react-redux'
import { changeUserEmail, changeUserName, changeUserUID } from '../../store/userData/slice'
import { useEffect } from 'react'
import { DocumentData } from 'firebase/firestore'

export const Dashboard = () => {
    const sessionStorageUserUID = sessionStorage.getItem('userUID')

    const userDataRedux = useSelector((state: RootState) => state.userData)
    const dispatch = useDispatch()



    useEffect(() => {
        if (userDataRedux.userName === "" && sessionStorageUserUID !== null) {
            const fetchUserData = async (sessionStorageUserUID: string) => {
                const userData = await getUser(sessionStorageUserUID);
                return userData;
            };

            const fetchDataAndDispatch = async () => {
                const userDataFirebase: DocumentData | undefined = await fetchUserData(sessionStorageUserUID);
                sessionStorage.setItem('userUID', sessionStorageUserUID);

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
