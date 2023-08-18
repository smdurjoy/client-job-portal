import React, {useEffect, useState} from 'react';
import {FormControl, Grid, InputAdornment, MenuItem, Select, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ZoomOutOutlinedIcon from '@mui/icons-material/ZoomOutOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Button from "@mui/material/Button";
import homeBannerManImg from '../../assets/images/home/homeBannerMan.png';

const Banner = () => {
    const [category, setCategory] = useState('');
    const [location, setLocation] = useState('');
    const [mobileBtnClass, setMobileBtnClass] = useState('primaryBtn mobileSearchBtn d-none');

    useEffect(() => {
        if (
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone/i.test(
                navigator.userAgent
            )
        ) {
            setMobileBtnClass('primaryBtn mobileSearchBtn');
        } else {
            setMobileBtnClass('primaryBtn mobileSearchBtn d-none');
        }
    }, []);

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
                            <Box className='homeSearchBox'>
                                <TextField
                                    hiddenLabel
                                    id="filled-hidden-label-normal"
                                    placeholder='Job Title'
                                    sx={{
                                        backgroundColor: 'white',
                                        height: 'inherit',
                                        "& fieldset": {
                                            border: "none",
                                        }
                                    }}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <ZoomOutOutlinedIcon style={{color: '#F28A1F'}}/>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                <div style={{flexBasis: '25%'}}>
                                    <FormControl fullWidth>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            sx={{
                                                "& fieldset": {
                                                    border: "none",
                                                },
                                            }}
                                            value={category}
                                            displayEmpty
                                            startAdornment={
                                                <InputAdornment position="start">
                                                    <CategoryOutlinedIcon style={{color: '#F28A1F'}}/>
                                                </InputAdornment>
                                            }
                                            onChange={(e) => setCategory(e.target.value)}
                                        >
                                            <MenuItem disabled value="">
                                                Category
                                            </MenuItem>
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                <div style={{flexBasis: '25%'}}>
                                    <FormControl fullWidth>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            sx={{
                                                "& fieldset": {
                                                    border: "none",
                                                },
                                            }}
                                            value={location}
                                            displayEmpty
                                            startAdornment={
                                                <InputAdornment position="start">
                                                    <LocationOnOutlinedIcon style={{color: '#F28A1F'}}/>
                                                </InputAdornment>
                                            }
                                            onChange={(e) => setLocation(e.target.value)}
                                        >
                                            <MenuItem disabled value="">
                                                Location
                                            </MenuItem>
                                            <MenuItem value={10}>USA</MenuItem>
                                            <MenuItem value={20}>Canada</MenuItem>
                                            <MenuItem value={30}>Australia</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                <Button className='primaryBtn desktopSearchBtn'>
                                    Search
                                </Button>
                            </Box>

                            <Button className={mobileBtnClass} mt={2}>
                                Search
                            </Button>

                            <Box mt={5}>
                                <p style={{color: '#6B6E6F'}}>
                                    Search keywords e.g. Product Designer
                                </p>
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