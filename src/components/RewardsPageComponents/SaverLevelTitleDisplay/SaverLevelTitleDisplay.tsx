import './SaverLevelTitleDisplay.css';
import noviceSaverLevel from '../../../assets/desktop/png/noviceSaverLevel.png';

interface SaverLevelTitleDisplayProps {
  levelTitle: string;
}

export const SaverLevelTitleDisplay = ({ levelTitle }: SaverLevelTitleDisplayProps) => {
  return (
    <div id='SaverLevelTitleDisplayContainer'>
      <h3>{levelTitle}</h3>
      <img src={noviceSaverLevel} alt={`Nivel ${levelTitle} del ahorrador`} loading="eager" />
    </div>
  );
};
