import React from 'react';
import Box from "@mui/material/Box";
import H3 from "../../Typography/H3";
import totalJobImg from '../../../assets/images/company/dashboard/basil_bag-solid.svg';
import runningJobs from '../../../assets/images/company/dashboard/ic_round-work-history.svg';
import expiredJobs from '../../../assets/images/company/dashboard/material-symbols_work-update-rounded.svg';
import H5 from "../../Typography/H5";
import {Grid} from "@mui/material";
import RecentJobs from "./RecentJobs";
import ExperiedJobs from "./ExperiedJobs";

const Index = () => {
    const overviews = [
        {
            title: 'Total Job',
            count: 20,
            image: totalJobImg,
            color: '#F28A1F',
            bgColor: '#f9efe4',
        },
        {
            title: 'Running Job',
            count: 10,
            image: runningJobs,
            color: '#0D9CA4',
            bgColor: '#e2f1f1',
        },
        {
            title: 'Expired Job',
            count: 5,
            image: expiredJobs,
            color: '#FF5656',
            bgColor: '#faeaea',
        },
    ]

    const jobs = [
        {
            job_title: 'Senior Project Manager',
            job_type: 'Full-time',
            location: 'Berlyn, UK',
            salary: '2000-2500 / Month',
            total_applicants: '20',
        },
        {
            job_title: 'Senior Project Manager',
            job_type: 'Full-time',
            location: 'Berlyn, UK',
            salary: '2000-2500 / Month',
            total_applicants: '20',
        },
        {
            job_title: 'Senior Project Manager',
            job_type: 'Full-time',
            location: 'Berlyn, UK',
            salary: '2000-2500 / Month',
            total_applicants: '20',
        },
    ]

    return (
        <Box className='container' mt={16} mb={4}>
            <Box py={6}>
                <H3
                    text='Job Overview'
                    fontWeight='bold'
                />

                <Grid container columnSpacing={4} mt={4}>
                    {
                        overviews.map((item, key) => (
                            <Grid item xs={12} md={4} mb={2} key={key}>
                                <Box border={`1px solid ${item.color}`} borderRadius='7px' p={2}>
                                    <Box display='flex' alignItems='center'>
                                        <Box bgcolor={item.bgColor} borderRadius='50%' p={1}>
                                            <img src={item.image} alt='totalJobs'/>
                                        </Box>
                                        <Box ml={3}>
                                            <H3
                                                text={item.count}
                                                color={item.color}
                                                fontWeight='bold'
                                            />
                                            <H5
                                                text={item.title}
                                                color='#6B6E6F'
                                                mt={1}
                                            />
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
            <RecentJobs jobs={jobs}/>
            <ExperiedJobs jobs={jobs}/>
        </Box>
    );
};

export default Index;