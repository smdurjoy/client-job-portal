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

const GridView = () => {
    return (
        <Card sx={{borderRadius: '10px', padding: '20px', borderTop: '1px solid #D4D4D4'}}>
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
                        Product Designer
                    </Typography>
                </Box>
                <Box display='flex' mt={2} flexWrap='wrap'>
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

                <Box display='flex' mt={2} alignItems='center' justifyContent='space-between' flexWrap='wrap'>
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
                <Button variant='outlined' className='secondaryBtnBlue'>
                    View More
                </Button>
                <Button className='primaryBtn'>
                    Apply Now
                </Button>
            </CardActions>
        </Card>
    );
};

export default GridView;