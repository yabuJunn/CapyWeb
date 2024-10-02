import './LandingPage.css'

import { NavLanding } from '../../components/NavLanding/navLanding'

export const LandingPage = () => {
    return <>
        <main className='page'>
            <section id='firstSection'>
                <NavLanding></NavLanding>
            </section>
            <h1>Landing Page</h1>

            <div id='background'>

            </div>
        </main>
    </>
}