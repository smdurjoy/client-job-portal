import React from 'react';
import Box from "@mui/material/Box";
import company1 from '../../assets/images/home/company1.png';
import company2 from '../../assets/images/home/company2.png';
import company3 from '../../assets/images/home/company3.png';
import company4 from '../../assets/images/home/company4.png';
import company5 from '../../assets/images/home/company5.png';
import company6 from '../../assets/images/home/company6.png';

const Companies = () => {
    return (
        <div className='container' style={{ backgroundColor: '#2B3940' }}>
            <Box py={3}>
                <p style={{ color: 'white' }}>Get hired in top companies</p>
                <Box display='flex' justifyContent='space-between' pb={2}>
                    <img src={company1} alt='company1' />
                    <img src={company2} alt='company2' />
                    <img src={company3} alt='company3' />
                    <img src={company4} alt='company4' />
                    <img src={company5} alt='company5' />
                    <img src={company6} alt='company6' />
                </Box>
            </Box>
        </div>
    );
};

export default Companies;