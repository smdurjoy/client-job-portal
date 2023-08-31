import React, {useState} from 'react';
import {Grid} from "@mui/material";
import SearchBox from "../common/SearchBox";
import Filters from "../common/Filters";
import Box from "@mui/material/Box";
import JobList from "./JobList";

const Jobs = ({jobs, countries, categories}) => {
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
                        countries={countries}
                        categories={categories}
                    />

                    <JobList
                        viewMode={viewMode}
                        jobs={jobs}
                        sortBy={sortBy}
                        setSortBy={setSortBy}
                        handleChange={handleChange}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Jobs;