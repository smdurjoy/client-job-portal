import React from 'react';
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import companyLogo from "../../assets/images/home/airBnb.png";
import IconButton from "@mui/material/IconButton";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import Typography from "@mui/material/Typography";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

const ListView = () => {
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
                    <Box display='flex' justifyContent='space-between' alignItems='start'>
                        <Box display='flex' alignItems='center'>
                            <img src={companyLogo} alt="company"/>
                            <Box ml={2}>
                                <Typography
                                    variant='h5'
                                    color='black'
                                    fontSize={{
                                        lg: 30,
                                        md: 26,
                                        sm: 22,
                                        xs: 18
                                    }}
                                >
                                    Product Designer
                                </Typography>
                                <Typography color="text.secondary">
                                    Airbnb
                                </Typography>
                            </Box>
                        </Box>
                        <IconButton aria-label="bookmark" size="large"
                                    sx={{border: '1px solid #F28A1F', color: '#F28A1F'}}>
                            <BookmarkOutlinedIcon/>
                        </IconButton>
                    </Box>
                    <Box display='flex' justifyContent='space-between' flexWrap='wrap'>
                        <Box display='flex' mt={2}>
                            <Typography
                                bgcolor='#F3FAFA'
                                color='#0D9CA4'
                                width='fit-content'
                                variant="caption"
                                display='flex'
                                alignItems='center'
                                sx={{padding: {lg: '10px', md: '7px', sm: '5px', xs: '3px'}}}
                            >
                                <LocationOnOutlinedIcon fontSize='small'/>&nbsp;
                                Berlyn
                            </Typography>
                            <Typography bgcolor='#FFF6F6' color='#ff5656' width='fit-content' variant="caption"
                                        p={1} display='flex' alignItems='center' ml={2}>
                                <BusinessCenterIcon fontSize='small'/>&nbsp;
                                Full Time
                            </Typography>
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

                    <Box display='flex' mt={2} alignItems='center' justifyContent='space-between'>
                        <Typography
                            bgcolor='#f7f7f8'
                            color='#6b6e6f'
                            width='fit-content'
                            variant="caption"
                            sx={{padding: {lg: '10px', md: '7px', sm: '5px', xs: '3px'}}}
                        >
                            $ 2000-2500 / Month
                        </Typography>
                        <Box>
                            <Button variant='outlined' className='secondaryBtnBlue'>
                                View More
                            </Button>
                            <Button className='primaryBtn' sx={{marginLeft: '10px'}}>
                                Apply Now
                            </Button>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default ListView;