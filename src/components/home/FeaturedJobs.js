import React from 'react';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Grid} from "@mui/material";
import GridView from "../Jobs/GridView";

const FeaturedJobs = () => {
    return (
        <div className='container' style={{backgroundColor: '#2B3940'}}>
            <Box py={8}>
                <Box display='flex' justifyContent='space-between' alignItems='center'>
                    <Typography
                        variant='h4'
                        color='white'
                        fontSize={{
                            lg: 32,
                            md: 28,
                            sm: 24,
                            xs: 18
                        }}
                    >
                        Featured Jobs
                    </Typography>
                    <Button variant='outlined' className='secondaryBtnWhite'>
                        Explore All
                    </Button>
                </Box>

                <Grid container my={5} columnSpacing={5}>
                    <Grid item xs={12} md={4} mt={4}>
                        <GridView/>
                    </Grid>
                    <Grid item xs={12} md={4} mt={4}>
                        <GridView/>
                    </Grid>
                    <Grid item xs={12} md={4} mt={4}>
                        <GridView/>
                    </Grid>
                    <Grid item xs={12} md={4} mt={4}>
                        <GridView/>
                    </Grid>
                    <Grid item xs={12} md={4} mt={4}>
                        <GridView/>
                    </Grid>
                    <Grid item xs={12} md={4} mt={4}>
                        <GridView/>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default FeaturedJobs;