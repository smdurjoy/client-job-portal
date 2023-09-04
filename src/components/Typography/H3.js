import React from 'react';
import Typography from "@mui/material/Typography";

const H3 = ({text, color = 'black', mt = 0, ml = 0, fontWeight = 'normal'}) => {
    return (
        <Typography
            variant='h3'
            color={color}
            fontWeight={fontWeight}
            fontSize={{
                lg: 28,
                md: 26,
                sm: 24,
                xs: 22
            }}
            mt={mt}
            ml={ml}
        >
            {text}
        </Typography>
    );
};

export default H3;