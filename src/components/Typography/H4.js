import React from 'react';
import Typography from "@mui/material/Typography";

const H4 = ({text, color = 'black', mt = 0, fontWeight = 'normal'}) => {
    return (
        <Typography
            variant='h4'
            color={color}
            fontWeight={fontWeight}
            fontSize={{
                lg: 24,
                md: 22,
                sm: 18,
                xs: 16
            }}
            mt={mt}
        >
            {text}
        </Typography>
    );
};

export default H4;