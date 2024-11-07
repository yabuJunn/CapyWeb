import React from 'react';
//import { useSelector } from 'react-redux';
//import { RootState } from '../../../store/store'; // Asegúrate de que la ruta a tu store sea correcta
import { Progress } from '../../ui/progress';
import './SaverLevelProgressBar.css';

export const SaverLevelProgressBar = () => {
    //const progress = useSelector((state: RootState) => state.missions.progress);

    return (
        <>
            <div id='SaverProgressLabels'>
                <p>{10}%</p>
                <p>100%</p>
            </div>
            <Progress value={10} className="w-[90%] h-[10%]" style={{ border: '3px white solid' }} />
        </>
    );
};
