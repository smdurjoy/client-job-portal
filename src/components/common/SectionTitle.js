import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const SectionTitle = ({title, subTitle}) => {
    return (
        <Box display='flex' justifyContent='space-between' alignItems='center'>
            <Typography variant='h4' fontWeight='bold'>
                {title}
            </Typography>
            <Typography variant='h5' color='#6B6E6F'>
                {subTitle}
            </Typography>
        </Box>
    );
};

export default SectionTitle;