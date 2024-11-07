import { useEffect } from 'react';
import './SaverLevelTitleDisplay.css';
import noviceSaverLevel from '../../../assets/desktop/png/noviceSaverLevel.png';

interface SaverLevelTitleDisplayProps {
  levelTitle: string;
}

export const SaverLevelTitleDisplay = ({ levelTitle }: SaverLevelTitleDisplayProps) => {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = noviceSaverLevel;
    link.as = 'image';
    link.type = 'image/png';

    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div id="SaverLevelTitleDisplayContainer">
      <h3>{levelTitle}</h3>
      <img src={noviceSaverLevel} alt={`Nivel ${levelTitle} del ahorrador`} loading="eager" />
    </div>
  );
};

