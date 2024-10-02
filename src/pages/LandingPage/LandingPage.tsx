import './LandingPage.css'

//Import components

import { NavLanding } from '../../components/NavLanding/NavLanding'
import { LandingFirstSectionButtons } from '../../components/LandingFirstSectionButtons/LandingFirstSectionButtons'

//Import images

import arrowDownWhite from '../../assets/svg/arrowDownWhite.svg'
import landingSecondSectionMockups from '../../assets/png/mockupsCapyPc.jpg'

import logoBancolombia from '../../assets/svg/logo/logoBancolombia.svg'
import logoNequi from '../../assets/svg/logo/logoNequi.svg'
import logoVisa from '../../assets/svg/logo/logoVisa.svg'
import logoBBVA from '../../assets/svg/logo/logoBBVA.svg'
import logoFalabella from '../../assets/svg/logo/logoFalabella.svg'
import logoNu from '../../assets/svg/logo/logoNu.svg'

export const LandingPage = () => {
    return <>
        <main className='page'>
            <section id='firstSection'>
                <NavLanding></NavLanding>
                <h1>Lorem ipsum dolor sit amet, consectetur.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis efficitur arcu libero, vel condimentum neque aliquam vitae. Duis a imperdiet eros. Pellentesque id ante ac velit porta hendrerit vel vel erat. Mauris sit amet lacus tortor.</p>
                <LandingFirstSectionButtons></LandingFirstSectionButtons>
                <img src={arrowDownWhite} alt="" id='arrowDownWhite' />
            </section>

            <section id='secondSection'>
                <img src={landingSecondSectionMockups} alt="" />
            </section>

            <section id='thirdSection'>
                <h2>Endless connections</h2>
                {/* Component of carrousel */}
                <div className="wrapper">
                    <div className="itemLeft item1" id='bancolombia'>
                        <img src={logoBancolombia} alt="" className='itemRightImg' />
                    </div>
                    <div className="itemLeft item2">
                        <img src={logoNequi} alt="" />
                    </div>
                    <div className="itemLeft item3">
                        <img src={logoVisa} alt="" />
                    </div>
                    <div className="itemLeft item4">
                        <img src={logoBBVA} alt="" />
                    </div>
                    <div className="itemLeft item5">
                        <img src={logoFalabella} alt="" />
                    </div>
                    <div className="itemLeft item6">
                        <img src={logoNu} alt="" />
                    </div>
                    <div className="itemLeft item7">
                        <img src={logoVisa} alt="" />
                    </div>
                </div>
                <div className="wrapper">
                    <div className="itemRight item1" id='bancolombia'>
                        <img src={logoBancolombia} alt="" className='itemRightImg' />
                    </div>
                    <div className="itemRight item2">
                        <img src={logoNequi} alt="" />
                    </div>
                    <div className="itemRight item3">
                        <img src={logoVisa} alt="" />
                    </div>
                    <div className="itemRight item4">
                        <img src={logoBBVA} alt="" />
                    </div>
                    <div className="itemRight item5">
                        <img src={logoFalabella} alt="" />
                    </div>
                    <div className="itemRight item6">
                        <img src={logoNu} alt="" />
                    </div>
                    <div className="itemRight item7">
                        <img src={logoVisa} alt="" />
                    </div>
                </div>
                <div className="wrapper">
                    <div className="itemLeft item1" id='bancolombia'>
                        <img src={logoBancolombia} alt="" className='itemRightImg' />
                    </div>
                    <div className="itemLeft item2">
                        <img src={logoNequi} alt="" />
                    </div>
                    <div className="itemLeft item3">
                        <img src={logoVisa} alt="" />
                    </div>
                    <div className="itemLeft item4">
                        <img src={logoBBVA} alt="" />
                    </div>
                    <div className="itemLeft item5">
                        <img src={logoFalabella} alt="" />
                    </div>
                    <div className="itemLeft item6">
                        <img src={logoNu} alt="" />
                    </div>
                    <div className="itemLeft item7">
                        <img src={logoVisa} alt="" />
                    </div>
                </div>
            </section>

            <div id='background'>

            </div>
        </main>
    </>
}