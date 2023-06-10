import React, {useState} from 'react';

const RadioButton = ({id, name, title, onChange}) => {
    const [checked, setChecked] = useState(false);
    const handleChange = () => {
        setChecked(!checked);
    }
    return (
        <div className="form-check">
            <input className="form-check-input"
                   type="radio"
                   name={name}
                   id={id}
                   checked={checked}
                   onChange={handleChange}
            />
            <label className="form-check-label" htmlFor={id}>
                {title}
            </label>
        </div>
    );
};

export default RadioButton;