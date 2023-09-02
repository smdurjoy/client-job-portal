import React from 'react';
import Box from "@mui/material/Box";
import H3 from "../../Typography/H3";
import Button from "@mui/material/Button";
import CommonTable from "../CommonTable";

const RecentJobs = ({jobs}) => {
    return (
        <Box p={3} boxShadow='0 0 20px 0 rgba(0, 0, 0, 0.05)' my={10}>
            <Box display='flex' justifyContent='space-between'>
                <H3
                    text='Expired jobs'
                />
                <Button variant='outlined' className='secondaryBtn'>
                    Explore All
                </Button>
            </Box>
            <Box mt={2}>
                <CommonTable
                    jobs={jobs}
                    type={2}
                />
            </Box>
        </Box>
    );
};

export default RecentJobs;