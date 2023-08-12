import React from 'react';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from "@mui/material/Typography";
import {Grid} from "@mui/material";
import companyLogo from '../../assets/images/home/airBnb.png';
import IconButton from "@mui/material/IconButton";
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

const FeaturedJobs = () => {
    return (
        <div className='container' style={{backgroundColor: '#2B3940'}}>
            <Box py={8}>
                <Box display='flex' justifyContent='space-between' alignItems='center'>
                    <Typography variant='h5' color='white'>
                        Featured Jobs
                    </Typography>
                    <Button variant='outlined' className='secondaryBtnWhite'>
                        Explore All
                    </Button>
                </Box>

                <Grid container my={5} columnSpacing={5}>
                    <Grid item xs={6} md={4} mt={4}>
                        <Card style={{ borderRadius: '10px', padding: '20px' }}>
                            <CardContent>
                                <Box display='flex' justifyContent='space-between' alignItems='start'>
                                    <img src={companyLogo} alt="company" width='80px'/>
                                    <IconButton aria-label="bookmark" size="large"
                                                sx={{border: '1px solid #F28A1F', color: '#F28A1F'}}>
                                        <BookmarkOutlinedIcon/>
                                    </IconButton>
                                </Box>
                                <Box mt={3}>
                                    <Typography color="text.secondary">
                                        Airbnb
                                    </Typography>
                                    <Typography variant='h5' color='black'>
                                        Product Designer
                                    </Typography>
                                </Box>
                                <Box display='flex' mt={2}>
                                    <Typography bgcolor='#F3FAFA' color='#0D9CA4' width='fit-content' variant="caption"
                                                p={1} display='flex' alignItems='center'>
                                        <LocationOnOutlinedIcon fontSize='small'/>&nbsp;
                                        Berlyn
                                    </Typography>
                                    <Typography bgcolor='#FFF6F6' color='#ff5656' width='fit-content' variant="caption"
                                                p={1} display='flex' alignItems='center' ml={2}>
                                        <BusinessCenterIcon fontSize='small'/>&nbsp;
                                        Full Time
                                    </Typography>
                                </Box>

                                <Box display='flex' mt={2} alignItems='center' justifyContent='space-between'>
                                    <Typography bgcolor='#f7f7f8' color='#6b6e6f' width='fit-content' variant="caption"
                                                p={1} display='flex' alignItems='center'>
                                        $ 2000-2500 / Month
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
                                <Button variant='outlined' className='secondaryBtn'>
                                    View More
                                </Button>
                                <Button className='primaryBtn'>
                                    Apply Now
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={6} md={4} mt={4}>
                        <Card style={{ borderRadius: '10px', padding: '20px' }}>
                            <CardContent>
                                <Box display='flex' justifyContent='space-between' alignItems='start'>
                                    <img src={companyLogo} alt="company" width='80px'/>
                                    <IconButton aria-label="bookmark" size="large"
                                                sx={{border: '1px solid #F28A1F', color: '#F28A1F'}}>
                                        <BookmarkOutlinedIcon/>
                                    </IconButton>
                                </Box>
                                <Box mt={3}>
                                    <Typography color="text.secondary">
                                        Airbnb
                                    </Typography>
                                    <Typography variant='h5' color='black'>
                                        Product Designer
                                    </Typography>
                                </Box>
                                <Box display='flex' mt={2}>
                                    <Typography bgcolor='#F3FAFA' color='#0D9CA4' width='fit-content' variant="caption"
                                                p={1} display='flex' alignItems='center'>
                                        <LocationOnOutlinedIcon fontSize='small'/>&nbsp;
                                        Berlyn
                                    </Typography>
                                    <Typography bgcolor='#FFF6F6' color='#ff5656' width='fit-content' variant="caption"
                                                p={1} display='flex' alignItems='center' ml={2}>
                                        <BusinessCenterIcon fontSize='small'/>&nbsp;
                                        Full Time
                                    </Typography>
                                </Box>

                                <Box display='flex' mt={2} alignItems='center' justifyContent='space-between'>
                                    <Typography bgcolor='#f7f7f8' color='#6b6e6f' width='fit-content' variant="caption"
                                                p={1} display='flex' alignItems='center'>
                                        $ 2000-2500 / Month
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
                                <Button variant='outlined' className='secondaryBtn'>
                                    View More
                                </Button>
                                <Button className='primaryBtn'>
                                    Apply Now
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={6} md={4} mt={4}>
                        <Card style={{ borderRadius: '10px', padding: '20px' }}>
                            <CardContent>
                                <Box display='flex' justifyContent='space-between' alignItems='start'>
                                    <img src={companyLogo} alt="company" width='80px'/>
                                    <IconButton aria-label="bookmark" size="large"
                                                sx={{border: '1px solid #F28A1F', color: '#F28A1F'}}>
                                        <BookmarkOutlinedIcon/>
                                    </IconButton>
                                </Box>
                                <Box mt={3}>
                                    <Typography color="text.secondary">
                                        Airbnb
                                    </Typography>
                                    <Typography variant='h5' color='black'>
                                        Product Designer
                                    </Typography>
                                </Box>
                                <Box display='flex' mt={2}>
                                    <Typography bgcolor='#F3FAFA' color='#0D9CA4' width='fit-content' variant="caption"
                                                p={1} display='flex' alignItems='center'>
                                        <LocationOnOutlinedIcon fontSize='small'/>&nbsp;
                                        Berlyn
                                    </Typography>
                                    <Typography bgcolor='#FFF6F6' color='#ff5656' width='fit-content' variant="caption"
                                                p={1} display='flex' alignItems='center' ml={2}>
                                        <BusinessCenterIcon fontSize='small'/>&nbsp;
                                        Full Time
                                    </Typography>
                                </Box>

                                <Box display='flex' mt={2} alignItems='center' justifyContent='space-between'>
                                    <Typography bgcolor='#f7f7f8' color='#6b6e6f' width='fit-content' variant="caption"
                                                p={1} display='flex' alignItems='center'>
                                        $ 2000-2500 / Month
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
                                <Button variant='outlined' className='secondaryBtn'>
                                    View More
                                </Button>
                                <Button className='primaryBtn'>
                                    Apply Now
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={6} md={4} mt={4}>
                        <Card style={{ borderRadius: '10px', padding: '20px' }}>
                            <CardContent>
                                <Box display='flex' justifyContent='space-between' alignItems='start'>
                                    <img src={companyLogo} alt="company" width='80px'/>
                                    <IconButton aria-label="bookmark" size="large"
                                                sx={{border: '1px solid #F28A1F', color: '#F28A1F'}}>
                                        <BookmarkOutlinedIcon/>
                                    </IconButton>
                                </Box>
                                <Box mt={3}>
                                    <Typography color="text.secondary">
                                        Airbnb
                                    </Typography>
                                    <Typography variant='h5' color='black'>
                                        Product Designer
                                    </Typography>
                                </Box>
                                <Box display='flex' mt={2}>
                                    <Typography bgcolor='#F3FAFA' color='#0D9CA4' width='fit-content' variant="caption"
                                                p={1} display='flex' alignItems='center'>
                                        <LocationOnOutlinedIcon fontSize='small'/>&nbsp;
                                        Berlyn
                                    </Typography>
                                    <Typography bgcolor='#FFF6F6' color='#ff5656' width='fit-content' variant="caption"
                                                p={1} display='flex' alignItems='center' ml={2}>
                                        <BusinessCenterIcon fontSize='small'/>&nbsp;
                                        Full Time
                                    </Typography>
                                </Box>

                                <Box display='flex' mt={2} alignItems='center' justifyContent='space-between'>
                                    <Typography bgcolor='#f7f7f8' color='#6b6e6f' width='fit-content' variant="caption"
                                                p={1} display='flex' alignItems='center'>
                                        $ 2000-2500 / Month
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
                                <Button variant='outlined' className='secondaryBtn'>
                                    View More
                                </Button>
                                <Button className='primaryBtn'>
                                    Apply Now
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={6} md={4} mt={4}>
                        <Card style={{ borderRadius: '10px', padding: '20px' }}>
                            <CardContent>
                                <Box display='flex' justifyContent='space-between' alignItems='start'>
                                    <img src={companyLogo} alt="company" width='80px'/>
                                    <IconButton aria-label="bookmark" size="large"
                                                sx={{border: '1px solid #F28A1F', color: '#F28A1F'}}>
                                        <BookmarkOutlinedIcon/>
                                    </IconButton>
                                </Box>
                                <Box mt={3}>
                                    <Typography color="text.secondary">
                                        Airbnb
                                    </Typography>
                                    <Typography variant='h5' color='black'>
                                        Product Designer
                                    </Typography>
                                </Box>
                                <Box display='flex' mt={2}>
                                    <Typography bgcolor='#F3FAFA' color='#0D9CA4' width='fit-content' variant="caption"
                                                p={1} display='flex' alignItems='center'>
                                        <LocationOnOutlinedIcon fontSize='small'/>&nbsp;
                                        Berlyn
                                    </Typography>
                                    <Typography bgcolor='#FFF6F6' color='#ff5656' width='fit-content' variant="caption"
                                                p={1} display='flex' alignItems='center' ml={2}>
                                        <BusinessCenterIcon fontSize='small'/>&nbsp;
                                        Full Time
                                    </Typography>
                                </Box>

                                <Box display='flex' mt={2} alignItems='center' justifyContent='space-between'>
                                    <Typography bgcolor='#f7f7f8' color='#6b6e6f' width='fit-content' variant="caption"
                                                p={1} display='flex' alignItems='center'>
                                        $ 2000-2500 / Month
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
                                <Button variant='outlined' className='secondaryBtn'>
                                    View More
                                </Button>
                                <Button className='primaryBtn'>
                                    Apply Now
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={6} md={4} mt={4}>
                        <Card style={{ borderRadius: '10px', padding: '20px' }}>
                            <CardContent>
                                <Box display='flex' justifyContent='space-between' alignItems='start'>
                                    <img src={companyLogo} alt="company" width='80px'/>
                                    <IconButton aria-label="bookmark" size="large"
                                                sx={{border: '1px solid #F28A1F', color: '#F28A1F'}}>
                                        <BookmarkOutlinedIcon/>
                                    </IconButton>
                                </Box>
                                <Box mt={3}>
                                    <Typography color="text.secondary">
                                        Airbnb
                                    </Typography>
                                    <Typography variant='h5' color='black'>
                                        Product Designer
                                    </Typography>
                                </Box>
                                <Box display='flex' mt={2}>
                                    <Typography bgcolor='#F3FAFA' color='#0D9CA4' width='fit-content' variant="caption"
                                                p={1} display='flex' alignItems='center'>
                                        <LocationOnOutlinedIcon fontSize='small'/>&nbsp;
                                        Berlyn
                                    </Typography>
                                    <Typography bgcolor='#FFF6F6' color='#ff5656' width='fit-content' variant="caption"
                                                p={1} display='flex' alignItems='center' ml={2}>
                                        <BusinessCenterIcon fontSize='small'/>&nbsp;
                                        Full Time
                                    </Typography>
                                </Box>

                                <Box display='flex' mt={2} alignItems='center' justifyContent='space-between'>
                                    <Typography bgcolor='#f7f7f8' color='#6b6e6f' width='fit-content' variant="caption"
                                                p={1} display='flex' alignItems='center'>
                                        $ 2000-2500 / Month
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
                                <Button variant='outlined' className='secondaryBtn'>
                                    View More
                                </Button>
                                <Button className='primaryBtn'>
                                    Apply Now
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default FeaturedJobs;