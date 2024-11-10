import './savings.css';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import MoveButton from '../../../assets/desktop/svg/MoveButton.svg';

export const Savings = () => {
  const ingresos = 78;
  const ahorroAmount = 30203

  return (
    <>
      <div className='savings'>
        <h3>Savings</h3>
        <img className="MoveButton" src={MoveButton} alt="MoveButton" />

        <div className="progress-wrapper">
          <CircularProgressbar
            value={ingresos}
            text={`$${ahorroAmount}`}
            styles={buildStyles({
              rotation: 0.25,
              strokeLinecap: 'butt',
              pathTransitionDuration: 0.5,
              pathColor: ' #2D18BF',
              textColor: '#fff',
              trailColor: '#A8F25D',
              textSize: '14px',
            })}
            strokeWidth={15}
          />
        </div>

        <div id='savingsCircularProgressHints'>
          <div className='hintContainer'>
            <div className='colorHint' style={{ backgroundColor: '#2D18BF' }}></div>
            <p>Income</p>
            <p>{70}%</p>
          </div>

          <div className='hintContainer'>
            <div className='colorHint' style={{ backgroundColor: '#A8F25D' }}></div>
            <p>Savings</p>
            <p>{30}%</p>
          </div>
        </div>
      </div>
    </>
  );
}


