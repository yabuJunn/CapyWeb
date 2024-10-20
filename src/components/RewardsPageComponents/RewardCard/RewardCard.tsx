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
                <p>{price}</p>
                <p>{points} puntos</p>
            </div>
        </div>
    );
}

export default RewardCard;

