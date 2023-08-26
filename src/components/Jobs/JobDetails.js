import React from 'react';
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

const JobDetails = () => {
    const responsibilities = [
        'Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.',
        'Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.',
        'Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.',
        'Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.',
    ];
    const educations = [
        'Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.'
    ];
    const benefits = [
        'Travel Allowance',
        'Travel Allowance',
        'Travel Allowance',
    ];


    return (
        <Box className='container' mt={16}>
            <Grid container px={2} spacing={5} my={5}>
                <Grid item xs={12} md={8}>
                    <ListHeader/>
                    <Box mt={3} display='flex' flexWrap='wrap'>
                        <TypoBadge
                            icon={<LocationOnOutlinedIcon fontSize='small'/>}
                            text='Berlyn'
                            color='#0D9CA4'
                            bgColor='#F3FAFA'
                        />
                        <TypoBadge
                            icon={<BusinessCenterIcon fontSize='small'/>}
                            text='Full Time'
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
                            text='Work at Site'
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
                                    subTitle='October 7, 2022'
                                />
                                <JobRoleInsights
                                    icon={<EventNoteOutlinedIcon fontSize='large'/>}
                                    title='Experience'
                                    subTitle='3-5 Years'
                                />
                            </Grid>
                            <Grid item md={4}>
                                <JobRoleInsights
                                    icon={<CalendarTodayOutlinedIcon fontSize='large'/>}
                                    title='Application Deadline'
                                    subTitle='October 27, 2022'
                                />
                                <JobRoleInsights
                                    icon={<BusinessCenterOutlinedIcon fontSize='large'/>}
                                    title='Job Type'
                                    subTitle='Full-time'
                                />
                            </Grid>
                            <Grid item md={4}>
                                <JobRoleInsights
                                    icon={<MonetizationOnOutlinedIcon fontSize='large'/>}
                                    title='Salary'
                                    subTitle='$2000 - $2500'
                                />
                                <JobRoleInsights
                                    icon={<GroupsOutlinedIcon fontSize='large'/>}
                                    title='Vacancy'
                                    subTitle='02'
                                />
                            </Grid>
                        </Grid>
                    </Box>

                    <Box borderTop='1px solid #D4D4D4' py={3} mt={4}>
                        <H3 text='Description'/>

                        <H4 text='About Job' mt={5}/>
                        <H6
                            text='Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.'
                            mt={3}
                        />

                        <H4 text='Responsibilities' mt={5}/>
                        <UlList items={responsibilities}/>

                        <H4 text='Skill Requirements' mt={5}/>
                        <H6
                            text='Teamwork and Collaboration, Adaptability'
                            mt={3}
                        />

                        <H4 text='Education Qualification' mt={5}/>
                        <UlList items={educations}/>

                        <H4 text='Age & Gender' mt={5}/>
                        <H6
                            text='20 - 25 Years Old'
                            mt={3}
                        />

                        <H4 text='Benefits' mt={5}/>
                        <UlList items={benefits}/>
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
                        <Button className='primaryBtn' fullWidth>
                            Apply to this job
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
                            <img src={CompanyImg} alt="" />
                            <Stack direction='column' spacing={0}>
                                <Typography color='#6B6E6F' fontSize='30px'>Airbnb</Typography>
                                <Typography color='#F28A1F'>View Company Profile</Typography>
                            </Stack>
                        </Stack>
                        <Stack direction='row' spacing={2} alignItems='center'>
                            <Typography color='#F28A1F'>Overview</Typography>
                            <Typography>Jobs (10)</Typography>
                        </Stack>
                        <Typography>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sed nulla suscipit voluptate deleniti ipsam laudantium praesentium omnis. Reprehenderit itaque odio aliquid vitae velit aliquam nobis deleniti ea ratione suscipit.
                        </Typography>
                        <Stack direction='column' spacing={2}>
                            <Stack direction='row' spacing={2} justifyContent='space-between'>
                                <Typography color='#0D9CA4'>Industry Type</Typography>
                                <Typography color='#6B6E6F'>Residential construction</Typography>
                            </Stack>
                            <Stack direction='row' spacing={2} justifyContent='space-between'>
                                <Typography color='#0D9CA4'>Website</Typography>
                                <Typography color='#6B6E6F'>Residential construction</Typography>
                            </Stack>
                            <Stack direction='row' spacing={2} justifyContent='space-between'>
                                <Typography color='#0D9CA4'>Location</Typography>
                                <Typography color='#6B6E6F'>Residential construction</Typography>
                            </Stack>
                            <Stack direction='row' spacing={2} justifyContent='space-between'>
                                <Typography color='#0D9CA4'>Company Size</Typography>
                                <Typography color='#6B6E6F'>Residential construction</Typography>
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