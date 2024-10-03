import'./Savings.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import MoveButton from '../../assets/svg/MoveButton.svg';

export const Savings = () => {
  const ingresos = 78;

  return (
    <>
      <div className='savings'> 
        <img className="MoveButton" src={MoveButton} alt="MoveButton" />

        <div className="progress-wrapper">
          {/* Círculo de Ingresos */}
          <CircularProgressbar
            value={ingresos}
            text={`Ingresos ${ingresos}%`}
            styles={buildStyles({
              rotation: 0.25, 
              strokeLinecap: 'butt',
              pathTransitionDuration: 0.5,
              pathColor: ' #2D18BF',
              textColor: '#fff',
              trailColor: '#A8F25D', 
              textSize: '13px',
            })}
          />
          <p>ingresos:   78%</p>
          <p>Ahorro:  22%</p>
        
          </div>
        </div>
    </>
  );
}


