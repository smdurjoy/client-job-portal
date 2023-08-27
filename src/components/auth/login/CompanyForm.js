import React from 'react';
import Box from "@mui/material/Box";
import {InputAdornment, TextField} from "@mui/material";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Button from "@mui/material/Button";
import H6 from "../../Typography/H6";
import {Link} from "react-router-dom";

const WorkerForm = () => {
    return (
        <Box
            boxShadow="0px 0px 20px 0px rgba(242, 138, 31, 0.15)"
            width="100%"
            bgcolor="white"
            sx={{borderTopLeftRadius: '30px', borderTopRightRadius: '30px'}}
        >
            <Box px={4} py={10}>
                <Box sx={{border: '1px solid #D4D4D4'}}>
                    <TextField
                        hiddenLabel
                        id="filled-hidden-label-normal"
                        placeholder='Enter Your Email *'
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
                                    <EmailOutlinedIcon/>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>
                <Box sx={{border: '1px solid #D4D4D4'}} mt={2}>
                    <TextField
                        hiddenLabel
                        id="filled-hidden-label-normal"
                        placeholder='Enter Your Password *'
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
                                    <LockOutlinedIcon/>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>
                <Button className='primaryBtn' sx={{marginTop: '1rem', width: '100%'}}>
                    Login
                </Button>
                <Box textAlign="center" mt={2}>
                    <Link to={'/'}>
                        <H6
                            text='Forget Password?'
                            color='#0D9CA4'
                        />
                    </Link>
                    <Box display="flex" justifyContent="center">
                        <H6
                            text="Don't Have an Account? "
                            color='#6B6E6F'
                        />
                        <Link to={'/register'}>
                            <H6
                                text=" Register"
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

export default WorkerForm;