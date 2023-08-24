import React from 'react';
import Typography from "@mui/material/Typography";

const H6 = ({text, color = 'black', mt = 0}) => {
    return (
        <Typography
            variant='h6'
            color={color}
            fontSize={{
                lg: 18,
                md: 16,
                sm: 14,
                xs: 12
            }}
            mt={mt}
        >
            {text}
        </Typography>
    );
};

export default H6;