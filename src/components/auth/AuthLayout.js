import React from 'react';
import {Grid} from "@mui/material";
import Box from "@mui/material/Box";

const AuthLayout = ({img, children}) => {
    return (
        <Box bgcolor="#ffdfbd" height="100vh">
            <Grid container height="100%">
                <Grid item xs={12} md={6}>
                    <Box display="flex" alignItems="center" justifyContent="center" height="100%">
                        <img src={img} alt="loginImg" className='loginImg'/>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box display="flex" alignItems="center" justifyContent="center" height="100%">
                        {children}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AuthLayout;