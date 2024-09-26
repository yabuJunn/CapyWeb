import { useNavigate } from 'react-router-dom'
import './LandingPage.css'

export const LandingPage = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/login')
    }

    return <>
        <main className='page'>
            <h1 onClick={() => { handleClick() }}>Landing Page</h1>

            <div id='background'>

            </div>
        </main>
    </>
}