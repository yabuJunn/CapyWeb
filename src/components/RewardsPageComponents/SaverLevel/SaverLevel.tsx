import './SaverLevel.css';

//Import components
import { SaverLevelTitleDisplay } from '../SaverLevelTitleDisplay/SaverLevelTitleDisplay';
import { SaverLevelProgressBar } from '../SaverLevelProgressBar/SaverLevelProgressBar';

export const SaverLevel = () => {
  return (
    <>
      <div className='SaverLevelContainer'>
        <p>Level of saver</p>
        <SaverLevelTitleDisplay></SaverLevelTitleDisplay>
        <SaverLevelProgressBar></SaverLevelProgressBar>
      </div>
    </>
  );
}

