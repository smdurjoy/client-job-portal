import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Button from "@mui/material/Button";
import H6 from "../../Typography/H6";
import {Link, useNavigate} from "react-router-dom";
import FormInput from "../../common/FormInput";
import {setCompanyEmail, setToken, setUserId, setUserPhone, setUserType} from "../../../services/app";
import {useAppDispatch} from "../../../app/hooks";
import useAuthManager from "../../../app/customHooks/useAuthManger";
import {toast} from "react-toastify";
import {COMPANY_LOGIN} from "../../../helpers/Constants";

const WorkerForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {isCompanyLoginLoading, isCompanyLoginSuccess, companyLogin, companyLoginResponse} = useAuthManager();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        const email = e.target.value;
        dispatch(setCompanyEmail(email))
        setEmail(email);
    }

    const handleLogin = () => {
        companyLogin(email, password);
    }

    useEffect(() => {
        if (isCompanyLoginSuccess) {
            const {status, message} = companyLoginResponse;
            if (status === 0) {
                toast.warning(message);
                return;
            }
            const {data: {user_id, user_phone, token}} = companyLoginResponse;
            dispatch(setCompanyEmail(email));
            dispatch(setUserType(COMPANY_LOGIN));
            dispatch(setToken(token));
            dispatch(setUserId(user_id));
            dispatch(setUserPhone(user_phone));
            toast.success('Login Success');
            navigate('/');
        }
    }, [isCompanyLoginSuccess, navigate])

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
                    handleChange={handleEmailChange}
                />
                <FormInput
                    placeholder='Enter Your Password *'
                    inputType='password'
                    icon={<LockOutlinedIcon/>}
                    handleChange={(e) => setPassword(e.target.value)}
                />
                <Button
                    className='primaryBtn'
                    sx={{marginTop: '1rem', width: '100%'}}
                    onClick={handleLogin}
                    disabled={isCompanyLoginLoading}
                >
                    {isCompanyLoginLoading ? 'Login in..' : 'Login'}
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