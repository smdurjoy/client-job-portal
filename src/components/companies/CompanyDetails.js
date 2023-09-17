import React, {useState} from 'react';
import Box from "@mui/material/Box";
import {Grid} from "@mui/material";
import googleLogo from '../../assets/images/home/googleLogo.jpeg';
import H3 from "../Typography/H3";
import H5 from "../Typography/H5";
import Divider from "@mui/material/Divider";
import CompanyDescription from "./CompanyDescription";
import CompanyJobs from "./CompanyJobs";
import CompanyHeader from "./CompanyHeader";
import defaultImg from '../../assets/images/noImg.jpg';
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";

const CompanyDetails = ({jobs, company, profileMode = false}) => {
    const [activeItem, setActiveItem] = useState(1);

    return (
        <Box className='container' mt={18} mb={9}>
            <Grid container px={2} spacing={3} my={5}>
                <Grid item xs={12} md={8}>
                    <CompanyHeader
                        image={company?.company_logo ? company?.company_logo : defaultImg}
                        companyName={company ? company?.company_name : 'Airbnb'}
                        category='--'
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
                        {activeItem === 1 && <CompanyDescription company={company}/>}
                        {activeItem === 2 && <CompanyJobs jobs={jobs}/>}
                    </Box>
                </Grid>

                <Grid item xs={12} md={4}>
                    {profileMode ? (
                        <Box mt={2}>
                            <Link to='/edit-profile'>
                                <Button className='primaryBtnLessPadding'>
                                    Edit Profile
                                </Button>
                            </Link>
                        </Box>
                    ) : (
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
                    )}
                </Grid>
            </Grid>
        </Box>
    );
};

export default CompanyDetails;