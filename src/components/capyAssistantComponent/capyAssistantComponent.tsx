import { useState } from "react";
import './capyAssistantComponent.css';

export const CapyAssistant = () => {
    const [isPopupVisible, setPopupVisible] = useState(false);

    const togglePopup = () => {
        setPopupVisible(!isPopupVisible);
    };

    return (
        <div>
            <div className="assistant" onClick={togglePopup}>
                <img 
                    src="src/assets/desktop/svg/Capybara.svg" 
                    alt="" 
                    className="assistant-img" 
                />
            </div>
            {isPopupVisible && (
                <div className="capy-popup">
                    <button className="popup-btn">Dame una sugerencia</button>
                    <button className="popup-btn">Explícame las métricas</button>
                    <button className="popup-btn">Dame una idea</button>
                    <button className="popup-btn">¡Personaliza a Capy!</button>
                </div>
            )}
        </div>
    );
};
