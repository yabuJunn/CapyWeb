import { useState } from "react";
import { CapyPopup } from "../capyPopupComponent/capyPopupComponent";
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
                <CapyPopup></CapyPopup>
            )}         
        </div>
    );
};
