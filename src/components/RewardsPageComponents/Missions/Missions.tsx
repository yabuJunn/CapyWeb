import './missions.css';

import { MissionItem } from '../MissionItem/MissionItem';

export const Missions = () => {
  return (
    <>
      <div className='missions'>
        <div className="info-container">
          <h2>Missions</h2>
          <div id='missionItemContainer'>
            <MissionItem text={'Complete all monthly missions.'} gainAmount={'500'} backgroundColor={'#2D18BF'} capyPointsDark={false} isCompleted={false}></MissionItem>
            <MissionItem text={'Save at least 35% of your income this month.'} gainAmount={'50'} backgroundColor={'#F2622E'} capyPointsDark={false} isCompleted={false}></MissionItem>
            <MissionItem text={'Meet at least 60% of established goals.'} gainAmount={'70'} backgroundColor={'#A8F25D'} capyPointsDark={true} isCompleted={false}></MissionItem>
            <MissionItem text={'You completed 40% of all missions'} gainAmount={'90'} backgroundColor={'#2D18BF'} capyPointsDark={false} isCompleted={false}></MissionItem>
          </div>

        </div>
      </div>
    </>
  );
}
