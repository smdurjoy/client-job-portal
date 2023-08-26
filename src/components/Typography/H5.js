import React from 'react';
import Typography from "@mui/material/Typography";

const H5 = ({text, color = 'black', mt = 0}) => {
    return (
        <Typography
            variant='h5'
            color={color}
            fontSize={{
                lg: 20,
                md: 18,
                sm: 16,
                xs: 14
            }}
            mt={mt}
        >
            {text}
        </Typography>
    );
};

export default H5;