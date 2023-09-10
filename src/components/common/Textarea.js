import React from 'react';
import {TextField} from "@mui/material";

const Textarea = ({placeholder, row, handleChange}) => {
    return (
        <TextField
            placeholder={placeholder}
            multiline
            rows={row}
            sx={{
                marginTop: '1rem',
                '&:hover': {
                    borderColor: 'transparent',
                },
                '&:focus': {
                    borderColor: 'transparent',
                },
            }}
            fullWidth
            onChange={handleChange}
        />
    );
};

export default Textarea;