import React from 'react';
import Typography from "@mui/material/Typography";

const H7 = ({text, color = 'black', mt = 0, ml = 0, fontWeight = 'normal'}) => {
    return (
        <Typography
            variant='h6'
            color={color}
            fontWeight={fontWeight}
            fontSize={{
                lg: 14,
                md: 13,
                sm: 12,
                xs: 11
            }}
            mt={mt}
            ml={ml}
        >
            {text}
        </Typography>
    );
};

export default H7;