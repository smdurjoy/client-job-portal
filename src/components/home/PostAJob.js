import React from 'react';
import Box from "@mui/material/Box";
import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import rectangle2 from '../../assets/images/home/rectangle2.png';
import user1 from '../../assets/images/home/user1.svg';
import Customers from "../common/Customers";

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
                        <img src={rectangle2} alt="" className='rectangle2'/>
                    </Box>
                    <Box marginRight={0} className='rectangle2Box'>
                        <Typography variant='h6' bgcolor='#0d9ca4' color='white'>
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