import React from 'react';
import './profilePage.css';
import { GlobalAppNav } from '../../components/Nav/Nav';
import { ProfileHeader } from '../../components/profilePageComponents/profileHeader/profileHeader';
import { GeneralContent } from '../../components/profilePageComponents/generalContent/generalContent';
import { PrincipalContent } from '../../components/profilePageComponents/principalContent/principalContent';

export const ProfilePage = () => {
  // Datos que serían obtenidos, por ejemplo, desde Firebase
  const userData = {
    name: 'Isabella Salazar',
    email: 'isasasalazar09@gmail.com',
    role: 'Capy assistant',
    iconUrl: '', 
    userName: 'Isasalazar'
  };

  return (
    <main className="page" id="profilePage">
      <h1 id="principal">General settings</h1>
      <GlobalAppNav />

      <div className="contentWrapper">
        <div className="generalProfile">
          <ProfileHeader />

          <div className="content">
            <div className="generalContent">
              {/* Pasar las props requeridas */}
              <GeneralContent
                name={userData.name}
                email={userData.email}
                role={userData.role}
                iconUrl={userData.iconUrl}
              />
            </div>

            <div className="principalContent">
              {/* Ejemplo para PrincipalContent */}
              <PrincipalContent
                userName={userData.name}
                email={userData.email}
              />
            </div>
          </div>
        </div>
      </div>

      <div id="profileBackground" className="backgroundPage"></div>
    </main>
  );
};
