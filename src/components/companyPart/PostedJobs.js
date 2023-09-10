import React, {useState} from 'react';
import H3 from "../Typography/H3";
import Box from "@mui/material/Box";
import H6 from "../Typography/H6";
import {MenuItem, Select} from "@mui/material";
import CommonTable from "./CommonTable";
import Loader from "../common/Loader";

const PostedJobs = ({jobs, isLoading}) => {
    const [sortBy, setSortBy] = useState(1);

    return (
        <Box className='container' mt={16} mb={4}>
            {
                isLoading ? (
                    <Loader/>
                ) : (
                    <Box py={6}>
                        <Box display='flex' justifyContent='space-between' flexWrap='wrap'>
                            <Box>
                                <H3
                                    text='All Posted Jobs'
                                    fontWeight='bold'
                                />
                                <H6
                                    text='Showing 73 Results'
                                    color='#6B6E6F'
                                />
                            </Box>
                            <Box display='flex' alignItems='center'>
                                <H6
                                    text='Sort By:'
                                    color='#6B6E6F'
                                />

                                <Select
                                    sx={{
                                        color: '#0D9CA4',
                                        "& fieldset": {
                                            border: "none",
                                        },
                                    }}
                                    value={sortBy}
                                    displayEmpty
                                    onChange={(e) => setSortBy(e.target.value)}
                                >
                                    <MenuItem selected value={1} sx={{color: '#0D9CA4'}}>
                                        Product Designer
                                    </MenuItem>
                                    <MenuItem value={2} sx={{color: '#0D9CA4'}}>Area Manager</MenuItem>
                                    <MenuItem value={3} sx={{color: '#0D9CA4'}}>Worker</MenuItem>
                                    <MenuItem value={4} sx={{color: '#0D9CA4'}}>Plumber</MenuItem>
                                </Select>
                            </Box>
                        </Box>

                        <Box mt={5}>
                            <CommonTable jobs={jobs}/>
                        </Box>
                    </Box>
                )
            }
        </Box>
    );
};

export default PostedJobs;