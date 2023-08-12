import React from 'react';
import SectionTitle from "../common/SectionTitle";
import {Grid} from "@mui/material";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Customers from "../common/Customers";

const SuccessStories = () => {
    return (
        <div className='container'>
            <SectionTitle title='Our Success Stories' subTitle='What Our Customers Say'/>

            <Box my={8}>
                <Grid container my={5} columnSpacing={5}>
                    <Grid item xs={6} md={4}>
                        <Card style={{textAlign: 'center', border: '1px solid #ddd'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 329 134" fill="none">
                                <path d="M0 0V134C54.6274 31.5776 142.87 5.90637 329 0H0Z" fill="#0D9CA4"/>
                            </svg>

                            <Box sx={{ marginTop: '-8rem' }} ml={2}>
                                <Customers name='Emily Hazel' title='Architect'/>
                            </Box>

                            <Box py={8} px={4}>
                                <Typography color='#6B6E6F' variant='h6'>
                                    Lorem Ipsum is simply dummy textof the printing and typesettingindustry.
                                    Lorem Ipsum is simply dummy textof the printing and typesettingindustry
                                    Lorem Ipsum is simply dummy textof the printing and typesettingindustry
                                </Typography>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <Card style={{textAlign: 'center', border: '1px solid #ddd'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 329 134" fill="none">
                                <path d="M0 0V134C54.6274 31.5776 142.87 5.90637 329 0H0Z" fill="#0D9CA4"/>
                            </svg>

                            <Box sx={{ marginTop: '-8rem' }} ml={2}>
                                <Customers name='Emily Hazel' title='Architect'/>
                            </Box>

                            <Box py={8} px={4}>
                                <Typography color='#6B6E6F' variant='h6'>
                                    Lorem Ipsum is simply dummy textof the printing and typesettingindustry.
                                    Lorem Ipsum is simply dummy textof the printing and typesettingindustry
                                    Lorem Ipsum is simply dummy textof the printing and typesettingindustry
                                </Typography>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <Card style={{textAlign: 'center', border: '1px solid #ddd'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 329 134" fill="none">
                                <path d="M0 0V134C54.6274 31.5776 142.87 5.90637 329 0H0Z" fill="#0D9CA4"/>
                            </svg>

                            <Box sx={{ marginTop: '-8rem' }} ml={2}>
                                <Customers name='Emily Hazel' title='Architect'/>
                            </Box>

                            <Box py={8} px={4}>
                                <Typography color='#6B6E6F' variant='h6'>
                                    Lorem Ipsum is simply dummy textof the printing and typesettingindustry.
                                    Lorem Ipsum is simply dummy textof the printing and typesettingindustry
                                    Lorem Ipsum is simply dummy textof the printing and typesettingindustry
                                </Typography>
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default SuccessStories;