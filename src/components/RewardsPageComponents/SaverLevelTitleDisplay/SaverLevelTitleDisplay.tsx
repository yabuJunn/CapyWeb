import './SaverLevelTitleDisplay.css'

import noviceSaverLevel from '../../../assets/png/noviceSaverLevel.png'

export const SaverLevelTitleDisplay = () => {
    return <>
        <div id='SaverLevelTitleDisplayContainer'>
            <h3>Novice</h3>
            <img src={noviceSaverLevel} alt="Nivel Novice del ahorrador" loading="eager" />
        </div>
    </>
}