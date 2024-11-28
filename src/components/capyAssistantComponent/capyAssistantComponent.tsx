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
                    <button className="popup-btn">Give me a suggestion</button>
                    <button className="popup-btn">Explain the metrics to me</button>
                    <button className="popup-btn">Give me an idea</button>
                    <button className="popup-btn">Customize Capy!</button>
                </div>
            )}
        </div>
    );
};
