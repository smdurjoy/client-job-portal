import React from 'react';
import {CircularProgress} from "@mui/material";
import Box from "@mui/material/Box";

const Loader = () => {
    return (
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <CircularProgress/>
        </Box>
    );
};

export default Loader;