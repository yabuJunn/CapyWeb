import './MissionItem.css'

import logoWhite from '../../../assets/svg/logo/logoCapyMoneyWhite.svg'
import logoBlack from '../../../assets/svg/logo/logoCapyMoneyBlack.svg'

interface MissionItemProps {
    text: string,
    gainAmount: string,
    backgroundColor: string,
    capyPointsDark: boolean,
    isCompleted: boolean
}

export const MissionItem = ({ text, gainAmount, backgroundColor, capyPointsDark, isCompleted }: MissionItemProps) => {
    if (isCompleted) {
        if (!capyPointsDark) {
            return <>
                <div className='MissionItemContainer'>
                    <p className='MissionDesc'>{text}</p>

                    <div className='MissionCapyPoints ligth' style={{ backgroundColor: backgroundColor }}>
                        <img src={logoWhite} alt="" />
                        <div className='CapyPointsAmount' >
                            <p className='Capypoints'>Completed</p>
                            <p className='Gain'>+{gainAmount}</p>
                        </div>
                    </div>
                </div>
            </>
        }

        return <>
            <div className='MissionItemContainer'>
                <p className='MissionDesc'>{text}</p>

                <div className='MissionCapyPoints' style={{ backgroundColor: backgroundColor }}>
                    <img src={logoBlack} alt="" />
                    <div className='CapyPointsAmount dark' >
                        <p className='Capypoints'>Completed</p>
                        <p className='Gain'>+{gainAmount}</p>
                    </div>
                </div>
            </div>
        </>
    } else {

        if (!capyPointsDark) {
            return <>
                <div className='MissionItemContainer'>
                    <p className='MissionDesc'>{text}</p>

                    <div className='MissionCapyPoints ligth' style={{ backgroundColor: backgroundColor }}>
                        <img src={logoWhite} alt="" />
                        <div className='CapyPointsAmount' >
                            <p className='Capypoints'>Capypoints</p>
                            <p className='Gain'>+{gainAmount}</p>
                        </div>
                    </div>
                </div>
            </>
        }

        return <>
            <div className='MissionItemContainer'>
                <p className='MissionDesc'>{text}</p>

                <div className='MissionCapyPoints' style={{ backgroundColor: backgroundColor }}>
                    <img src={logoBlack} alt="" />
                    <div className='CapyPointsAmount dark' >
                        <p className='Capypoints'>Capypoints</p>
                        <p className='Gain'>+{gainAmount}</p>
                    </div>
                </div>
            </div>
        </>

    }
}