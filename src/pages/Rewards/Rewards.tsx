import React from 'react';
import './Rewards.css';
import RewardGrid from '../../components/RewardsPageComponents/RewardGrid/RewardGrid';
import { Missions } from '../../components/RewardsPageComponents/Missions/Missions';
import { SaverLevelProgressBar } from '../../components/RewardsPageComponents/SaverLevelProgressBar/SaverLevelProgressBar';

export const Rewards: React.FC = () => {
  return (
    <div className="reward-container">
      <h1>Recompensas</h1>
      <Missions></Missions>

       <div className='Level'>
        <SaverLevelProgressBar></SaverLevelProgressBar>
       </div>
      <div className='canjeo'>
        <RewardGrid></RewardGrid>
      </div>


    </div>

  );
}


