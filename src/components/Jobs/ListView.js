import React from 'react';
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import {Link} from "react-router-dom";
import ListHeader from "./ListHeader";
import TypoBadge from "../common/TypoBadge";
import {isAppliedToJob} from "../../helpers/Helpers";

const ListView = ({job, appliedJobs, handleJobApply, isApplyJobLoading}) => {
    return (
        <Box mt={3}>
            <Card
                sx={{
                    borderRadius: '10px',
                    padding: {lg: '20px', md: '18px', sm: '16px', xs: '2px'},
                    borderTop: '1px solid #D4D4D4'
                }}
            >
                <CardContent>
                    <ListHeader job={job}/>

                    <Box display='flex' justifyContent='space-between'>
                        <Box display='flex' mt={2}>
                            <TypoBadge
                                icon={<LocationOnOutlinedIcon fontSize='small'/>}
                                text={job ? `${job.job_address}` : 'Berlyn'}
                                color='#0D9CA4'
                                bgColor='#F3FAFA'
                            />
                            <TypoBadge
                                icon={<BusinessCenterIcon fontSize='small'/>}
                                text={job ? job.job_type : 'Full Time'}
                                color='#FF5656'
                                bgColor='#fff6f6'
                            />
                        </Box>
                        <Box
                            display='flex'
                            alignItems='center'
                            marginTop={{
                                xs: '10px'
                            }}
                        >
                            <Typography
                                color="text.secondary"
                                mr={1}
                            >
                                148 days left to apply
                            </Typography>
                            <AccessTimeOutlinedIcon/>
                        </Box>
                    </Box>

                    <Box display='flex' mt={2} alignItems='center' justifyContent='space-between' flexWrap='wrap'>
                        <Typography
                            bgcolor='#f7f7f8'
                            color='#6b6e6f'
                            width='fit-content'
                            variant="caption"
                            sx={{padding: {lg: '10px', md: '7px', sm: '5px', xs: '3px'}}}
                        >
                            {job ? `$ ${job.salary_range} / ${job.salary_type}` : '$ 2000-2500 / Month'}
                        </Typography>
                        <Box>
                            <Button size='large' variant='outlined' className='secondaryBtnBlue'>
                                <Link to={job ? `/job-details/${job.id}` : '#'}>
                                    View More
                                </Link>
                            </Button>
                            {
                                isAppliedToJob(appliedJobs, job?.id) ? (
                                    <Button
                                        size='large'
                                        className='primaryBtn'
                                        sx={{
                                            background: '#e7e7e7 !important',
                                            color: '#9f9f9f !important',
                                            marginLeft: '10px'
                                        }}
                                        disabled={true}
                                    >
                                        Applied
                                    </Button>
                                ) : (
                                    <Button
                                        size='large'
                                        className='primaryBtn'
                                        sx={{marginLeft: '10px'}}
                                        onClick={() => handleJobApply(job?.id)}
                                        disabled={isApplyJobLoading}
                                    >
                                        {isApplyJobLoading ? 'Applying...' : 'Apply Now'}
                                    </Button>
                                )
                            }
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default ListView;