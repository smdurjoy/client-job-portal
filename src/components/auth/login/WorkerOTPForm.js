import React from 'react';
import Box from "@mui/material/Box";
import DialpadIcon from '@mui/icons-material/Dialpad';
import Button from "@mui/material/Button";
import H6 from "../../Typography/H6";
import FormInput from "../../common/FormInput";

const WorkerOTPForm = () => {
    return (
        <Box
            boxShadow="0px 0px 20px 0px rgba(242, 138, 31, 0.15)"
            width="100%"
            bgcolor="white"
            sx={{borderTopLeftRadius: '30px', borderTopRightRadius: '30px'}}
        >
            <Box px={4} py={8}>
                <FormInput
                    placeholder='Enter OTP *'
                    icon={<DialpadIcon/>}
                />
                <Button className='primaryBtn' sx={{marginTop: '1rem', width: '100%'}}>
                    Send
                </Button>
                <Box textAlign="center" mt={2}>
                    <Box display="flex" justifyContent="center">
                        <H6
                            text="Don't Get Yet?"
                            color='#6B6E6F'
                        />
                        <Box sx={{cursor: 'pointer'}}>
                            <H6
                                text="Resend"
                                color='#0D9CA4'
                                ml={0.5}
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default WorkerOTPForm;