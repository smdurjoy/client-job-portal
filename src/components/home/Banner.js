import React, {useState} from 'react';
import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import homeBannerManImg from '../../assets/images/home/homeBannerMan.png';
import SearchBox from "../common/SearchBox";

const Banner = ({categories, countries}) => {
    const [category, setCategory] = useState('');
    const [location, setLocation] = useState('');

    return (
        <div className='homeBanner container'>
            <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                    <Box
                        marginTop={{
                            lg: '9rem',
                            md: '7rem',
                            sm: '5rem',
                            xs: '3rem',
                        }}
                    >
                        <Box
                            marginTop={{
                                lg: '15rem',
                                md: '13rem',
                                sm: '12rem',
                                xs: '11rem',
                            }}
                            marginLeft={{
                                lg: '2rem',
                                md: '2rem',
                                sm: '1.5rem',
                                xs: '1rem',
                            }}
                        >
                            <Typography
                                variant="h3"
                                fontSize={{
                                    lg: 48,
                                    md: 44,
                                    sm: 35,
                                    xs: 30
                                }}
                                sx={{fontWeight: 'bold'}}
                            >
                                Find The Perfect Job
                            </Typography>
                            <Typography
                                variant="h3"
                                sx={{fontWeight: 'bold', marginTop: '1rem'}}
                                fontSize={{
                                    lg: 48,
                                    md: 44,
                                    sm: 35,
                                    xs: 30
                                }}
                            >
                                That You Deserve
                            </Typography>

                            <Box mt={6}>
                                <SearchBox
                                    category={category}
                                    setCategory={setCategory}
                                    location={location}
                                    setLocation={setLocation}
                                    countries={countries}
                                    categories={categories}
                                />
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <div style={{marginTop: '3rem'}}>
                        <img className='homeBannerManImg' src={homeBannerManImg} alt=""/>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default Banner;