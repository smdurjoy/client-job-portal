import React from 'react';
import user1 from "../../assets/images/home/user1.svg";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Customers = ({name, title}) => {
    return (
        <Box display='flex' justifyContent='start' alignItems='center' pl={2}>
            <img src={user1} alt='user1' width='60px' style={{ border: '2px solid white', borderRadius: '50%' }}/>
            <Box pl={2} textAlign='left'>
                <Typography variant='h6' color='#6B6E6F'>
                    {name}
                </Typography>
                <Typography variant='caption' color='#6B6E6F'>
                    {title}
                </Typography>
            </Box>
        </Box>
    );
};

export default Customers;