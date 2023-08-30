import React from 'react';
import Box from "@mui/material/Box";
import H5 from "../Typography/H5";
import H6 from "../Typography/H6";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import H7 from "../Typography/H7";

const WorkExperience = () => {
    return (
        <Box mt={3}>
            <Box display='flex' justifyContent='space-between'>
                <Box>
                    <H5
                        text='General Worker'
                    />
                    <H7
                        text='AD Construction Ltd.'
                        color='#6B6E6F'
                    />
                </Box>
                <Box display='flex'>
                    <BusinessCenterIcon sx={{color: '#0D9CA4'}} fontSize='small'/>
                    <H7
                        text='Jun 2017 - April 2020'
                        color='#6B6E6F'
                        ml={1}
                    />
                </Box>
            </Box>
            <Box mt={3}>
                <H5
                    text='Responsibilities'
                />
                <ul>
                    <li>Clearing and leveling the construction area.</li>
                    <li>Unloading, transporting, and distributing construction materials.</li>
                    <li>Assisting skilled tradespeople during construction tasks.</li>
                </ul>
            </Box>
        </Box>
    );
};

export default WorkExperience;