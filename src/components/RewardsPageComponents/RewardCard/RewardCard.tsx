import React from 'react';
import './RewardCard.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeUserAccumulatedCapypoints, redeemedExchange } from '../../../store/rewards/slice';
import { RootState } from '../../../store/store';

interface RewardCardProps {
    service: string;
    price: number;
    points: number;
    backgroundColor: string;
    imageSrc: string;
    id: number;
}

const RewardCard: React.FC<RewardCardProps> = ({ service, price, points, backgroundColor, imageSrc, id }) => {
    const dispatch = useDispatch()
    const userCapypoints = useSelector((state: RootState) => state.rewards.summary.accumulatedCapypoints);

    return <>
        <div className="reward-card" style={{ backgroundColor }} onClick={() => {
            if (userCapypoints - points > points) {
                dispatch(redeemedExchange(id))
                dispatch(changeUserAccumulatedCapypoints(-points));
                //Agregar la accion que suma el dinero al balance general
            }
        }}>

            <img
                src={imageSrc}
                alt={service}
                className="reward-card-image"
            />
            <div className="reward-card-content">
                <h2>{service}</h2>
                <div className="price-and-points">
                    <h3>${price}</h3>
                    <p className="text-with-image">
                        <img id="white" src="../../src/assets/desktop/svg/logo/logoCapyMoneyWhite.svg" alt="" />
                        {points}
                    </p>
                </div>
            </div>
        </div>
    </>
}

export default RewardCard;

