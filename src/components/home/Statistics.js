import React from 'react';
import {Grid} from "@mui/material";
import rectangle3 from '../../assets/images/home/rectangle3.png';
import users from '../../assets/images/home/users.svg';
import companies from '../../assets/images/home/companies.svg';
import countries from '../../assets/images/home/countries.svg';
import jobs from '../../assets/images/home/jobs.svg';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Statistics = () => {
    return (
        <div className='container statisticsBanner'>
            <Grid container py={13}>
                <Grid item xs={12} md={6} textAlign={{ xs: 'center', md: 'left', lg: 'left' }}>
                    <img src={rectangle3} alt='rectangle3' className='rectangle3'/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Grid container mt={5}>
                        <Grid item xs={6} md={6} borderRight='1px solid white' borderBottom='1px solid white' pb={7}>
                            <Box display='flex' flexDirection='column' alignItems='center'>
                                <img src={users} alt='rectangle3' width='90px'/>
                                <Typography variant='h5'
                                            fontWeight='bold'
                                            color='white'
                                            mt={2}
                                            fontSize={{
                                                lg: 24,
                                                md: 20,
                                                sm: 18,
                                                xs: 16
                                            }}
                                >
                                    1500+ Users
                                </Typography>
                                <Typography variant='caption' color='white'>
                                    Rorem ipsum dolor
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6} md={6} borderBottom='1px solid white' pb={7}>
                            <Box display='flex' flexDirection='column' alignItems='center'>
                                <img src={companies} alt='rectangle3' width='90px'/>
                                <Typography variant='h5'
                                            fontWeight='bold'
                                            color='white'
                                            mt={2}
                                            fontSize={{
                                                lg: 24,
                                                md: 20,
                                                sm: 18,
                                                xs: 16
                                            }}
                                >
                                    300+ Companies
                                </Typography>
                                <Typography variant='caption' color='white'>
                                    Rorem ipsum dolor
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={6} md={6} borderRight='1px solid white' pt={7}>
                            <Box display='flex' flexDirection='column' alignItems='center'>
                                <img src={countries} alt='rectangle3' width='90px'/>
                                <Typography variant='h5'
                                            fontWeight='bold'
                                            color='white'
                                            mt={2}
                                            fontSize={{
                                                lg: 24,
                                                md: 20,
                                                sm: 18,
                                                xs: 16
                                            }}
                                >
                                    50+ Countries
                                </Typography>
                                <Typography variant='caption' color='white'>
                                    Rorem ipsum dolor
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6} md={6} pt={7}>
                            <Box display='flex' flexDirection='column' alignItems='center'>
                                <img src={jobs} alt='rectangle3' width='90px'/>
                                <Typography variant='h5'
                                            fontWeight='bold'
                                            color='white'
                                            mt={2}
                                            fontSize={{
                                                lg: 24,
                                                md: 20,
                                                sm: 18,
                                                xs: 16
                                            }}
                                >
                                    3000+ Jobs
                                </Typography>
                                <Typography variant='caption' color='white'>
                                    Rorem ipsum dolor
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Statistics;