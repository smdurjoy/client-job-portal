import React from 'react';
import Typography from "@mui/material/Typography";

const TypoBadge = ({icon, text, color, bgColor}) => {
    return (
        <Typography
            bgcolor={bgColor}
            color={color}
            width='fit-content'
            variant="caption"
            display='flex'
            alignItems='center'
            mr={3}
            mb={1}
            borderRadius={2}
            sx={{padding: {lg: '11px', md: '9px', sm: '7px', xs: '5px 8px'}}}
        >
            {icon}&nbsp;
            {text}
        </Typography>
    );
};

export default TypoBadge;