import React, {useEffect} from 'react';
import Box from "@mui/material/Box";
import {Button, Grid, Stack, Typography} from "@mui/material";
import ListHeader from "./ListHeader";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SaveAsOutlinedIcon from '@mui/icons-material/SaveAsOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import JobRoleInsights from "./JobRoleInsights";
import TypoBadge from "../common/TypoBadge";
import H3 from "../Typography/H3";
import H4 from "../Typography/H4";
import H6 from "../Typography/H6";
import UlList from "../common/UlList";
import GridView from "./GridView";
import CompanyImg from '../../assets/images/home/companyImg.png'
import moment from "moment";
import {useAppSelector} from "../../app/hooks";
import {useNavigate, useParams} from "react-router-dom";
import useWorkerManger from "../../app/customHooks/useWorkerManger";
import {toast} from "react-toastify";

const JobDetails = ({job}) => {
    const {token, user_id} = useAppSelector((state) => state.app);
    const navigate = useNavigate();
    const {isApplyJobLoading, isApplyJobSuccess, applyJobResponse, applyToJob}  = useWorkerManger();
    const {id: jobId} = useParams();

    const handleJobApply = () => {
        if (!token) {
            navigate('/login');
            return;
        }
        applyToJob(jobId, user_id);
    }

    useEffect(() => {
        if (isApplyJobSuccess) {
            const {status, message} = applyJobResponse;
            if (status === 0) {
                toast.warning(message);
                return;
            }
            toast.success('Applied Successfully.');
            console.log(applyJobResponse);
        }
    }, [isApplyJobSuccess]);

    return (
        <Box className='container' mt={16}>
            <Grid container px={2} spacing={5} my={5}>
                <Grid item xs={12} md={8}>
                    <ListHeader job={job}/>
                    <Box mt={3} display='flex' flexWrap='wrap'>
                        <TypoBadge
                            icon={<LocationOnOutlinedIcon fontSize='small'/>}
                            text={job ? `${job.city}, ${job.state}` : 'Berlyn'}
                            color='#0D9CA4'
                            bgColor='#F3FAFA'
                        />
                        <TypoBadge
                            icon={<BusinessCenterIcon fontSize='small'/>}
                            text={job ? job.job_type : 'Full Time'}
                            color='#FF5656'
                            bgColor='#fff6f6'
                        />
                        <TypoBadge
                            icon={<SaveAsOutlinedIcon fontSize='small'/>}
                            text='Permanent'
                            color='#F28A1F'
                            bgColor='#fff6f6'
                        />
                        <TypoBadge
                            icon={<RoomOutlinedIcon fontSize='small'/>}
                            text={job ? job.work_place : 'Work at Site'}
                            color='#2B3940'
                            bgColor='#fff6f6'
                        />
                    </Box>

                    <Box borderTop='1px solid #D4D4D4' py={3} mt={4}>
                        <H3 text='Job Role Insights'/>
                        <Grid container spacing={2}>
                            <Grid item md={4}>
                                <JobRoleInsights
                                    icon={<CalendarTodayOutlinedIcon fontSize='large'/>}
                                    title='Date posted'
                                    subTitle={job?.created_at ? moment(job.created_at).format('MMMM Do YYYY') : ''}
                                />
                                <JobRoleInsights
                                    icon={<EventNoteOutlinedIcon fontSize='large'/>}
                                    title='Experience'
                                    subTitle={job ? job.experience_requirements : ''}
                                />
                            </Grid>
                            <Grid item md={4}>
                                <JobRoleInsights
                                    icon={<CalendarTodayOutlinedIcon fontSize='large'/>}
                                    title='Application Deadline'
                                    subTitle={job ? moment(job.application_deadline).format('MMMM Do YYYY') : ''}
                                />
                                <JobRoleInsights
                                    icon={<BusinessCenterOutlinedIcon fontSize='large'/>}
                                    title='Job Type'
                                    subTitle={job ? job.job_type : ''}
                                />
                            </Grid>
                            <Grid item md={4}>
                                <JobRoleInsights
                                    icon={<MonetizationOnOutlinedIcon fontSize='large'/>}
                                    title='Salary'
                                    subTitle={job ? job.salary_range : ''}
                                />
                                <JobRoleInsights
                                    icon={<GroupsOutlinedIcon fontSize='large'/>}
                                    title='Vacancy'
                                    subTitle={job ? job.no_of_vacancies : ''}
                                />
                            </Grid>
                        </Grid>
                    </Box>

                    <Box borderTop='1px solid #D4D4D4' py={3} mt={4}>
                        <H3 text='Description'/>

                        <H4 text='About Job' mt={5}/>
                        <H6
                            text={job ? job.job_description : ''}
                            mt={3}
                        />

                        <H4 text='Responsibilities' mt={5}/>
                        <H6
                            text={job ? job.job_responsibilities : ''}
                            mt={3}
                        />

                        <H4 text='Skill Requirements' mt={5}/>
                        <UlList items={job ? job.skills_requirements : []} objKey='skill_name'/>

                        <H4 text='Education Qualification' mt={5}/>
                        <H6
                            text={job ? job.degree_requirements : ''}
                            mt={3}
                        />

                        <H4 text='Age & Gender' mt={5}/>
                        <H6
                            text={`${job?.age_require_minimum} - ${job?.age_require_maximum} years old`}
                            mt={3}
                        />

                        <H4 text='Benefits' mt={5}/>
                        <UlList items={job ? job.benefits : []} objKey='benefit_name'/>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack
                        direction='column'
                        spacing={2}
                        justifyContent='center'
                        alignItems='center'
                        border='1px solid #D4D4D4'
                        borderRadius='7px'
                        padding='20px'
                        bgcolor='#FAFAFA'
                        mb={4}
                    >
                        <H3 text='Interested in this job?'/>
                        <Typography color="#6B6E6F">
                            <span style={{color: '#0D9CA4'}}>148</span> Days left to apply
                        </Typography>
                        <Button
                            className='primaryBtn'
                            fullWidth
                            onClick={handleJobApply}
                            disabled={isApplyJobLoading}
                        >
                            {isApplyJobLoading ? 'Applying...' : 'Apply to this job'}
                        </Button>
                    </Stack>
                    <Stack
                        direction='column'
                        spacing={3}
                        borderRadius='7px'
                        padding='20px'
                        bgcolor='#FAFAFA'
                    >
                        <Stack direction='row' spacing={2} alignItems='center'>
                            <img src={job ? job.company_logo : CompanyImg} alt="companyLogo" width='80px'/>
                            <Stack direction='column' spacing={0}>
                                <Typography color='#6B6E6F' fontSize='30px'>{job ? job.company : 'Airbnb'}</Typography>
                                <Typography color='#F28A1F'>View Company Profile</Typography>
                            </Stack>
                        </Stack>
                        <Stack direction='row' spacing={2} alignItems='center'>
                            <Typography color='#F28A1F'>Overview</Typography>
                            <Typography>Jobs (10)</Typography>
                        </Stack>
                        <Typography>
                            {job?.about_company}
                        </Typography>
                        <Stack direction='column' spacing={2}>
                            <Stack direction='row' spacing={2} justifyContent='space-between'>
                                <Typography color='#0D9CA4'>Industry Type</Typography>
                                <Typography color='#6B6E6F'></Typography>
                            </Stack>
                            <Stack direction='row' spacing={2} justifyContent='space-between'>
                                <Typography color='#0D9CA4'>Website</Typography>
                                <Typography color='#6B6E6F'>{job?.company_website}</Typography>
                            </Stack>
                            <Stack direction='row' spacing={2} justifyContent='space-between'>
                                <Typography color='#0D9CA4'>Location</Typography>
                                <Typography color='#6B6E6F'>{job?.company_location}</Typography>
                            </Stack>
                            <Stack direction='row' spacing={2} justifyContent='space-between'>
                                <Typography color='#0D9CA4'>Company Size</Typography>
                                <Typography color='#6B6E6F'>{job?.company_size}</Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>

            <H3 text='Similar Jobs' mt={5}/>
            <Grid container columnSpacing={2} mb={10}>
                <Grid item xs={12} md={4} mt={4}>
                    <GridView/>
                </Grid>
                <Grid item xs={12} md={4} mt={4}>
                    <GridView/>
                </Grid>
                <Grid item xs={12} md={4} mt={4}>
                    <GridView/>
                </Grid>
            </Grid>
        </Box>
    );
};

export default JobDetails;