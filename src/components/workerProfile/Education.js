import React from 'react';
import Box from "@mui/material/Box";
import H5 from "../Typography/H5";
import H7 from "../Typography/H7";
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Education = ({education}) => {
    return (
        <Box mt={3}>
            <H5
                text={education?.degree_name}
            />
            <H7
                text={education?.institute}
                color='#6B6E6F'
            />

            <Box display='flex' justifyContent='space-between'>
                <Box display='flex'>
                    <EventNoteOutlinedIcon sx={{color: '#0D9CA4'}} fontSize='small'/>
                    <H7
                        text={education?.result}
                        color='#6B6E6F'
                        ml={1}
                    />
                </Box>
                <Box display='flex'>
                    <CalendarMonthIcon sx={{color: '#0D9CA4'}} fontSize='small'/>
                    <H7
                        text={education?.passing_year}
                        color='#6B6E6F'
                        ml={1}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default Education;