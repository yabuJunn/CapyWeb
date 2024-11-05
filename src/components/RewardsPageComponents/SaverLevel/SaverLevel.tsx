import './SaverLevel.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

import { SaverLevelTitleDisplay } from '../SaverLevelTitleDisplay/SaverLevelTitleDisplay';
import { SaverLevelProgressBar } from '../SaverLevelProgressBar/SaverLevelProgressBar';

export const SaverLevel = () => {
  const { saverLevel, progress } = useSelector((state: RootState) => state.missions);

  return (
    <div className='SaverLevelContainer'>
      <h2>Saver level</h2>
      <SaverLevelTitleDisplay levelTitle={saverLevel} />
      <SaverLevelProgressBar progressValue={progress} />
    </div>
  );
};

