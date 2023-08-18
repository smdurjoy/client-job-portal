import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const SectionTitle = ({title, subTitle}) => {
    return (
        <Box display='flex' justifyContent='space-between' alignItems='center'>
            <Typography
                variant='h4'
                fontWeight='bold'
                fontSize={{
                    lg: 32,
                    md: 28,
                    sm: 24,
                    xs: 18
                }}
            >
                {title}
            </Typography>
            <Typography
                variant='h5'
                color='#6B6E6F'
                fontSize={{
                    lg: 26,
                    md: 22,
                    sm: 18,
                    xs: 14
                }}
            >
                {subTitle}
            </Typography>
        </Box>
    );
};

export default SectionTitle;