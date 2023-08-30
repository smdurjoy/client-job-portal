import React from 'react';
import Box from "@mui/material/Box";
import {Grid} from "@mui/material";
import profileImg from '../../assets/images/workerProfile/uploadImgIcon.png';
import H3 from "../Typography/H3";
import Divider from "@mui/material/Divider";
import H4 from "../Typography/H4";
import H6 from "../Typography/H6";
import H5 from "../Typography/H5";
import Button from "@mui/material/Button";
import Overview from "./Overview";
import {Link} from "react-router-dom";

const Index = () => {
    const contactInfos = [
        {
            label: 'Location',
            value: 'Bel Air, Los Angeles, California'
        },
        {
            label: 'Email',
            value: 'demo@gmail.com'
        },
        {
            label: 'Phone Number',
            value: '+1XXXXXXXXXX'
        },
        {
            label: 'NID / Passport',
            value: '01254689213321'
        },
    ];

    return (
        <Box className='container' mt={9}>
            <Box py={6}>
                <Grid container px={2} spacing={3} my={5} columnSpacing={10}>
                    <Grid item xs={12} md={4}>
                        <Box bgcolor='#fafafa' py={5}>
                            <Box display='flex' flexDirection='column' alignItems='center'>
                                <img src={profileImg} alt='profileImg' className='workerProfileImg'/>
                                <H3
                                    text='David Henricks'
                                    color='#0D9CA4'
                                    fontWeight='bold'
                                    mt={3}
                                />
                            </Box>
                            <Divider sx={{marginTop: '36px'}}/>
                            <Box px={3}>
                                <H4
                                    text='Contact Info'
                                    mt={3}
                                />

                                {
                                    contactInfos.map((info, key) => (
                                        <Box mt={4} key={key}>
                                            <H6
                                                text={info.label}
                                                color='#6B6E6F'
                                            />
                                            <H6
                                                text={info.value}
                                                mt={1}
                                            />
                                        </Box>
                                    ))
                                }

                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Box display='flex' justifyContent='space-between' flexWrap='wrap'
                             borderBottom='1px solid #D4D4D4'>
                            <Box display='flex'>
                                <H5
                                    text='Overview'
                                    color='#0D9CA4'
                                />
                                <H5
                                    text='Video CV'
                                    color='#0D9CA4'
                                    ml={9}
                                />
                            </Box>
                            <Link to='/edit-profile'>
                                <Button className='primaryBtnLessPadding'>
                                    Edit Profile
                                </Button>
                            </Link>
                        </Box>
                        <Box>
                            <Overview/>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Index;