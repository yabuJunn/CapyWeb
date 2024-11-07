import './SaverLevel.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

import { SaverLevelTitleDisplay } from '../SaverLevelTitleDisplay/SaverLevelTitleDisplay';
import { SaverLevelProgressBar } from '../SaverLevelProgressBar/SaverLevelProgressBar';

export const SaverLevel = () => {
  const saverLevel = useSelector((state: RootState) => state.rewards.summary.saverLevel);

  return (
    <div className='SaverLevelContainer'>
      <p>Saver level</p>
      <SaverLevelTitleDisplay levelTitle={saverLevel} />
      <SaverLevelProgressBar />
    </div>
  );
};

