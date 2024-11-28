import React from 'react';
import './RewardCard.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeUserAccumulatedCapypoints, redeemedExchange } from '../../../store/rewards/slice';
import { RootState } from '../../../store/store';

import logoMoneyWhite from '../../../assets/desktop/svg/logo/logoCapyMoneyWhite.svg'
import logoMoneyBlack from '../../../assets/desktop/svg/logo/logoCapyMoneyBlack.svg'

import amazonImage from '../../../assets/desktop/png/Amazon.png'
import netflixImage from '../../../assets/desktop/png/Netflix.png'
import farmatodoImage from '../../../assets/desktop/png/Farmatodo.png'
import { exchangeNameEnum } from '../../../store/rewards/types';

interface RewardCardProps {
    service: string;
    price: number;
    points: number;
    backgroundColor: string;
    id: number;
    darkText: boolean,
}

const RewardCard: React.FC<RewardCardProps> = ({ service, price, points, backgroundColor, id, darkText }) => {
    const dispatch = useDispatch()
    const userCapypoints = useSelector((state: RootState) => state.rewards.summary.accumulatedCapypoints);

    if (!darkText) {
        switch (service) {
            case exchangeNameEnum.amazon:
                return <>
                    <div className="reward-card" style={{ backgroundColor }} onClick={() => {
                        if (userCapypoints - points > points) {
                            dispatch(redeemedExchange(id))
                            dispatch(changeUserAccumulatedCapypoints(-points));
                            //Agregar la accion que suma el dinero al balance general
                        }
                    }}>

                        <img
                            src={amazonImage}
                            alt={service}
                            className="reward-card-image"
                        />
                        <div className="reward-card-content">
                            <h2>{service}</h2>
                            <div className="price-and-points">
                                <h3>${price}</h3>
                                <p className="text-with-image">
                                    <img id="white" src={logoMoneyWhite} alt="" />
                                    {points}
                                </p>
                            </div>
                        </div>
                    </div>
                </>
            case exchangeNameEnum.farmatodo:
                return <>
                    <div className="reward-card" style={{ backgroundColor }} onClick={() => {
                        if (userCapypoints - points > points) {
                            dispatch(redeemedExchange(id))
                            dispatch(changeUserAccumulatedCapypoints(-points));
                            //Agregar la accion que suma el dinero al balance general
                        }
                    }}>

                        <img
                            src={farmatodoImage}
                            alt={service}
                            className="reward-card-image"
                        />
                        <div className="reward-card-content">
                            <h2>{service}</h2>
                            <div className="price-and-points">
                                <h3>${price}</h3>
                                <p className="text-with-image">
                                    <img id="white" src={logoMoneyWhite} alt="" />
                                    {points}
                                </p>
                            </div>
                        </div>
                    </div>
                </>
            case exchangeNameEnum.netflix:
                return <>
                    <div className="reward-card" style={{ backgroundColor }} onClick={() => {
                        if (userCapypoints - points > points) {
                            dispatch(redeemedExchange(id))
                            dispatch(changeUserAccumulatedCapypoints(-points));
                            //Agregar la accion que suma el dinero al balance general
                        }
                    }}>

                        <img
                            src={netflixImage}
                            alt={service}
                            className="reward-card-image"
                        />
                        <div className="reward-card-content">
                            <h2>{service}</h2>
                            <div className="price-and-points">
                                <h3>${price}</h3>
                                <p className="text-with-image">
                                    <img id="white" src={logoMoneyWhite} alt="" />
                                    {points}
                                </p>
                            </div>
                        </div>
                    </div>
                </>
            default:
                break;
        }

    } else {
        switch (service) {
            case exchangeNameEnum.amazon:
                return <>
                    <div className="reward-card" style={{ backgroundColor }} onClick={() => {
                        if (userCapypoints - points > points) {
                            dispatch(redeemedExchange(id))
                            dispatch(changeUserAccumulatedCapypoints(-points));
                            //Agregar la accion que suma el dinero al balance general
                        }
                    }}>

                        <img
                            src={amazonImage}
                            alt={service}
                            className="reward-card-image"
                        />
                        <div className="reward-card-content">
                            <h2 className='darkText'>{service}</h2>
                            <div className="price-and-points">
                                <h3 className='darkText'>${price}</h3>
                                <p className="text-with-image darkText">
                                    <img id="white" src={logoMoneyBlack} alt="" />
                                    {points}
                                </p>
                            </div>
                        </div>
                    </div>
                </>
            case exchangeNameEnum.farmatodo:
                return <>
                    <div className="reward-card" style={{ backgroundColor }} onClick={() => {
                        if (userCapypoints - points > points) {
                            dispatch(redeemedExchange(id))
                            dispatch(changeUserAccumulatedCapypoints(-points));
                            //Agregar la accion que suma el dinero al balance general
                        }
                    }}>

                        <img
                            src={farmatodoImage}
                            alt={service}
                            className="reward-card-image"
                        />
                        <div className="reward-card-content">
                            <h2 className='darkText'>{service}</h2>
                            <div className="price-and-points">
                                <h3 className='darkText'>${price}</h3>
                                <p className="text-with-image darkText">
                                    <img id="white" src={logoMoneyBlack} alt="" />
                                    {points}
                                </p>
                            </div>
                        </div>
                    </div>
                </>
            case exchangeNameEnum.netflix:
                return <>
                    <div className="reward-card" style={{ backgroundColor }} onClick={() => {
                        if (userCapypoints - points > points) {
                            dispatch(redeemedExchange(id))
                            dispatch(changeUserAccumulatedCapypoints(-points));
                            //Agregar la accion que suma el dinero al balance general
                        }
                    }}>

                        <img
                            src={netflixImage}
                            alt={service}
                            className="reward-card-image"
                        />
                        <div className="reward-card-content">
                            <h2 className='darkText'>{service}</h2>
                            <div className="price-and-points">
                                <h3 className='darkText'>${price}</h3>
                                <p className="text-with-image darkText">
                                    <img id="white" src={logoMoneyBlack} alt="" />
                                    {points}
                                </p>
                            </div>
                        </div>
                    </div>
                </>
            default:
                break;
        }
    }
}

export default RewardCard;

