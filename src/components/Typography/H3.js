import React from 'react';
import Typography from "@mui/material/Typography";

const H3 = ({text, color = 'black', mt = 0}) => {
    return (
        <Typography
            variant='h3'
            color={color}
            fontSize={{
                lg: 28,
                md: 26,
                sm: 24,
                xs: 22
            }}
            mt={mt}
        >
            {text}
        </Typography>
    );
};

export default H3;