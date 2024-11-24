import React from 'react';
import './generalContent.css';
import noviceIcon from '../../../assets/desktop/svg/noviceIcon.svg'


export const GeneralContent = () => {
    
    return (
        <main >
        <div className='nameInfo'>
        <h2 className="name">Isabella Salazar </h2>
        <img src={noviceIcon} alt='' className="card-icon" />

        </div>
        <h3 className='email' >isasasalazar09@gmail.com </h3>
        <h2 className='capyOption'>Capy assistant </h2>

    
       
    </main>
    
    );
};
