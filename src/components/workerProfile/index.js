import React, {useState} from 'react';
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
import VideoCv from "./VideoCv";
import Loader from "../common/Loader";

const WorkerProfile = ({profile, isLoading}) => {
    const [activeItem, setActiveItem] = useState(1);

    const contactInfos = [
        {
            label: 'Location',
            value: `${profile?.city_name ?? ''}, ${profile?.state_name ?? ''}`
        },
        {
            label: 'Email',
            value: profile?.email
        },
        {
            label: 'Phone Number',
            value: profile?.phone_number
        },
        {
            label: 'NID / Passport',
            value: profile?.passport_number
        },
    ];

    return (
        <Box className='container workerProfile' mt={9}>
            <Box py={6}>
                {
                    isLoading ? <Loader/> : (
                        <Grid container px={2} spacing={3} columnSpacing={10} marginY={{lg: 5, md: 4, sm: 3, xs: 1}}>
                            <Grid item xs={12} md={4}>
                                <Box bgcolor='#fafafa' py={5}>
                                    <Box display='flex' flexDirection='column' alignItems='center'>
                                        <img
                                            src={profile?.photo ? profile.photo : profileImg}
                                            alt='profileImg'
                                            className='workerProfileImg'
                                        />
                                        <H3
                                            text={`${profile?.first_name ?? 'N/A'} ${profile?.middle_name ?? ''} ${profile?.last_name ?? ''}`}
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
                                        <Box sx={{cursor: 'pointer'}} onClick={() => setActiveItem(1)}>
                                            <H5
                                                text='Overview'
                                                color={activeItem === 1 ? '#0D9CA4' : '#6B6E6F'}
                                            />
                                        </Box>
                                        <Box sx={{cursor: 'pointer'}} onClick={() => setActiveItem(2)}>
                                            <H5
                                                text='Video CV'
                                                color={activeItem === 2 ? '#0D9CA4' : '#6B6E6F'}
                                                ml={9}
                                            />
                                        </Box>
                                    </Box>
                                    <Link to='/edit-profile'>
                                        <Button className='primaryBtnLessPadding'>
                                            Edit Profile
                                        </Button>
                                    </Link>
                                </Box>
                                <Box>
                                    {activeItem === 1 && <Overview profile={profile}/>}
                                    {activeItem === 2 && <VideoCv/>}
                                </Box>
                            </Grid>
                        </Grid>
                    )
                }
            </Box>
        </Box>
    );
};

export default WorkerProfile;