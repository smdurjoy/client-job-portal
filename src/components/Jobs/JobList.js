import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SortBy from "../common/SortBy";
import {Grid, Tab, Tabs} from "@mui/material";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import ViewStreamOutlinedIcon from "@mui/icons-material/ViewStreamOutlined";
import ListView from "./ListView";
import GridView from "./GridView";

const JobList = ({viewMode, jobs, sortBy, setSortBy, handleChange}) => {
    return (
        <>
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
                        Showing {jobs ? jobs?.length : 0} Results
                    </Typography>
                </Box>

                <Box display="flex" alignItems="center" flexWrap='wrap'>
                    <SortBy
                        sortBy={sortBy}
                        setSortBy={setSortBy}
                    />
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
                        {
                            jobs?.map((job, key) => (
                                <ListView job={job} key={key}/>
                            ))
                        }
                    </>
                ) : (
                    <Grid container columnSpacing={2}>
                        {
                            jobs?.map((job, key) => (
                                <Grid item xs={12} md={6} mt={4} key={key}>
                                    <GridView job={job}/>
                                </Grid>
                            ))
                        }
                    </Grid>
                )
            }
        </>
    );
};

export default JobList;