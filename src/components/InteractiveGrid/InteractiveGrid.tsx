import './InteractiveGrid.css'
import 'gridstack/dist/gridstack.min.css';
import { GridStack } from 'gridstack';
import { useEffect } from 'react';

//Import components
import { Balance } from '../../components/TotalBalance/Balance';
import {Income} from '../../components/Income/Income';
import { Capy } from '../../components/Capy/Capy';
import { CardsSpace } from '../../components/CardsSpace/CardsSpace'
import { Expenses } from '../Expenses/Expenses';
import { Comparation } from '../ComparationGraphic/ComparationGraphic';
import { Savings } from '../Savings/Savings';
import { Level } from '../Level/Level';
import { Missions } from '../Missions/Missions';

export const InteractiveGrid = () => {
    useEffect(() => {
        console.log("Montado")
        GridStack.init()
    })

    return <>
        <div id='gridContainer' className="grid-stack">
            <div className="grid-stack-item" gs-h="2" gs-w="4">
            <Balance></Balance> 
            Balance
            </div>
            <div className="grid-stack-item" gs-h="1" gs-w="3">
            <Income></Income> 
                Ingresos Totales
            </div>
            <div className="grid-stack-item" gs-h="2" gs-w="2">
            <Capy></Capy> 
                Capy
            </div>
            <div className="grid-stack-item" gs-h="6" gs-w="3">
            <CardsSpace></CardsSpace> 
                Tarjetas
            </div>
            <div className="grid-stack-item" gs-h="1" gs-w="3">
            <Expenses></Expenses> 
                Gastos Totales
            </div>
            <div className="grid-stack-item" gs-h="2" gs-w="5">
            <Comparation></Comparation> 
                Resumen Gastos e Ingresos
            </div>
            <div className="grid-stack-item" gs-h="2" gs-w="4">
            <Savings></Savings> 
                Ahorro
            </div>
            <div className="grid-stack-item" gs-h="2" gs-w="5">
            <Level></Level> 
                Nivel del Usuario
            </div>
            <div className="grid-stack-item" gs-h="2" gs-w="4">
            <Missions></Missions> 
                Misiones
            </div>
        </div>
    </>
}