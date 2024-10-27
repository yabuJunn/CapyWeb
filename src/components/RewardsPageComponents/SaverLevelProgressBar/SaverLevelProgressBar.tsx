import './SaverLevelProgressBar.css'

//Import components
import { Progress } from '../../ui/progress'


export const SaverLevelProgressBar = () => {
    return <>
        <div id='SaverProgressLabels'>
            <p>40%</p>
            <p>80%</p>
        </div>
        <Progress value={30} className="w-[90%] h-[10%]" style={{ border: '3px white solid'}}></Progress>
    </>
}