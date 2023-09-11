import React from 'react';
import Box from "@mui/material/Box";
import H4 from "../Typography/H4";
import H6 from "../Typography/H6";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import WorkExperience from "./WorkExperience";
import Education from "./Education";

const Overview = ({profile}) => {
    return (
        <Box mt={4}>
            <H4
                text='About Yourself'
                color='#0D9CA4'
            />
            <H6
                text={profile?.professional_description}
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
                    profile?.skill_set?.map((skill, idx) => (
                        <Typography
                            bgcolor='#eaecec'
                            color='#2B3940'
                            width='fit-content'
                            variant="caption"
                            borderRadius='5px'
                            p={1} mr={2} mb={2}
                            fontSize={{
                                lg: 16,
                                md: 15,
                                sm: 14,
                                xs: 12
                            }}
                            key={idx}
                        >
                            {skill.skill_name}
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

            {
                profile?.employment_history?.map((experience, idx) => (
                    <WorkExperience experience={experience} key={idx}/>
                ))
            }

            <Box my={4}>
                <Divider/>
            </Box>

            <H4
                text='Education'
                color='#0D9CA4'
            />

            {
                profile?.educations?.map((education, idx) => (
                    <Education education={education} key={idx}/>
                ))
            }
        </Box>
    );
};

export default Overview;