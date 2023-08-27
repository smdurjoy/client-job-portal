import React from 'react';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import H6 from "../../Typography/H6";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FormInput from "../../common/FormInput";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const CompanyRegForm = () => {
    return (
        <Box
            boxShadow="0px 0px 20px 0px rgba(242, 138, 31, 0.15)"
            width="100%"
            bgcolor="white"
            sx={{borderTopLeftRadius: '30px', borderTopRightRadius: '30px'}}
        >
            <Box px={4} py={6}>
                <FormInput
                    placeholder='Username *'
                    icon={<PersonOutlineOutlinedIcon/>}
                />
                <FormInput
                    placeholder='Enter Phone Number *'
                    icon={<LocalPhoneIcon/>}
                />
                <FormInput
                    placeholder='Enter Your Email *'
                    icon={<EmailOutlinedIcon/>}
                />
                <FormInput
                    placeholder='Enter Password *'
                    icon={<LockOutlinedIcon/>}
                />
                <FormInput
                    placeholder='Re-Type Password *'
                    icon={<LockOutlinedIcon/>}
                />
                <Button className='primaryBtn' sx={{marginTop: '1rem', width: '100%'}}>
                    Register
                </Button>
                <Box textAlign="center" mt={2}>
                    <Box display="flex" justifyContent="center">
                        <H6
                            text="Already Have an Account?"
                            color='#6B6E6F'
                        />
                        <Link to={'/login'}>
                            <H6
                                text="Login"
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

export default CompanyRegForm;