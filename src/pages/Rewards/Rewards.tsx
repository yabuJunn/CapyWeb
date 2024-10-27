import React from 'react';
import './Rewards.css';
import RewardGrid from '../../components/RewardsPageComponents/RewardGrid/RewardGrid';
import { Missions } from '../../components/RewardsPageComponents/Missions/Missions';
import { SaverLevel } from '../../components/RewardsPageComponents/SaverLevel/SaverLevel';
import Nav from '../../components/Nav/Nav'

export const Rewards: React.FC = () => {
  return (
    <div className="reward-container">
      <h1>Recompensas</h1>
      <div className='MissionLevel'>

        <Nav></Nav>
        <div className='mission'>
          <Missions></Missions>
        </div>
        
        <div className='Level'>
          <SaverLevel></SaverLevel>
        </div>
      </div>
       
      <div className='canjeo'>
        <RewardGrid></RewardGrid>
      </div>


    </div>

  );
}


