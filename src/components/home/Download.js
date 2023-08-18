import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Grid} from "@mui/material";
import googlePlay from '../../assets/images/home/googlePlay.png';
import appStore from '../../assets/images/home/appStore.png';
import mobileDownload from '../../assets/images/home/mobileDownload.png';

const Download = () => {
    return (
        <div className='container'>
            <Box my={8} className='homeDownloadBox'>
                <Grid container my={5} columnSpacing={5}>
                    <Grid item xs={12} md={6}>
                        <Box pr={12}>
                            <Typography
                                variant='h4'
                                fontWeight='bold'
                                fontSize={{
                                    lg: 32,
                                    md: 28,
                                    sm: 24,
                                    xs: 20
                                }}
                            >
                                Unlock Your Future Now!
                            </Typography>
                            <Typography
                                color='#6B6E6F'
                                variant='h6'
                                mt={3}
                                fontSize={{
                                    lg: 20,
                                    md: 18,
                                    sm: 16,
                                    xs: 14,
                                }}
                            >
                                Download Our app, it empowers job seekers with tailored opportunities and helps
                                companies find the perfect match.
                                Join now for a brighter future in work and talent acquisition
                            </Typography>
                            <Typography
                                variant='h6'
                                mt={8}
                                fontWeight='bold'
                                fontSize={{
                                    lg: 20,
                                    md: 18,
                                    sm: 16,
                                    xs: 14,
                                }}
                            >
                                Get the App
                            </Typography>
                            <Box display='flex' mt={1} className='downloadBtns'>
                                <img src={googlePlay} alt='googlePlay'/>
                                <img src={appStore} alt='appStore' style={{marginLeft: '10px'}}/>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box display='flex' justifyContent='end' pr={6}>
                            <Box width='380px' height='370px' bgcolor='#0D9CA4' borderRadius='50%'>
                                <img src={mobileDownload} alt='mobileDownload' style={{ marginLeft: '15px', marginTop: '-10px' }}/>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default Download;