import React from 'react';
import '../../assets/css/checkbox.css';

const Checkbox = ({id, title}) => {
    return (
        <div className="form-check py-1">
            <input className="form-check-input"
                   type="checkbox"
                   value=""
                   id={id}
            />
            <label className="form-check-label" htmlFor={id}>
                {title}
            </label>
        </div>
    );
};

export default Checkbox;