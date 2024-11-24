import React from 'react';
import './generalContent.css';
import noviceIcon from '../../../assets/desktop/svg/noviceIcon.svg';

interface GeneralContentProps {
  name: string;
  email: string;
  iconUrl?: string; 
}

export const GeneralContent: React.FC<GeneralContentProps> = ({
  name,
  email,
  iconUrl = noviceIcon,

}) => {

  return (
    <main>
      <div className="nameInfo">
        <h2 className="name">{name}</h2>
        <img src={iconUrl} alt="Icon" className="cardIcon" />
      </div>
      <h3 className="email">{email}</h3>
      <h2 className="capyOption">Capy assistant</h2>
    </main>
  );
};
