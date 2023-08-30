import React from 'react';
import Box from "@mui/material/Box";
import H5 from "../Typography/H5";
import H7 from "../Typography/H7";
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Education = () => {
    return (
        <Box mt={3}>
            <H5
                text='Secondary School'
            />
            <H7
                text='Harvard School'
                color='#6B6E6F'
            />

            <Box display='flex' justifyContent='space-between'>
                <Box display='flex'>
                    <EventNoteOutlinedIcon sx={{color: '#0D9CA4'}} fontSize='small'/>
                    <H7
                        text='GPA 5.00'
                        color='#6B6E6F'
                        ml={1}
                    />
                </Box>
                <Box display='flex'>
                    <CalendarMonthIcon sx={{color: '#0D9CA4'}} fontSize='small'/>
                    <H7
                        text='2018'
                        color='#6B6E6F'
                        ml={1}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default Education;