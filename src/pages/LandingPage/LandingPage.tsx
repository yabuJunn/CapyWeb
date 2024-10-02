import './LandingPage.css'

//Import components

import { NavLanding } from '../../components/NavLanding/NavLanding'
import { LandingFirstSectionButtons } from '../../components/LandingFirstSectionButtons/LandingFirstSectionButtons'

//Import images

import arrowDownWhite from '../../assets/svg/arrowDownWhite.svg'
import landingSecondSectionMockups from '../../assets/png/mockupsCapyPc.jpg'

export const LandingPage = () => {
    return <>
        <main className='page'>
            <section id='firstSection'>
                <NavLanding></NavLanding>
                <h1>Lorem ipsum dolor sit amet, consectetur.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis efficitur arcu libero, vel condimentum neque aliquam vitae. Duis a imperdiet eros. Pellentesque id ante ac velit porta hendrerit vel vel erat. Mauris sit amet lacus tortor.</p>
                <LandingFirstSectionButtons></LandingFirstSectionButtons>
                <img src={arrowDownWhite} alt="" id='arrowDownWhite'/>
            </section>

            <section id='secondSection'>
                <img src={landingSecondSectionMockups} alt="" />
            </section>

            <div id='background'>

            </div>
        </main>
    </>
}