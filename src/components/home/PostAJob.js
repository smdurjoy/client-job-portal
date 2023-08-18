import React from 'react';
import Box from "@mui/material/Box";
import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import rectangle2 from '../../assets/images/home/rectangle2.png';
import Customers from "../common/Customers";

const PostAJob = () => {
    return (
        <div className='container'>
            <Grid container mb={4}>
                <Grid item xs={12} md={6} pl={5}>
                    <Typography color='#0D9CA4' fontSize='20px' mt={4} fontWeight='bold'>
                        Looking for an expert for your company?
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{fontWeight: 'bold'}}
                        mt={3}
                        fontSize={{
                            lg: 48,
                            md: 44,
                            sm: 35,
                            xs: 30
                        }}
                    >
                        Get applications from the world best talents.
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

                    <Box
                        marginTop={{
                            lg: 9,
                            md: 7,
                            sm: 5,
                            xs: 3
                        }}
                    >
                        <Button variant='outlined' className='secondaryBtnBlue'>
                            Post A Job
                        </Button>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
                    marginTop={{
                        xs: 5
                    }}
                >
                    <Box display='flex' justifyContent='end'>
                        <img src={rectangle2} alt="" className='rectangle2'/>
                    </Box>
                    <Box marginRight={0} className='rectangle2Box'>
                        <Typography
                            variant='h6'
                            bgcolor='#0d9ca4'
                            color='white'
                            fontSize={{
                                xs: 16
                            }}
                        >
                            Applicants List
                        </Typography>
                        <Box p={1}>
                            <Customers name='Davir Mark' title='General Worker'/>
                            <Customers name='Davir Mark' title='General Worker'/>
                            <Customers name='Davir Mark' title='General Worker'/>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default PostAJob;