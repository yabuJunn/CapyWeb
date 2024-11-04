import './GeneralSavings.css'

import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'

interface GeneralSavingsProps {
    valueIncome: number,
    valueSavings: number,
    incomePercentage: string,
    savingsPercentage: string
}

export const GeneralSavings = ({ valueIncome, valueSavings, incomePercentage, savingsPercentage }: GeneralSavingsProps) => {
    return <>
        <div id='generalSavings'>
            <h3>General Savings</h3>
            <div id='generalSavingsContent'>
                <div id='generalSavingsCircularProgressbarWrapper'>
                    <CircularProgressbar
                        value={valueIncome}
                        text={"Savings"}
                        styles={buildStyles({
                            rotation: 0.25,
                            strokeLinecap: 'butt',
                            pathTransitionDuration: 0.5,
                            pathColor: ' #2D18BF',
                            textColor: '#fff',
                            trailColor: '#A8F25D',
                            textSize: '14px',
                        })}
                        strokeWidth={15}
                        className='generalSavingsCircularProgressbar'
                    />
                </div>

                <div id='generalSavingsCircularProgressHints'>
                    <div id='hin1' className='hint'>
                        <div className='color' style={{ backgroundColor: '#2D18BF' }}></div>
                        <p>Income</p>
                        <p>{incomePercentage}</p>
                    </div>

                    <div id='hin2' className='hint'>
                        <div className='color' style={{ backgroundColor: '#A8F25D' }}></div>
                        <p>Savings</p>
                        <p>{savingsPercentage}</p>
                    </div>
                </div>
            </div>
        </div>
    </>
}