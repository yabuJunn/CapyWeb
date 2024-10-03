import './missions.css';

import { MissionItem } from '../MissionItem/MissionItem';

//Imagenes importadas
import MoveButton from '../../assets/svg/MoveButton.svg'

export const Missions = () => {
  return (
    <>
      <div className='missions'>
        <img className="MoveButton" src={MoveButton} alt="MoveButton" />
        <div className="info-container">
          <h3>Missions</h3>
          <div id='missionItemContainer'>
            <MissionItem text={'Cumple todas las misiones mensuales.'} gainAmount={'500'} backgroundColor={'#2D18BF'} capyPointsDark={false} isCompleted={false}></MissionItem>
            <MissionItem text={'Ahorra al menos un 35% de tus ingresos este mes.'} gainAmount={'50'} backgroundColor={'#F2622E'} capyPointsDark={false} isCompleted={true}></MissionItem>
            <MissionItem text={'Cumple al menos con el 60%  de metas establecidas.'} gainAmount={'70'} backgroundColor={'#A8F25D'} capyPointsDark={true} isCompleted={false}></MissionItem>
          </div>

        </div>
      </div>
    </>
  );
}

