import React from 'react';
import './RewardGrid.css';
import RewardCard from '../RewardCard/RewardCard';

const rewards = [
    { service: '', price: '$10,000', points: 1000, backgroundColor: '#4A00E0', imageSrc: '../../src/assets/png/Amazon.png' },
    { service: '', price: 'Membresía 1 mes', points: 1500, backgroundColor: '#F85A40', imageSrc: '../../src/assets/png/Netflix.png' },
    { service: '', price: '$20,000', points: 2000, backgroundColor: '#98EC2D', imageSrc: '../../src/assets/png/Farmatodo.png' },
];

const RewardGrid: React.FC = () => {
    return (
        <div className="reward-grid">
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
    );
}

export default RewardGrid;

