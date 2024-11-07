import './MissionItem.css';

import { useDispatch } from 'react-redux';

import logoWhite from '../../../assets/desktop/svg/logo/logoCapyMoneyWhite.svg';
import logoBlack from '../../../assets/desktop/svg/logo/logoCapyMoneyBlack.svg';
import { changeUserAccumulatedCapypoints, changeUserExpGained, changeUserGoalsCompleted } from '../../../store/rewards/slice';

interface MissionItemProps {
    text: string;
    gainAmount: string;
    backgroundColor: string;
    capyPointsDark: boolean;
    isCompleted: boolean;
    //AgregarExp
}

export const MissionItem = ({ text, gainAmount, backgroundColor, capyPointsDark, isCompleted }: MissionItemProps) => {
    const dispatch = useDispatch();

    const handleCompleteMission = () => {
        if (!isCompleted) {
            dispatch(changeUserExpGained(parseInt(gainAmount) * Math.random()))
            dispatch(changeUserGoalsCompleted(1))
            dispatch(changeUserAccumulatedCapypoints(parseInt(gainAmount)))
        }
    };

    const renderCapyPoints = () => {
        const logo = capyPointsDark ? logoBlack : logoWhite;
        const statusText = isCompleted ? 'Completed' : 'Capypoints';
        const className = isCompleted ? 'CapyPointsAmount' : `CapyPointsAmount ${capyPointsDark ? 'dark' : ''}`;

        return (
            <div className={`MissionCapyPoints ${!capyPointsDark ? 'light' : ''}`} style={{ backgroundColor }}>
                <img src={logo} alt="" />
                <div className={className}>
                    <p className='Capypoints'>{statusText}</p>
                    <p className='Gain'>+{gainAmount}</p>
                </div>
            </div>
        );
    };

    return (
        <div className='MissionItemContainer' onClick={handleCompleteMission}>
            <p className='MissionDesc'>{text}</p>
            {renderCapyPoints()}
        </div>
    );
};
