import { Progress } from '../../ui/progress';
import './SaverLevelProgressBar.css';

interface SaverLevelProgressBarProps {
  progressValue: number;
}

export const SaverLevelProgressBar: React.FC<SaverLevelProgressBarProps> = ({ progressValue }) => {

  return (
    <>
      <div id='SaverProgressLabels'>
        <p>{Math.round(progressValue)}%</p>
        <p>100%</p>
      </div>
      <Progress value={Math.round(progressValue)} className="w-[90%] h-[10%]" style={{ border: '3px white solid' }} />
    </>
  );
};
