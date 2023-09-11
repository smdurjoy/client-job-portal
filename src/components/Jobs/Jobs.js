import React, {useState} from 'react';
import {Grid} from "@mui/material";
import SearchBox from "../common/SearchBox";
import Filters from "../common/Filters";
import Box from "@mui/material/Box";
import JobList from "./JobList";
import Loader from "../common/Loader";

const Jobs = ({
                  jobs,
                  countries,
                  categories,
                  appliedJobs,
                  userId,
                  token,
                  isLoading,
                  keyword,
                  setKeyword,
                  handleSearch,
                  categoryId,
                  setCategoryId,
                  countryId,
                  setCountryId,
                  isSearchLoading,
              }) => {
    const [viewMode, setViewMode] = React.useState(0);
    const [sortBy, setSortBy] = useState(1);

    const handleViewModeChange = (event, newValue) => {
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
                        category={categoryId}
                        setCategory={setCategoryId}
                        location={countryId}
                        setLocation={setCountryId}
                        countries={countries}
                        categories={categories}
                        keyword={keyword}
                        setKeyword={setKeyword}
                        handleSearch={handleSearch}
                        isSearchLoading={isSearchLoading}
                    />

                    {
                        (isLoading || isSearchLoading) ? <Loader/> : (
                            <JobList
                                viewMode={viewMode}
                                jobs={jobs}
                                sortBy={sortBy}
                                setSortBy={setSortBy}
                                handleChange={handleViewModeChange}
                                appliedJobs={appliedJobs}
                                userId={userId}
                                token={token}
                            />
                        )
                    }

                </Grid>
            </Grid>
        </Box>
    );
};

export default Jobs;