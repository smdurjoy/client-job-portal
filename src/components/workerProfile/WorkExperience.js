import React from 'react';
import Box from "@mui/material/Box";
import H5 from "../Typography/H5";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import H7 from "../Typography/H7";

const WorkExperience = ({experience}) => {
    return (
        <Box mt={3}>
            <Box display='flex' justifyContent='space-between'>
                <Box>
                    <H5
                        text={experience?.designation}
                    />
                    <H7
                        text={experience?.company_name}
                        color='#6B6E6F'
                    />
                </Box>
                <Box display='flex'>
                    <BusinessCenterIcon sx={{color: '#0D9CA4'}} fontSize='small'/>
                    <H7
                        text={`${experience?.start_at+'-' ?? ''} ${experience?.end_date}`}
                        color='#6B6E6F'
                        ml={1}
                    />
                </Box>
            </Box>
            <Box mt={3}>
                <H5
                    text='Responsibilities'
                />
                <H7
                    text={experience?.responsibilities}
                    color='#6B6E6F'
                    ml={1}
                />
            </Box>
        </Box>
    );
};

export default WorkExperience;