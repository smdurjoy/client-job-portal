import React from 'react';
import Select from "react-select";

const ReactSelect = ({options, placeholder}) => {
    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            background: '#fff',
            borderColor: '#9e9e9e',
            minHeight: '40px',
            height: '40px',
            boxShadow: state.isFocused ? null : null,
        }),

        valueContainer: (provided, state) => ({
            ...provided,
            height: '40px',
            padding: '0 6px'
        }),

        input: (provided, state) => ({
            ...provided,
            margin: '0px',
        }),
        indicatorSeparator: state => ({
            display: 'none',
        }),
        indicatorsContainer: (provided, state) => ({
            ...provided,
            height: '40px',
        }),
    };

    return (
        <Select
            options={options}
            styles={customStyles}
            placeholder={placeholder}
        />
    );
};

export default ReactSelect;