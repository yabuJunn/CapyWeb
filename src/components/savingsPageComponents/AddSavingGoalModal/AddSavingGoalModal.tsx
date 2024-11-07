import './AddSavingGoalModal.css'
import fireIconWhite from '../../../assets/desktop/svg/fireIconWhite.svg'
import { useDispatch } from 'react-redux'
import { changeAddSavingModal } from '../../../store/store'

import xIconWhite from '../../../assets/desktop/svg/icons/xIconWhite.svg'
import { addSaving } from '../../../store/savings/slice'
import { useRef } from 'react'

export const AddSavingGoalModal = () => {
    const dispatch = useDispatch()

    const savingNameInputRef = useRef<HTMLInputElement>(null)
    const savingColorInputRef = useRef<HTMLSelectElement>(null)

    //const savingImageInputRef = useRef(null)

    const savingMonthlyInputRef = useRef<HTMLInputElement>(null)
    const savingTotalFeeInputRef = useRef<HTMLInputElement>(null)

    // Función para obtener el valor seleccionado del radio button
    const getSelectedImage = () => {
        const selectedRadio = document.querySelector('input[name="AddSavingGoalRadioInputImage"]:checked') as HTMLInputElement;
        return selectedRadio ? selectedRadio.id : null;
    };

    return (
        <>
            <div
                id="AddSavingGoalModalFondo"
                onClick={(e) => {
                    if (e.target === e.currentTarget) {
                        dispatch(changeAddSavingModal(false))
                    }
                }}
            >
                <div id="AddSavingGoalModalContainer">
                    <button id='AddSavingGoalCloseModalButton' onClick={() => {
                        dispatch(changeAddSavingModal(false))
                    }}>
                        <img src={xIconWhite} alt="" />
                    </button>

                    <form action="" id="AddSavingGoalModalContainerForm">
                        <h3>New savings</h3>
                        <div className="inputTextContainer">
                            <label htmlFor=""></label>
                            <input type="text" placeholder="Enter saving name" ref={savingNameInputRef} />
                        </div>

                        <select name="" id="" ref={savingColorInputRef}>
                            <option value="">Choose saving color</option>
                            <option value="blue">Blue</option>
                            <option value="green">Green</option>
                            <option value="orange">Orange</option>
                        </select>

                        <label htmlFor="AddSavingGoalRadioInputContainer" id="selectSavingPicture">
                            Select saving picture
                        </label>

                        <div id="AddSavingGoalRadioInputContainer">
                            <div className="AddSavingGoalRadioInputItem">
                                <input type="radio" name="AddSavingGoalRadioInputImage" id="AddSavingGoalRadioInputFire" />
                                <label htmlFor="AddSavingGoalRadioInputFire">
                                    <img src={fireIconWhite} alt="" />
                                </label>
                            </div>

                            <div className="AddSavingGoalRadioInputItem">
                                <input type="radio" name="AddSavingGoalRadioInputImage" id="AddSavingGoalRadioInputPlanet" />
                                <label htmlFor="AddSavingGoalRadioInputPlanet">
                                    <img src={fireIconWhite} alt="" />
                                </label>
                            </div>

                            <div className="AddSavingGoalRadioInputItem">
                                <input type="radio" name="AddSavingGoalRadioInputImage" id="AddSavingGoalRadioInputKey" />
                                <label htmlFor="AddSavingGoalRadioInputKey">
                                    <img src={fireIconWhite} alt="" />
                                </label>
                            </div>
                        </div>

                        <div className="inputTextContainer">
                            <label htmlFor=""></label>
                            <input type="number" placeholder="Enter the monthly savings amount" ref={savingMonthlyInputRef} />
                        </div>

                        <div className="inputTextContainer">
                            <label htmlFor=""></label>
                            <input type="number" placeholder="Enter the total amount of the monthly" ref={savingTotalFeeInputRef} />
                        </div>

                        <button id="AddSavingGoalRadioInputButton" onClick={(e) => {
                            e.preventDefault();

                            const selectedImage = getSelectedImage();

                            if (savingNameInputRef.current && selectedImage) {
                                dispatch(addSaving({
                                    name: savingNameInputRef.current.value,
                                    color: savingColorInputRef.current ? savingColorInputRef.current.value : "#F9F9F9",
                                    image: selectedImage,
                                    monthlySaving: savingMonthlyInputRef.current ? Number(savingMonthlyInputRef.current.value) : 10,
                                    savingTotalFee: savingTotalFeeInputRef.current ? Number(savingTotalFeeInputRef.current.value) : 100,
                                }));

                                dispatch(changeAddSavingModal(false))
                            }
                        }}>Create new saving</button>
                    </form>
                </div>
            </div>
        </>
    )
}
