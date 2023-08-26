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
            <Grid container my={15} className="helpToWorkerGrid">
                <Grid item xs={12} md={6}>
                    <img src={rectangle1} alt="" className='rectangle1'/>

                    <Box marginRight={0} className='rectangle1Box'>
                        <img src={tickCircle} alt='okay'/>
                        <Typography variant='h6' fontWeight='bold'>
                            Found 200+ Jobs
                        </Typography>
                        <Typography color='grey'>
                            + 14 Giants
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} pl={5} className="secondGridCol">
                    <Typography
                        variant="h3"
                        sx={{fontWeight: 'bold'}}
                        fontSize={{
                            lg: 48,
                            md: 44,
                            sm: 35,
                            xs: 30
                        }}
                    >
                        Help you to get the best job that fits you.
                    </Typography>
                    <Typography
                        color='#6B6E6F'
                        mt={4}
                        fontSize={{
                            lg: 20,
                            md: 18,
                            sm: 16,
                            xs: 14
                        }}
                    >
                        Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative
                        approach
                    </Typography>

                    <Box mt={5}>
                        <Box display='flex' alignItems='center' mt={2}>
                            <img src={arrowIcon} alt="->" style={{width: '30px'}}/>
                            <Typography
                                ml={4}
                                fontSize={{
                                    lg: 20,
                                    md: 18,
                                    sm: 16,
                                    xs: 14
                                }}
                            >
                                Rorem ipsum dolor sit amet, consectetur.
                            </Typography>
                        </Box>
                        <Box display='flex' alignItems='center' mt={2}>
                            <img src={arrowIcon} alt="->" style={{width: '30px'}}/>
                            <Typography
                                ml={4}
                                fontSize={{
                                    lg: 20,
                                    md: 18,
                                    sm: 16,
                                    xs: 14
                                }}
                            >
                                Rorem ipsum dolor sit amet, consectetur.
                            </Typography>
                        </Box>
                        <Box display='flex' alignItems='center' mt={2}>
                            <img src={arrowIcon} alt="->" style={{width: '30px'}}/>
                            <Typography
                                ml={4}
                                fontSize={{
                                    lg: 20,
                                    md: 18,
                                    sm: 16,
                                    xs: 14
                                }}
                            >
                                Rorem ipsum dolor sit amet, consectetur.
                            </Typography>
                        </Box>
                    </Box>

                    <Box mt={9}>
                        <Button size='large' sx={{px: 5}} className='primaryBtn'>
                            Apply Now
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default HelpToWorker;