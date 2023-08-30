import React from 'react';
import {MenuItem, Select} from "@mui/material";
import H6 from "../Typography/H6";
import Box from "@mui/material/Box";

const SortBy = ({sortBy, setSortBy}) => {
    return (
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
                <MenuItem selected value={1} sx={{ color: '#0D9CA4' }}>
                    Featured
                </MenuItem>
                <MenuItem value={2} sx={{ color: '#0D9CA4' }}>Latest</MenuItem>
            </Select>
        </Box>
    );
};

export default SortBy;