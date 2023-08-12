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
            <Box my={8} sx={{
                background: 'radial-gradient(754.03% 141.42% at -0.00% 0%, #FFD9B2 0.23%, rgba(255, 238, 220, 0.57) 73.63%, #FFD9B2 100%)',
                borderRadius: '7px',
                padding: '4rem'
            }}>
                <Grid container my={5} columnSpacing={5}>
                    <Grid item xs={12} md={6}>
                        <Box pr={12}>
                            <Typography variant='h4' fontWeight='bold'>
                                Unlock Your Future Now!
                            </Typography>
                            <Typography color='#6B6E6F' variant='h6' mt={3}>
                                Download Our app, it empowers job seekers with tailored opportunities and helps
                                companies find the perfect match.
                                Join now for a brighter future in work and talent acquisition
                            </Typography>
                            <Typography variant='h6' mt={8} fontWeight='bold'>
                                Get the App
                            </Typography>
                            <Box display='flex' mt={1}>
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