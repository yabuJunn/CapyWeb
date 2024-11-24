import React from 'react';
import './generalContent.css';
import noviceIcon from '../../../assets/desktop/svg/noviceIcon.svg';

interface GeneralContentProps {
  name: string;
  email: string;
}

export const GeneralContent: React.FC<GeneralContentProps> = ({
  name,
  email,

}) => {

  return (
    <div>
      <div className="nameInfo">
        <h2 className="name">{name}</h2>
        <p className='rango'>Novice</p>

      </div>
      <h3 className="email">{email}</h3>
      <h2 className="capyOption">Capy assistant</h2>
    </div>
  );
};
