import React from 'react';
import './RewardGrid.css';
import RewardCard from '../RewardCard/RewardCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

const RewardGrid: React.FC = () => {
    const { exchangeData } = useSelector((state: RootState) => state.rewards);

    return <>
        <div className="reward-grid">
            <div id='Canjear'>
                <h1>Exchange</h1>
            </div>
            <div id='rewardCard'>
                {exchangeData
                    .filter((reward) => !reward.isRedeemed)
                    .map((reward) => (
                        <RewardCard
                            key={reward.exchangeId}
                            service={reward.name}
                            price={reward.redemptionCost}
                            points={reward.redemptionCapypointsAmount}
                            backgroundColor={reward.backgroundColor}
                            imageSrc={reward.imageSrc}
                            id={reward.exchangeId}
                        />
                    ))}
            </div>
        </div>
    </>
}

export default RewardGrid;
