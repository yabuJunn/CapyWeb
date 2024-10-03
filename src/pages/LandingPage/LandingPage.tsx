import './LandingPage.css'

//Import components

import { NavLanding } from '../../components/NavLanding/NavLanding'
import { LandingFirstSectionButtons } from '../../components/LandingFirstSectionButtons/LandingFirstSectionButtons'
import { UniqueFeatureCard } from '../../components/uniqueFeatureCard/uniqueFeatureCard'

//Import images

import arrowDownWhite from '../../assets/svg/arrowDownWhite.svg'
import landingSecondSectionMockups from '../../assets/png/mockupsCapyPc.jpg'

import logoBancolombia from '../../assets/svg/logo/logoBancolombia.svg'
import logoNequi from '../../assets/svg/logo/logoNequi.svg'
import logoVisa from '../../assets/svg/logo/logoVisa.svg'
import logoBBVA from '../../assets/svg/logo/logoBBVA.svg'
import logoFalabella from '../../assets/svg/logo/logoFalabella.svg'
import logoNu from '../../assets/svg/logo/logoNu.svg'

import backgroundFeature1 from '../../assets/png/features1.png'
import backgroundFeature2 from '../../assets/png/features2.png'
import backgroundFeature3 from '../../assets/png/features3.png'
import backgroundFeature4 from '../../assets/png/features4.png'

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

            <section id='fourthSection'>
                <h2>Unique features</h2>
                <p id='subTitle'>Discover a range of innovative tools designed to simplify financial planning. From personalized dashboards to interactive visualizations, our app helps you manage your finances effortlessly and effectively.</p>
                <div className='featuresRow'>
                    <UniqueFeatureCard
                        text={'Capy, your friendly finance assistant, helps you navigate the app with tips, guidance, and insights to improve your financial planning and decision-making.'}
                        title={'Interactive mascot'}
                        textColor={'#FFFFFF'}
                        backgroundImage={backgroundFeature1}
                    >

                    </UniqueFeatureCard>

                    <UniqueFeatureCard
                        text={'Dynamic charts and graphs throughout the app provide clear, real-time insights, making it easier to understand and manage your finances effectively.'}
                        title={'Interactive data visualization'}
                        textColor={'#FFFFFF'}
                        backgroundImage={backgroundFeature2}
                    >

                    </UniqueFeatureCard>
                </div>

                <div className='featuresRow'>
                    <UniqueFeatureCard
                        text={'An interactive dashboard grid lets you customize your financial data display, tailoring the experience to suit your personal preferences and needs.'}
                        title={'Experience personalization'}
                        textColor={'#21147A'}
                        backgroundImage={backgroundFeature3}
                    >

                    </UniqueFeatureCard>

                    <UniqueFeatureCard
                        text={'Easily track and plan your income and expenses, helping you stay on top of your finances and reach your financial goals.'}
                        title={'Income and expense planner'}
                        textColor={'#21147A'}
                        backgroundImage={backgroundFeature4}
                    >

                    </UniqueFeatureCard>
                </div>
            </section>

            <div id='background'>

            </div>
        </main>
    </>
}