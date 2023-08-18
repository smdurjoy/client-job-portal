import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Grid} from "@mui/material";
import createAcc from '../../assets/images/home/createAccount.svg';
import searchJobs from '../../assets/images/home/searchJobs.svg';
import save from '../../assets/images/home/save.svg';
import SectionTitle from "../common/SectionTitle";

const EasyAccess = () => {
    return (
        <div className='container'>
            <Box py={8}>
                <SectionTitle title='Get Started Easily' subTitle='Working Processes'/>

                <Grid container my={5} columnSpacing={5}>
                    <Grid item xs={12} md={4} mt={4}>
                        <Box style={{borderRadius: '10px', padding: '80px 20px', textAlign: 'center', backgroundColor: '#fafafa'}}>
                            <Box display='flex' justifyContent='center' flexDirection='column' alignItems='center'>
                                <Box bgcolor='#F28A1F' width='83px' height='83px' display='flex' alignItems='center' justifyContent='center'>
                                    <img src={createAcc} alt='createAccount'/>
                                </Box>
                                <Typography variant='h5' fontWeight='bold' mt={3}>
                                    Create an Account
                                </Typography>
                                <Typography color='#6B6E6F' mt={1}>
                                    Lorem Ipsum is simply dummy textof the printing and typesettingindustry
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4} mt={4}>
                        <Box style={{borderRadius: '10px', padding: '80px 20px', textAlign: 'center', backgroundColor: '#fafafa'}}>
                            <Box display='flex' justifyContent='center' flexDirection='column' alignItems='center'>
                                <Box bgcolor='#0d9ca4' width='83px' height='83px' display='flex' alignItems='center' justifyContent='center'>
                                    <img src={searchJobs} alt='createAccount'/>
                                </Box>
                                <Typography variant='h5' fontWeight='bold' mt={3}>
                                    Search Jobs
                                </Typography>
                                <Typography color='#6B6E6F' mt={1}>
                                    Lorem Ipsum is simply dummy textof the printing and typesettingindustry
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4} mt={4}>
                        <Box style={{borderRadius: '10px', padding: '80px 20px', textAlign: 'center', backgroundColor: '#fafafa'}}>
                            <Box display='flex' justifyContent='center' flexDirection='column' alignItems='center'>
                                <Box bgcolor='#2b3940' width='83px' height='83px' display='flex' alignItems='center' justifyContent='center'>
                                    <img src={save} alt='createAccount'/>
                                </Box>
                                <Typography variant='h5' fontWeight='bold' mt={3}>
                                    Save & Apply
                                </Typography>
                                <Typography color='#6B6E6F' mt={1}>
                                    Lorem Ipsum is simply dummy textof the printing and typesettingindustry
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default EasyAccess;