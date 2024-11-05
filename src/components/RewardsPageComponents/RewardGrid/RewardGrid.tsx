import React from 'react';
import './RewardGrid.css';
import RewardCard from '../RewardCard/RewardCard';

const rewards = [
    { service: '', price: '$10,000', points: 1000, backgroundColor: '#4A00E0', imageSrc: '../../src/assets/desktop/png/Amazon.png' },
    { service: '', price: '1 mes', points: 1500, backgroundColor: '#F2622E', imageSrc: '../../src/assets/desktop/png/Netflix.png' },
    { service: '', price: '$20,000', points: 2000, backgroundColor: '#A8F25D', imageSrc: '../../src/assets/desktop/png/Farmatodo.png' },
];

const RewardGrid: React.FC = () => {
    return (
        <div className="reward-grid">
            <div id='Canjear'>
                <h1>Exchange</h1>
            </div>
            <div id='rewardCard'>
                {rewards.map((reward, index) => (
                    <RewardCard
                        key={index}
                        service={reward.service}
                        price={reward.price}
                        points={reward.points}
                        backgroundColor={reward.backgroundColor}
                        imageSrc={reward.imageSrc}
                    />
                ))}
            </div>
        </div>
    );
}

export default RewardGrid;

