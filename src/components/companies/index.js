import React, {useState} from 'react';
import {Grid} from "@mui/material";
import Box from "@mui/material/Box";
import H6 from "../Typography/H6";
import SortBy from "../common/SortBy";
import CommonPagination from "../common/CommonPagination";
import H3 from "../Typography/H3";
import CompanyCard from "./CompanyCard";

const Companies = () => {
    const [sortBy, setSortBy] = useState(1);

    return (
        <Box className='container workerProfile' mt={16} mb={4}>
            <Box py={6}>
                <Box display='flex' justifyContent='space-between'>
                    <Box>
                        <H3
                            text='Companies'
                            fontWeight='bold'
                        />
                        <H6
                            text='Showing 6 Results'
                            color='#6B6E6F'
                        />
                    </Box>
                    <Box>
                        <SortBy
                            sortBy={sortBy}
                            setSortBy={setSortBy}
                        />
                    </Box>
                </Box>
                <Grid container columnSpacing={4}>
                    <Grid item xs={12} md={4} mt={4}>
                        <CompanyCard/>
                    </Grid>
                    <Grid item xs={12} md={4} mt={4}>
                        <CompanyCard/>
                    </Grid>
                    <Grid item xs={12} md={4} mt={4}>
                        <CompanyCard/>
                    </Grid>
                    <Grid item xs={12} md={4} mt={4}>
                        <CompanyCard/>
                    </Grid>
                    <Grid item xs={12} md={4} mt={4}>
                        <CompanyCard/>
                    </Grid>
                    <Grid item xs={12} md={4} mt={4}>
                        <CompanyCard/>
                    </Grid>
                </Grid>

                <Box display='flex' justifyContent='center' mt={7}>
                    <CommonPagination maxItem={10}/>
                </Box>
            </Box>
        </Box>
    );
};

export default Companies;