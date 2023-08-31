import React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import companyLogo from '../../assets/images/home/airBnb.png';
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import Button from "@mui/material/Button";
import TypoBadge from "../common/TypoBadge";
import H3 from "../Typography/H3";
import H7 from "../Typography/H7";

const CompanyCard = ({job}) => {
    return (
        <Card sx={{borderRadius: '10px', padding: '15px', borderTop: '1px solid #D4D4D4'}}>
            <CardContent>
                <Box display='flex' justifyContent='space-between' alignItems='start'>
                    <img src={companyLogo} alt="company" width='80px'/>
                    <Button fullWidth size='large' variant='outlined' className='secondaryBtnBlue' sx={{width: '40%'}}>
                        Following
                    </Button>
                </Box>
                <Box mt={3} display='flex' alignItems='center'>
                    <H3
                        text='Airbnb'
                        color='#6B6E6F'
                    />
                    <CheckCircleIcon sx={{color: '#17B017', marginLeft: '5px'}}/>
                </Box>
                <Box mt={2}>
                    <TypoBadge
                        icon={<LocationOnOutlinedIcon fontSize='small'/>}
                        text='San Francisco, California, United States'
                        color='#0D9CA4'
                        bgColor='#F3FAFA'
                    />
                </Box>
                <H7
                    text='Yorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio mattis....'
                />
                <Box mt={2}>
                    <TypoBadge
                        icon={<PollOutlinedIcon fontSize='small'/>}
                        text='Residential Construction'
                        color='#6B6E6F'
                        bgColor='#f7f7f8'
                    />
                </Box>

                <Box display='flex' mt={2} alignItems='center' justifyContent='space-between' flexWrap='wrap'>
                    <TypoBadge
                        icon={<BusinessCenterIcon fontSize='small'/>}
                        text='10,000 Employee'
                        color='#FF5656'
                        bgColor='#fff6f6'
                    />
                    <H7
                        text='11 Jobs Available'
                        color='#6b6e6f'
                    />
                </Box>
            </CardContent>
        </Card>
    );
};

export default CompanyCard;