import React from 'react';
import './RewardCard.css';

interface RewardCardProps {
    service: string;
    price: string;
    points: number;
    backgroundColor: string;
    imageSrc: string;
}

const RewardCard: React.FC<RewardCardProps> = ({ service, price, points, backgroundColor, imageSrc }) => {
    return (
        <div className="reward-card" style={{ backgroundColor }}>
            
            <img 
                src={imageSrc} 
                alt={service} 
                className="reward-card-image"
            />
            <div className="reward-card-content">
                <h2>{service}</h2>
                <div className="price-and-points">
                    <h3>{price}</h3>
                    <p className="text-with-image">
                        <img id="white" src="../../src/assets/desktop/svg/logo/logoCapyMoneyWhite.svg" alt="" />
                        {points}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default RewardCard;

