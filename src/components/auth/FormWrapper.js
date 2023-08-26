import React from 'react';
import Box from "@mui/material/Box";
import H3 from "../Typography/H3";
import H6 from "../Typography/H6";
import logo from '../../assets/images/auth/poweredByLogo.png';

const FormWrapper = ({title, subTitle, form}) => {
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            height="100%"
            width="100%"
            bgcolor="#FFF5EB"
            textAlign="center"
            sx={{borderTopLeftRadius: '80px'}}
        >
            <H3
                text={title}
                color="#0D9CA4"
                fontWeight="bold"
            />
            <H6
                text={subTitle}
                color="#6B6E6F"
            />

            <Box my={7}>
                {form}
            </Box>

            <img src={logo} alt="workersrus"/>
        </Box>
    );
};

export default FormWrapper;