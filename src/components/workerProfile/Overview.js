import React from 'react';
import Box from "@mui/material/Box";
import H4 from "../Typography/H4";
import H6 from "../Typography/H6";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import WorkExperience from "./WorkExperience";
import Education from "./Education";

const Overview = () => {
    const skills = [
        'Blueprint Reading',
        'Trade Skills',
        'Equipment Operation',
        'Teamwork',
        'Material Handling',
        'Tool Proficiency',
        'Mechanical Knowledge',
    ]

    return (
        <Box mt={5}>
            <H4
                text='About Yourself'
                color='#0D9CA4'
            />
            <H6
                text='Borem ipsum dolor sit amet, consectetur adipiscing elit.'
                mt={2}
            />

            <Box my={4}>
                <Divider/>
            </Box>

            <H4
                text='Skills'
                color='#0D9CA4'
            />

            <Box display='flex' flexWrap='wrap' mt={2}>
                {
                    skills?.map(skill => (
                        <Typography
                            bgcolor='#eaecec'
                            color='#2B3940'
                            width='fit-content'
                            variant="caption"
                            fontSize='16px'
                            borderRadius='5px'
                            p={1} mr={2} mb={2}
                        >
                            {skill}
                        </Typography>
                    ))
                }
            </Box>

            <Box my={4}>
                <Divider/>
            </Box>

            <H4
                text='Work Experience'
                color='#0D9CA4'
            />

            <WorkExperience/>

            <Box my={4}>
                <Divider/>
            </Box>

            <H4
                text='Education'
                color='#0D9CA4'
            />

            <Education/>
        </Box>
    );
};

export default Overview;