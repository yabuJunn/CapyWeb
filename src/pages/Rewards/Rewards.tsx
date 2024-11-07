import React from 'react';
import './Rewards.css';
import RewardGrid from '../../components/RewardsPageComponents/RewardGrid/RewardGrid';
import { Missions } from '../../components/RewardsPageComponents/Missions/Missions';
import { SaverLevel } from '../../components/RewardsPageComponents/SaverLevel/SaverLevel';
import { GlobalAppNav } from '../../components/Nav/Nav';
import Summary from '../../components/RewardsPageComponents/Summary/Summary';

export const Rewards: React.FC = () => {
  return (
    <main className="reward-container">
      <h1 id='principal'>Reward</h1>
      <div className='MissionLevel'>

        {/* <div id='nav-container'> */}
        <GlobalAppNav></GlobalAppNav>
        {/* </div> */}
        <div className='iqual'>
          <Missions></Missions>
        </div>

        <div className='iqual'>
          <SaverLevel></SaverLevel>
        </div>

        <div className='iqual'>
          <Summary></Summary>
        </div>

      </div>

      <div className='canjeo'>
        <RewardGrid></RewardGrid>
      </div>

      <div id='backgroundReward'>

      </div>
    </main>

  );
}

