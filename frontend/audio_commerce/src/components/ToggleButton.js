import React, { useState } from 'react';
import '../styles/ToggleButton.css';

const ToggleButton = (props) => {
    const [isListed, setIsListed] = useState(true);

    const toggleState = () => {
        setIsListed(!isListed);
    };

    return (
        <div className="toggle-button" onClick={toggleState}>
            <div className={`toggle-option ${!isListed ? 'active' : ''}`}>{props.first}</div>
            <div className={`toggle-option ${isListed ? 'active' : ''}`}>{props.second}</div>
        </div>
    );
};

export default ToggleButton;
