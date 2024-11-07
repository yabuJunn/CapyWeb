import './AddSavingGoalModal.css'

//Import Images
import fireIconWhite from '../../../assets/svg/fireIconWhite.svg'

export const AddSavingGoalModal = () => {
    return <>
        <div id='AddSavingGoalModalFondo'>
            <div id='AddSavingGoalModalContainer'>
                <form action="" id='AddSavingGoalModalContainerForm'>
                    <h3>New savings</h3>
                    <div className='inputTextContainer'>
                        <label htmlFor=""></label>
                        <input type="text" placeholder='Enter saving name' />
                    </div>


                    <select name="" id="">
                        <option value="">Choose saving color</option>
                        <option value="">Blue</option>
                        <option value="">Green</option>
                        <option value="">Orange</option>
                    </select>


                    <label htmlFor="AddSavingGoalRadioInputContainer" id='selectSavingPicture'>Select saving picture</label>
                    
                    <div id='AddSavingGoalRadioInputContainer'>
                        <div className='AddSavingGoalRadioInputItem'>
                            <input type="radio" name="AddSavingGoalRadioInputImage" id="AddSavingGoalRadioInputFire" ></input>
                            <label htmlFor="AddSavingGoalRadioInputFire">
                                <img src={fireIconWhite} alt="" />
                            </label>
                        </div>

                        <div className='AddSavingGoalRadioInputItem'>
                            <input type="radio" name="AddSavingGoalRadioInputImage" id="AddSavingGoalRadioInputPlanet" ></input>
                            <label htmlFor="AddSavingGoalRadioInputPlanet">
                                <img src={fireIconWhite} alt="" />
                            </label>
                        </div>

                        <div className='AddSavingGoalRadioInputItem'>
                            <input type="radio" name="AddSavingGoalRadioInputImage" id="AddSavingGoalRadioInputKey" ></input>
                            <label htmlFor="AddSavingGoalRadioInputKey">
                                <img src={fireIconWhite} alt="" />
                            </label>
                        </div>
                    </div>

                    <div className='inputTextContainer'>
                        <label htmlFor=""></label>

                        <input type="number" placeholder='Enter the monthly savings amount' />

                    </div>

                    <div className='inputTextContainer'>
                        <label htmlFor=""></label>
                        <input type="number" placeholder='Enter the total amount of the monthly' />
                    </div>

                    <button id='AddSavingGoalRadioInputButton'>
                        Create new saving
                    </button>
                </form>
            </div >
        </div >
    </>
}