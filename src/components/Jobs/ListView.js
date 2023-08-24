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
                    <ListHeader/>

                    <Box display='flex' justifyContent='space-between' flexWrap='wrap'>
                        <Box display='flex' mt={2}>
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
                            $ 2000-2500 / Month
                        </Typography>
                        <Box>
                            <Button variant='outlined' className='secondaryBtnBlue'>
                                <Link to={'/job-details/1'}>
                                    View More
                                </Link>
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