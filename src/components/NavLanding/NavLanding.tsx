import './navLanding.css'

import logoComplete from '../../assets/svg/logoComplete.svg'

export const NavLanding = () => {
    return <>
        <nav id='navLandingContainer'>
            <img src={logoComplete} alt="" />

            <div id='navLandingSections'>
                <p>Features</p>
                <p>Connections</p>
                <p>Reviews</p>
            </div>
        </nav>
    </>
}