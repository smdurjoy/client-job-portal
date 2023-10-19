import React, {useState} from 'react';
import Box from "@mui/material/Box";
import H3 from "../../Typography/H3";
import Button from "@mui/material/Button";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import H6 from "../../Typography/H6";
import JobRoleInsights from "../../Jobs/JobRoleInsights";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import VideoFileIcon from '@mui/icons-material/VideoFile';
import ApplicantsWithProfile from "./ApplicantsWithProfile";
import ApplicantsWithCV from "./ApplicantsWithCV";
import ApplicantsWithVideo from "./ApplicantsWithVideo";
import Typography from "@mui/material/Typography";
import {diffInDays} from "../../../helpers/Helpers";

const PostedJobDetails = ({candidates, job}) => {
    const [activeItem, setActiveItem] = useState(1);
    console.log(job)
    const applicants = [
        {
            name: 'John D Smith',
            phone: '+8801XXXXXX',
            email: 'demo@gmail.com',
            location: 'Berlyn, UK',
            worker_type: 'Worker',
        },
        {
            name: 'John D Smith',
            phone: '+8801XXXXXX',
            email: 'demo@gmail.com',
            location: 'Berlyn, UK',
            worker_type: 'Worker',
        },
        {
            name: 'John D Smith',
            phone: '+8801XXXXXX',
            email: 'demo@gmail.com',
            location: 'Berlyn, UK',
            worker_type: 'Worker',
        },
    ];
    const actionButtons = [
        {
            id: 1,
            icon: <PeopleAltIcon sx={{color: '#0D9CA4'}}/>,
            title: 'Applicants with Profile'
        },
        {
            id: 2,
            icon: <ContactPageIcon sx={{color: '#0D9CA4'}}/>,
            title: 'Applicants with CV'
        },
        {
            id: 3,
            icon: <VideoFileIcon sx={{color: '#0D9CA4'}}/>,
            title: 'Applicants with Video'
        },
    ];

    return (
        <Box className='container' mt={22} mb={12}>
            <Box p={3} boxShadow='0 0 20px 0 rgba(0, 0, 0, 0.05)' borderRadius='7px'>
                <Box display='flex' justifyContent='space-between' alignItems='center'>
                    <Box>
                        <Box display='flex' flexWrap='wrap'>
                            <H3
                                text={`${job?.job_title} -`}
                                color='#0D9CA4'
                            />
                            <H3
                                text={job?.company}
                                ml={1}
                            />
                        </Box>
                        <Box display='flex' mt={2} flexWrap='wrap' columnGap={5}>
                            <Box display='flex' alignItems='center'>
                                <JobRoleInsights
                                    icon={<CalendarTodayOutlinedIcon fontSize='medium'/>}
                                    title='Date posted:'
                                    mt={0}
                                />
                                <H6
                                    text='October 7, 2022'
                                    color='#0D9CA4'
                                    ml={1}
                                />
                            </Box>
                            <Box display='flex' alignItems='center'>
                                <JobRoleInsights
                                    icon={<CalendarTodayOutlinedIcon fontSize='medium'/>}
                                    title='Application Deadline:'
                                    mt={0}
                                />
                                <H6
                                    text={`${diffInDays(new Date().toJSON(), job?.application_deadline)} days left to apply`}
                                    color='#0D9CA4'
                                    ml={1}
                                />
                            </Box>
                        </Box>
                    </Box>
                    <Box display='flex' flexWrap='wrap' columnGap={5}>
                        <Button className='primaryBtnLessPaddingBlue'>
                            <BorderColorOutlinedIcon fontSize='14px'/>
                            <H6
                                text='Edit'
                                color='#0D9CA4'
                                ml={1}
                            />
                        </Button>
                        <Button className='primaryBtnLessPadding'>
                            <H6
                                text='Re-Post'
                                color='white'
                            />
                        </Button>
                    </Box>
                </Box>

                {candidates.length ? (
                    <>
                        <Box mt={7}>
                            <Box display='flex' flexWrap='wrap' columnGap={3} sx={{cursor: 'pointer'}}>
                                {
                                    actionButtons.map((action, key) => (
                                        <Box
                                            display='flex'
                                            columnGap={1}
                                            borderBottom={activeItem === action.id && '1px solid #0D9CA4'}
                                            onClick={() => setActiveItem(action.id)}
                                            key={key}
                                        >
                                            {action.icon}
                                            <H6
                                                text={action.title}
                                                color={activeItem === action.id ? '#0D9CA4' : '#A1A6AB'}
                                            />
                                        </Box>
                                    ))
                                }
                            </Box>
                        </Box>

                        <Box mt={7}>
                            {activeItem === 1 && <ApplicantsWithProfile applicants={applicants}/>}
                            {activeItem === 2 && <ApplicantsWithCV applicants={applicants}/>}
                            {activeItem === 3 && <ApplicantsWithVideo applicants={applicants}/>}
                        </Box>
                    </>
                ) : <Typography mt={5}>No Candidates Found!</Typography>}
            </Box>
        </Box>
    );
};

export default PostedJobDetails;