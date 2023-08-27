import React from 'react';
import Box from "@mui/material/Box";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Button from "@mui/material/Button";
import H6 from "../../Typography/H6";
import {Link} from "react-router-dom";
import FormInput from "../../common/FormInput";

const WorkerForm = () => {
    return (
        <Box
            boxShadow="0px 0px 20px 0px rgba(242, 138, 31, 0.15)"
            width="100%"
            bgcolor="white"
            sx={{borderTopLeftRadius: '30px', borderTopRightRadius: '30px'}}
        >
            <Box px={4} py={8}>
                <FormInput
                    placeholder='Enter Your Email *'
                    icon={<EmailOutlinedIcon/>}
                />
                <FormInput
                    placeholder='Enter Your Password *'
                    inputType='password'
                    icon={<LockOutlinedIcon/>}
                />
                <Button className='primaryBtn' sx={{marginTop: '1rem', width: '100%'}}>
                    Login
                </Button>
                <Box textAlign="center" mt={2}>
                    <Link to={'/forget-password'}>
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
                                text="Register"
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