import React from 'react';
import Box from "@mui/material/Box";
import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import rectangle2 from '../../assets/images/home/rectangle2.png';
import user1 from '../../assets/images/home/user1.svg';

const PostAJob = () => {
    return (
        <div className='container'>
            <Grid container mb={4}>
                <Grid item xs={12} md={6} pl={5}>
                    <Typography color='#0D9CA4' fontSize='20px' mt={4} fontWeight='bold'>
                        Looking for an expert for your company?
                    </Typography>
                    <Typography variant="h3" sx={{fontWeight: 'bold'}} mt={3}>
                        Get applications from the world best talents.
                    </Typography>

                    <Typography color='#6B6E6F' fontSize='20px' mt={4}>
                        Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative
                        approach
                    </Typography>

                    <Box mt={9}>
                        <Button variant='outlined' className='secondaryBtnBlue'>
                            Post A Job
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box display='flex' justifyContent='end'>
                        <img src={rectangle2} alt="" style={{height: '525px', width: '485px'}}/>
                    </Box>
                    <Box marginRight={0} style={{
                        border: '1px solid #0d9ca4',
                        borderRadius: '5px',
                        textAlign: 'center',
                        width: '230px',
                        position: 'absolute',
                        marginTop: '-14rem',
                        marginLeft: '16rem',
                        zIndex: '99',
                        backgroundColor: 'white',
                        boxShadow: '3px 3px 20px 0px rgba(75, 74, 74, 0.20'
                    }}>
                        <Typography variant='h6' bgcolor='#0d9ca4' color='white'>
                            Applicants List
                        </Typography>
                        <Box p={1}>
                            <Box display='flex' justifyContent='start' alignItems='center' pl={2}>
                                <img src={user1} alt='user1' width='41px'/>
                                <Box pl={2}>
                                    <Typography>
                                        Davir Mark
                                    </Typography>
                                    <Typography variant='caption' color='#6B6E6F'>
                                        General Worker
                                    </Typography>
                                </Box>
                            </Box>
                            <Box display='flex' justifyContent='start' alignItems='center' pl={2}>
                                <img src={user1} alt='user1' width='41px'/>
                                <Box pl={2}>
                                    <Typography>
                                        Davir Mark
                                    </Typography>
                                    <Typography variant='caption' color='#6B6E6F'>
                                        General Worker
                                    </Typography>
                                </Box>
                            </Box>
                            <Box display='flex' justifyContent='start' alignItems='center' pl={2}>
                                <img src={user1} alt='user1' width='41px'/>
                                <Box pl={2}>
                                    <Typography>
                                        Davir Mark
                                    </Typography>
                                    <Typography variant='caption' color='#6B6E6F'>
                                        General Worker
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default PostAJob;