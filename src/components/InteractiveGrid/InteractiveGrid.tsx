import './InteractiveGrid.css'
import 'gridstack/dist/gridstack.min.css';
import { GridStack } from 'gridstack';
import { useEffect } from 'react';

//Import components
import { Balance } from '../../components/TotalBalance/Balance'

export const InteractiveGrid = () => {
    useEffect(() => {
        console.log("Montado")
        GridStack.init()
    })

    return <>
        <div id='gridContainer' className="grid-stack">
            <div className="grid-stack-item" gs-h="2" gs-w="4">
                {/* <Balance></Balance> */}
                Balance
            </div>
            <div className="grid-stack-item" gs-h="1" gs-w="3">
                Ingresos Totales
            </div>
            <div className="grid-stack-item" gs-h="2" gs-w="2">
                Capy
            </div>
            <div className="grid-stack-item" gs-h="6" gs-w="3">
                Tarjetas
            </div>
            <div className="grid-stack-item" gs-h="1" gs-w="3">
                Gastos Totales
            </div>
            <div className="grid-stack-item" gs-h="2" gs-w="5">
                Resumen Gastos e Ingresos
            </div>
            <div className="grid-stack-item" gs-h="2" gs-w="4">
                Ahorro
            </div>
            <div className="grid-stack-item" gs-h="2" gs-w="5">
                Nivel del Usuario
            </div>
            <div className="grid-stack-item" gs-h="2" gs-w="4">
                Misiones
            </div>
        </div>
    </>
}