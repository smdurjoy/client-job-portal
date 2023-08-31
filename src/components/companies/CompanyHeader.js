import React from 'react';
import Box from "@mui/material/Box";
import H3 from "../Typography/H3";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import H7 from "../Typography/H7";

const CompanyHeader = ({image, companyName, category}) => {
    return (
        <Box display='flex' alignItems='center'>
            <img src={image} alt="companyLogo" width='100px'/>
            <Box ml={2}>
                <Box display='flex' alignItems='center'>
                    <H3
                        text={companyName}
                    />
                    <CheckCircleIcon sx={{color: '#17B017', marginLeft: '5px'}}/>
                </Box>
                <H7
                    text={category}
                    color='#0D9CA4'
                    mt={0.5}
                />
            </Box>
        </Box>
    );
};

export default CompanyHeader;