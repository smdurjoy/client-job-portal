import React, {useState} from 'react';
import {Grid, MenuItem, Select, Tab, Tabs} from "@mui/material";
import SearchBox from "../common/SearchBox";
import Filters from "../common/Filters";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ListView from "./ListView";
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import ViewStreamOutlinedIcon from '@mui/icons-material/ViewStreamOutlined';
import GridView from "./GridView";

const Jobs = () => {
    const [viewMode, setViewMode] = React.useState(0);
    const [category, setCategory] = useState('');
    const [location, setLocation] = useState('');
    const [sortBy, setSortBy] = useState(1);

    const handleChange = (event, newValue) => {
        setViewMode(newValue);
    };

    return (
        <Box className='container' mt={18}>
            <Grid container px={2} spacing={3} my={5}>
                <Grid item xs={12} md={4}>
                    <Filters/>
                </Grid>
                <Grid item xs={12} md={8}>
                    <SearchBox
                        category={category}
                        setCategory={setCategory}
                        location={location}
                        setLocation={setLocation}
                    />

                    <Box mt={5} display="flex" justifyContent="space-between">
                        <Box>
                            <Typography
                                variant='h4'
                                fontWeight='bold'
                                fontSize={{
                                    lg: 26,
                                    md: 22,
                                    sm: 20,
                                    xs: 18
                                }}
                            >
                                All Jobs
                            </Typography>
                            <Typography
                                variant='h5'
                                color="#6B6E6F"
                                fontSize={{
                                    lg: 18,
                                    md: 16,
                                    sm: 14,
                                    xs: 12
                                }}
                            >
                                Showing 73 Results
                            </Typography>
                        </Box>

                        <Box display="flex" alignItems="center" flexWrap='wrap'>
                            <Typography
                                variant='h5'
                                color="#6B6E6F"
                                fontSize={{
                                    lg: 18,
                                    md: 16,
                                    sm: 14,
                                    xs: 12
                                }}
                            >
                                Sort By:
                            </Typography>

                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                sx={{
                                    "& fieldset": {
                                        border: "none",
                                    },
                                }}
                                value={sortBy}
                                displayEmpty
                                onChange={(e) => setSortBy(e.target.value)}
                            >
                                <MenuItem selected value={1}>
                                    Featured
                                </MenuItem>
                                <MenuItem value={2}>Latest</MenuItem>
                            </Select>
                            |
                            <Box ml={2}>
                                <Tabs value={viewMode} onChange={handleChange}>
                                    <Tab
                                        icon={<GridViewOutlinedIcon/>}
                                        className="customTab"
                                    />
                                    <Tab
                                        icon={<ViewStreamOutlinedIcon/>}
                                        className="customTab"
                                    />
                                </Tabs>
                            </Box>
                        </Box>
                    </Box>

                    {
                        viewMode === 1 ? (
                            <>
                                <ListView/>
                                <ListView/>
                                <ListView/>
                            </>
                        ) : (
                            <Grid container columnSpacing={2}>
                                <Grid item xs={12} md={6} mt={4}>
                                    <GridView/>
                                </Grid>
                                <Grid item xs={12} md={6} mt={4}>
                                    <GridView/>
                                </Grid>
                                <Grid item xs={12} md={6} mt={4}>
                                    <GridView/>
                                </Grid>
                                <Grid item xs={12} md={6} mt={4}>
                                    <GridView/>
                                </Grid>
                            </Grid>
                        )
                    }
                </Grid>
            </Grid>
        </Box>
    );
};

export default Jobs;