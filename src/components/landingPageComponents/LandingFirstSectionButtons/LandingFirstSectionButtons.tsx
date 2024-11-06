import './LandingFirstSectionButtons.css'

import { useNavigate } from 'react-router-dom'

export const LandingFirstSectionButtons = () => {
    const navigate = useNavigate()

    const handleNavigateRegister = () => {
        navigate('/register')
    }

    const handleNavigateLogin = () => {
        navigate('/login')
    }

    return <>
        <div id="LoginRegisterButtonsContainer">
            <button id="createAccountButton" onClick={handleNavigateRegister}>Create Account</button>
            <button id="logInButton" onClick={handleNavigateLogin}>Log in</button>
        </div>
    </>
}