import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store'; // Asegúrate de que la ruta a tu store sea correcta
import { Progress } from '../../ui/progress';
import './SaverLevelProgressBar.css';

export const SaverLevelProgressBar = () => {
    const progress = useSelector((state: RootState) => state.rewards.userExpGained);

    return (
        <>
            <div id='SaverProgressLabels'>
                <p>{progress}%</p>
                <p>100%</p>
            </div>
            <Progress value={progress} className="w-[90%] h-[10%]" style={{ border: '3px white solid' }} />
        </>
    );
};
