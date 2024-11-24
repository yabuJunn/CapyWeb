import React from 'react';
import './principalContent.css';
import uploadIcon from '../../../assets/desktop/svg/uploadIcon.svg';
import userImageIcon from '../../../assets/desktop/svg/userImageIcon.svg';

// Definir las props
interface PrincipalContentProps {
  userName: string;
  email: string;
}

export const PrincipalContent: React.FC<PrincipalContentProps> = ({
  userName,
  email,
}) => {
  return (
    <main className="settingsPage">
      <section className="inputsSection">
        <div className="inputRow">
          <div className="inputGroup">
            <label htmlFor="username" className="inputLabel">
              User
            </label>
            <input
              id="username"
              className="inputField"
              type="text"
              defaultValue={userName}
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="email" className="inputLabel">
              Email Address
            </label>
            <input
              id="email"
              className="inputField"
              type="email"
              defaultValue={email}
            />
          </div>
        </div>
        {/* El resto del contenido sigue igual */}
      </section>
    </main>
  );
};
