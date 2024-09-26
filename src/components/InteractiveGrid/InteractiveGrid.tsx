import './InteractiveGrid.css'
import 'gridstack/dist/gridstack.min.css';
import { GridStack } from 'gridstack';
import { useEffect } from 'react';

//

export const InteractiveGrid = () => {
    useEffect(() => {
        console.log("Montado")
        GridStack.init()
    })

    return <>
        <div id='gridContainer' className="grid-stack">
            <div className="grid-stack-item">
                
            </div>
            <div className="grid-stack-item" gs-w="6">
                <div className="grid-stack-item-content">Item 2 wider</div>
            </div>
        </div>
    </>
}