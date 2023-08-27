import React from 'react';
import Box from "@mui/material/Box";
import {InputAdornment, TextField} from "@mui/material";
import DialpadIcon from '@mui/icons-material/Dialpad';
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import H6 from "../../Typography/H6";

const WorkerOTPForm = () => {
    return (
        <Box
            boxShadow="0px 0px 20px 0px rgba(242, 138, 31, 0.15)"
            width="100%"
            bgcolor="white"
            sx={{ borderTopLeftRadius: '30px', borderTopRightRadius: '30px' }}
        >
            <Box px={4} py={10}>
                <Box sx={{border: '1px solid #D4D4D4'}}>
                    <TextField
                        hiddenLabel
                        id="filled-hidden-label-normal"
                        placeholder='Enter OTP *'
                        sx={{
                            backgroundColor: 'white',
                            height: 'inherit',
                            width: '100%',
                            "& fieldset": {
                                border: "none",
                            }
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <DialpadIcon/>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>
                <Button className='primaryBtn' sx={{marginTop: '1rem', width: '100%'}}>
                    Send
                </Button>
                <Box textAlign="center" mt={2}>
                    <Box display="flex" justifyContent="center">
                        <H6
                            text="Don't Get Yet?"
                            color='#6B6E6F'
                        />
                        <Link to={'/'}>
                            <H6
                                text="Resend"
                                color='#0D9CA4'
                                ml={0.5}
                            />
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default WorkerOTPForm;