import React, {useState} from 'react';
import {FormControl, Grid, Input, InputAdornment, MenuItem, Select} from "@mui/material";
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

    return (
        <div className='homeBanner container'>
            <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                    <div style={{marginTop: '9rem'}}>
                        <div style={{marginTop: '15rem', marginLeft: '2rem'}}>
                            <Typography variant="h3" sx={{fontWeight: 'bold'}}>
                                Find The Perfect Job
                            </Typography>
                            <Typography variant="h3" sx={{fontWeight: 'bold', marginTop: '1rem'}}>
                                That You Deserve
                            </Typography>
                            <Box className='homeSearchBox'>
                                <div>
                                    <Input
                                        id="input-with-icon-adornment"
                                        placeholder='Job Title'
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <ZoomOutOutlinedIcon style={{color: '#F28A1F'}}/>
                                            </InputAdornment>
                                        }
                                    />
                                </div>
                                <div style={{ flexBasis: '25%' }}>
                                    <FormControl fullWidth>
                                        {/*<InputLabel id="demo-simple-select-label">Category</InputLabel>*/}
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            sx={{
                                                "& fieldset": {
                                                    border: "none",
                                                },
                                            }}
                                            value={category}
                                            label="Category"
                                            startAdornment={
                                                <InputAdornment position="start">
                                                    <CategoryOutlinedIcon style={{color: '#F28A1F'}}/>
                                                </InputAdornment>
                                            }
                                            onChange={(e) => setCategory(e.target.value)}
                                        >
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                <div style={{ flexBasis: '25%' }}>
                                    <FormControl fullWidth>
                                        {/*<InputLabel id="demo-simple-select-label">Category</InputLabel>*/}
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            sx={{
                                                "& fieldset": {
                                                    border: "none",
                                                },
                                            }}
                                            value={location}
                                            label="Location"
                                            startAdornment={
                                                <InputAdornment position="start">
                                                    <LocationOnOutlinedIcon style={{color: '#F28A1F'}}/>
                                                </InputAdornment>
                                            }
                                            onChange={(e) => setLocation(e.target.value)}
                                        >
                                            <MenuItem value={10}>USA</MenuItem>
                                            <MenuItem value={20}>Canada</MenuItem>
                                            <MenuItem value={30}>Australia</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                <div>
                                    <Button className='primaryBtn'>
                                        Search
                                    </Button>
                                </div>
                            </Box>

                            <Box mt={5}>
                                <p style={{ color: '#6B6E6F' }}>
                                    Search keywords e.g. Product Designer
                                </p>
                            </Box>
                        </div>
                    </div>
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