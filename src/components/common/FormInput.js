import React from 'react';
import {InputAdornment, TextField} from "@mui/material";
import Box from "@mui/material/Box";

const FormInput = ({placeholder, icon, inputType = 'text', handleChange}) => {
    return (
        <Box sx={{border: '1px solid #D4D4D4'}} mt={2}>
            <TextField
                hiddenLabel
                type={inputType}
                placeholder={placeholder}
                sx={{
                    backgroundColor: 'white',
                    height: 'inherit',
                    width: '100%',
                    "& fieldset": {
                        border: "none",
                    }
                }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            {icon}
                        </InputAdornment>
                    ),
                }}
                onChange={(e) => handleChange(e)}
            />
        </Box>
    );
};

export default FormInput;