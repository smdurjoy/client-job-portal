import React from 'react';
import Box from "@mui/material/Box";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Button from "@mui/material/Button";
import {useNavigate} from 'react-router-dom';
import FormInput from "../../common/FormInput";

const WorkerForm = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/otp-verification');
    }

    return (
        <Box
            boxShadow="0px 0px 20px 0px rgba(242, 138, 31, 0.15)"
            width="100%"
            bgcolor="white"
            sx={{borderTopLeftRadius: '30px', borderTopRightRadius: '30px'}}
        >
            <Box px={4} py={8}>
                <FormInput
                    placeholder='Phone Number *'
                    icon={<LocalPhoneIcon/>}
                />
                <Button
                    className='primaryBtn'
                    sx={{marginTop: '1rem', width: '100%'}}
                    onClick={handleLogin}
                >
                    Login
                </Button>
            </Box>
        </Box>
    );
};

export default WorkerForm;