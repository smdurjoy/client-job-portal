import React, {useState} from 'react';
import Box from "@mui/material/Box";
import {Grid} from "@mui/material";
import companyLogo from '../../assets/images/home/airBnb.png';
import googleLogo from '../../assets/images/home/googleLogo.jpeg';
import H3 from "../Typography/H3";
import H5 from "../Typography/H5";
import Divider from "@mui/material/Divider";
import CompanyDescription from "./CompanyDescription";
import CompanyJobs from "./CompanyJobs";
import CompanyHeader from "./CompanyHeader";

const CompanyDetails = ({jobs}) => {
    const [activeItem, setActiveItem] = useState(1);

    return (
        <Box className='container' mt={18} mb={9}>
            <Grid container px={2} spacing={3} my={5}>
                <Grid item xs={12} md={8}>
                    <CompanyHeader
                        image={companyLogo}
                        companyName='Airbnb'
                        category='Residential Construction'
                    />

                    <Box display='flex' mt={5}>
                        <Box sx={{cursor: 'pointer'}} onClick={() => setActiveItem(1)}>
                            <H5
                                text='Company'
                                color={activeItem === 1 ? '#0D9CA4' : '#6B6E6F'}
                            />
                        </Box>
                        <Box sx={{cursor: 'pointer'}} onClick={() => setActiveItem(2)}>
                            <H5
                                text='Jobs'
                                color={activeItem === 2 ? '#0D9CA4' : '#6B6E6F'}
                                ml={9}
                            />
                        </Box>
                    </Box>

                    <Box mt={2}>
                        <Divider/>
                    </Box>

                    <Box mt={4}>
                        {activeItem === 1 && <CompanyDescription/>}
                        {activeItem === 2 && <CompanyJobs jobs={jobs}/>}
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box bgcolor='#fafafa' p={3}>
                        <H3
                            text='Similar Companies'
                        />

                        <Box mt={3}>
                            <CompanyHeader
                                image={googleLogo}
                                companyName='Google INC.'
                                category='Software Company'
                            />
                        </Box>
                        <Box mt={2}>
                            <Divider/>
                        </Box>

                        <Box mt={3}>
                            <CompanyHeader
                                image={googleLogo}
                                companyName='Google INC.'
                                category='Software Company'
                            />
                        </Box>
                        <Box mt={2}>
                            <Divider/>
                        </Box>

                        <Box mt={3}>
                            <CompanyHeader
                                image={googleLogo}
                                companyName='Google INC.'
                                category='Software Company'
                            />
                        </Box>
                        <Box mt={2}>
                            <Divider/>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CompanyDetails;