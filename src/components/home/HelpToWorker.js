import React from 'react';
import {Grid} from "@mui/material";
import rectangle1 from '../../assets/images/home/rectangle1.png';
import arrowIcon from '../../assets/images/home/arrow.svg';
import tickCircle from '../../assets/images/home/tickCircle.svg';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const HelpToWorker = () => {
    return (
        <div className='container'>
            <Grid container my={15}>
                <Grid item xs={12} md={6}>
                    <img src={rectangle1} alt="" style={{height: '525px', width: '485px'}}/>

                    <Box marginRight={0} style={{
                        border: '1px solid #F28A1F',
                        borderRadius: '5px',
                        padding: '75px 20px',
                        width: '230px',
                        position: 'absolute',
                        marginTop: '-9rem',
                        marginLeft: '18rem',
                        zIndex: '99',
                        backgroundColor: 'white',
                        boxShadow: '3px 3px 20px 0px rgba(75, 74, 74, 0.20'
                    }}>
                        <img src={tickCircle} alt='okay' style={{ marginTop: '-120px', marginLeft: '-70px', position: 'absolute' }}/>
                        <Typography variant='h6' fontWeight='bold'>
                            Found 200+ Jobs
                        </Typography>
                        <Typography color='grey'>
                            + 14 Giants
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} pl={5}>
                    <Typography variant="h3" sx={{fontWeight: 'bold'}}>
                        Help you to get the best job that fits you.
                    </Typography>
                    <Typography color='#6B6E6F' fontSize='20px' mt={4}>
                        Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative
                        approach
                    </Typography>

                    <Box mt={5}>
                        <Box display='flex' alignItems='center' mt={2}>
                            <img src={arrowIcon} alt="->" style={{width: '30px'}}/>
                            <Typography ml={4}>
                                Rorem ipsum dolor sit amet, consectetur.
                            </Typography>
                        </Box>
                        <Box display='flex' alignItems='center' mt={2}>
                            <img src={arrowIcon} alt="->" style={{width: '30px'}}/>
                            <Typography ml={4}>
                                Rorem ipsum dolor sit amet, consectetur.
                            </Typography>
                        </Box>
                        <Box display='flex' alignItems='center' mt={2}>
                            <img src={arrowIcon} alt="->" style={{width: '30px'}}/>
                            <Typography ml={4}>
                                Rorem ipsum dolor sit amet, consectetur.
                            </Typography>
                        </Box>
                    </Box>

                    <Box mt={9}>
                        <Button className='primaryBtn'>
                            Apply Now
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default HelpToWorker;