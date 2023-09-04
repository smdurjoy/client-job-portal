import React from 'react';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import H6 from "../Typography/H6";

const JobRoleInsights = ({icon, title, subTitle, mt = 3}) => {
    return (
        <Box display='flex' alignItems='center' mt={mt}>
            <Typography
                bgcolor='#F3FAFA'
                color='#0D9CA4'
                width='fit-content'
                variant="caption"
                display='flex'
                alignItems='center'
                sx={{padding: {lg: '10px', md: '7px', sm: '5px', xs: '3px'}}}
                fontSize={{
                    lg: 40,
                    md: 36,
                    sm: 32,
                    xs: 28
                }}
            >
                {icon}
            </Typography>
            <Box ml={2}>
                <H6 color='#6B6E6F' text={title} />
                <H6 color='#6B6E6F' text={subTitle} />
            </Box>
        </Box>
    );
};

export default JobRoleInsights;