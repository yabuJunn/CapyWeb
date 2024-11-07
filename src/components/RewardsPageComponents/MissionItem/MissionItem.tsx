import './MissionItem.css';

import { useDispatch } from 'react-redux';

import logoWhite from '../../../assets/desktop/svg/logo/logoCapyMoneyWhite.svg';
import logoBlack from '../../../assets/desktop/svg/logo/logoCapyMoneyBlack.svg';
import { changeUserAccumulatedCapypoints, changeUserExpGained, changeUserGoalsCompleted, completeMission } from '../../../store/rewards/slice';

interface MissionItemProps {
    text: string;
    gainAmount: string;
    backgroundColor: string;
    capyPointsDark: boolean;
    isCompleted: boolean;
    expToGrant: number,
    missionId: number,
    missionTitle: string
}

export const MissionItem = ({ text, gainAmount, backgroundColor, capyPointsDark, isCompleted, expToGrant, missionId, missionTitle }: MissionItemProps) => {
    const dispatch = useDispatch();

    const handleCompleteMission = () => {
        if (!isCompleted) {
            dispatch(changeUserGoalsCompleted(1))
            dispatch(changeUserAccumulatedCapypoints(parseInt(gainAmount)))
            dispatch(completeMission(missionId))
            dispatch(changeUserExpGained(expToGrant))
        }
    };

    const renderCapyPoints = () => {
        const logo = capyPointsDark || backgroundColor === '#CCFC56' ? logoBlack : logoWhite;
        const statusText = isCompleted ? 'Completed' : 'Capypoints';
        const className = isCompleted ? 'CapyPointsAmount' : `CapyPointsAmount ${capyPointsDark || backgroundColor === '#CCFC56' ? 'dark' : ''}`;

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
            <div className='missionTextContainer'>
                <h3>{missionTitle}</h3>
                <p className='MissionDesc'>{text}</p>
            </div>
            {renderCapyPoints()}
        </div>
    );
};
