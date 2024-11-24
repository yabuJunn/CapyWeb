import React from 'react';
import './generalContent.css';

interface GeneralContentProps {
  name: string;
  email: string;
  rank: string; 
}

export const GeneralContent: React.FC<GeneralContentProps> = ({ name, email, rank }) => {
  return (
    <div>
      <div className="nameInfo">
        <h2 className="name">{name}</h2>
        <p className='rango'>{rank}</p> 
      </div>
      <h3 className="email">{email}</h3>
      <h2 className="capyOption">Capy assistant</h2>
    </div>
  );
};
