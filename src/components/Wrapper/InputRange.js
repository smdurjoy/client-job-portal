import React from 'react';
import '../../assets/css/inputRange.css';

const InputRange = () => {
    return (
        <div>
            <label htmlFor="mileRange" className="form-label rangeLabel">Radius: 50 miles</label>
            <input type="range" className="form-range" id="mileRange" />
        </div>
    );
};

export default InputRange;