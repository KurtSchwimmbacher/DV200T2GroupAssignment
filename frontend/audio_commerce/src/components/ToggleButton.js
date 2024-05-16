import React, { useState } from 'react';
import '../styles/ToggleButton.css';

const ToggleButton = () => {
    const [isListed, setIsListed] = useState(true);

    const toggleState = () => {
        setIsListed(!isListed);
    };

    return (
        <div className="toggle-button" onClick={toggleState}>
            <div className={`toggle-option ${!isListed ? 'active' : ''}`}>Sold</div>
            <div className={`toggle-option ${isListed ? 'active' : ''}`}>Listed</div>
        </div>
    );
};

export default ToggleButton;
