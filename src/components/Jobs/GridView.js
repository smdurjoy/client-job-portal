import React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import IconButton from "@mui/material/IconButton";
import companyLogo from '../../assets/images/home/airBnb.png';
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import TypoBadge from "../common/TypoBadge";
import {isAppliedToJob} from "../../helpers/Helpers";

const GridView = ({job, appliedJobs, handleJobApply, isApplyJobLoading, isAppliedJobList = false}) => {
    return (
        <Card sx={{borderRadius: '10px', padding: '20px', borderTop: '1px solid #D4D4D4'}}>
            <CardContent>
                <Box display='flex' justifyContent='space-between' alignItems='start'>
                    <img src={job ? job.company_logo : companyLogo} alt="company" width='80px'/>
                    <IconButton aria-label="bookmark" size="large"
                                sx={{border: '1px solid #F28A1F', color: '#F28A1F'}}>
                        <BookmarkOutlinedIcon/>
                    </IconButton>
                </Box>
                <Box mt={3}>
                    <Typography color="text.secondary">
                        {job ? job.company_name : 'Airbnb'}
                    </Typography>
                    <Typography
                        variant='h5'
                        color='black'
                        fontSize={{
                            lg: 26,
                            md: 22,
                            sm: 18,
                            xs: 14
                        }}
                    >
                        {job ? job.job_title : 'Product Designer'}
                    </Typography>
                </Box>
                <Box display='flex' mt={2}>
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
                </Box>

                <Box display='flex' mt={2} alignItems='center' justifyContent='space-between' flexWrap='wrap'>
                    <Typography bgcolor='#f7f7f8' color='#6b6e6f' width='fit-content' variant="caption"
                                p={1} display='flex' alignItems='center'>
                        {job ? `$ ${job.salary_range} / ${job.salary_type}` : '$ 2000-2500 / Month'}
                    </Typography>
                    <Typography color='#6b6e6f' width='fit-content' variant="caption">
                        148 days left to apply
                    </Typography>
                </Box>
                <Typography variant="caption">
                    Yorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio mattis....
                </Typography>
            </CardContent>
            <CardActions>
                <Button fullWidth size='large' variant='outlined' className='secondaryBtnBlue'>
                    <Link to={job ? `/job-details/${job.id}` : '#'}>
                        View More
                    </Link>
                </Button>
                {
                    isAppliedJobList ? (
                        <Button
                            fullWidth
                            size='large'
                            className='primaryBtn'
                            sx={{background: '#e7e7e7 !important', color: '#9f9f9f !important'}}
                            disabled={true}
                        >
                            Applied
                        </Button>
                    ) : (
                        isAppliedToJob(appliedJobs, job?.id) ? (
                            <Button
                                fullWidth
                                size='large'
                                className='primaryBtn'
                                sx={{background: '#e7e7e7 !important', color: '#9f9f9f !important'}}
                                disabled={true}
                            >
                                Applied
                            </Button>
                        ) : (
                            <Button
                                fullWidth
                                size='large'
                                className='primaryBtn'
                                onClick={() => handleJobApply(job?.id)}
                                disabled={isApplyJobLoading}
                            >
                                {isApplyJobLoading ? 'Applying...' : 'Apply Now'}
                            </Button>
                        )

                    )
                }
            </CardActions>
        </Card>
    );
};

export default GridView;