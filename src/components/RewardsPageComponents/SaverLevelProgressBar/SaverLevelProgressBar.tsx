import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { Progress } from '../../ui/progress';
import './SaverLevelProgressBar.css';

interface SaverLevelProgressBarProps {
  progressValue: number;
}

export const SaverLevelProgressBar: React.FC<SaverLevelProgressBarProps> = ({ progressValue }) => {
  const progress = useSelector((state: RootState) => state.rewards.userExpGained);

  return (
    <>
      <div id='SaverProgressLabels'>
        <p>{progress}%</p>
        <p>100%</p>
      </div>
      <Progress value={progressValue} className="w-[90%] h-[10%]" style={{ border: '3px white solid' }} />
    </>
  );
};
