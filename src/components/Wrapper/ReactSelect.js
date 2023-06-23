import React, {useEffect, useState} from 'react';
import Select from "react-select";

const ReactSelect = ({options, placeholder, onChange, required, isMulti}) => {
    const [height, setHeight] = useState('40px');
    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            background: '#fff',
            borderColor: '#9e9e9e',
            minHeight: height,
            height,
            boxShadow: state.isFocused ? null : null,
        }),
        menuList: styles => ({
            ...styles,
            color: 'black'
        }),
        valueContainer: (provided, state) => ({
            ...provided,
            height,
            padding: '0 3px',
            margin: '-7px 0 0 0',
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
            height,
        }),
        fontFamily: 'Poppins, sans-serif, FontAwesome'
    };

    useEffect(() => {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            setHeight('30px');
        }
    }, [])

    return (
        <Select
            options={options}
            styles={customStyles}
            placeholder={placeholder}
            isSearchable={false}
            onChange={onChange}
            required={required}
            isMulti={isMulti}
        />
    );
};

export default ReactSelect;