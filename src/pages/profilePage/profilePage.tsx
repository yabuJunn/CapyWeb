import React from 'react';
import './profilePage.css';
import { GlobalAppNav } from '../../components/Nav/Nav';
import { ProfileHeader } from '../../components/profilePageComponents/profileHeader/profileHeader';
import { GeneralContent } from '../../components/profilePageComponents/generalContent/generalContent';
import { PrincipalContent } from '../../components/profilePageComponents/principalContent/principalContent';
import userImageIcon from '../../assets/desktop/svg/userImageIcon.svg'



export const ProfilePage = () => {
    
    return (
        <main className="page" id="profilePage">
        <h1 id="principal">General settings</h1>
        <GlobalAppNav />
    
        <div className="contentWrapper">
            <div className="generalProfile">

                <ProfileHeader />
                <img src={userImageIcon} alt='' className="userImageIcon" />


                <div className='content'>
                    <div className='generalContent'>
                    <GeneralContent/>
                    </div>

                     <div className='principalContent'>
                     <PrincipalContent/>

                     </div>
                </div>

            </div>
            

        </div>
      

    
        <div id="profileBackground" className="backgroundPage"></div>
    </main>
    
    );
};
