import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {Link, useNavigate} from "react-router-dom";
import H6 from "../../Typography/H6";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FormInput from "../../common/FormInput";
import WarehouseOutlinedIcon from '@mui/icons-material/WarehouseOutlined';
import useAuthManager from "../../../app/customHooks/useAuthManger";
import {toast} from "react-toastify";
import {setCompanyEmail, setUserType} from "../../../services/app";
import {COMPANY_LOGIN} from "../../../helpers/Constants";
import {useDispatch} from "react-redux";

const CompanyRegForm = () => {
    const [companyName, setCompanyName] = useState('');
    const [companyPhone, setCompanyPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const {isCompanyRegisterLoading, isCompanyRegisterSuccess, registerCompany, companyRegisterResponse} = useAuthManager();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleRegister = () => {
        const data = {
            company_name: companyName,
            phone_number: '+88' + companyPhone,
            email,
            password,
        }
        registerCompany(data);
    }

    useEffect(() => {
        if (isCompanyRegisterSuccess) {
            const {status, message} = companyRegisterResponse;
            if (status === 0) {
                toast.warning(message);
                return;
            }
            toast.success(message);
            dispatch(setCompanyEmail(email));
            dispatch(setUserType(COMPANY_LOGIN));
            navigate('/otp-verification');
        }
    }, [companyRegisterResponse, isCompanyRegisterSuccess, navigate]);

    return (
        <Box
            boxShadow="0px 0px 20px 0px rgba(242, 138, 31, 0.15)"
            width="100%"
            bgcolor="white"
            sx={{borderTopLeftRadius: '30px', borderTopRightRadius: '30px'}}
        >
            <Box px={4} py={6}>
                <FormInput
                    placeholder='Company Name *'
                    icon={<WarehouseOutlinedIcon/>}
                    handleChange={(e) => setCompanyName(e.target.value)}
                    value={companyName}
                />
                <FormInput
                    placeholder='Enter Phone Number *'
                    icon={<LocalPhoneIcon/>}
                    handleChange={(e) => setCompanyPhone(e.target.value)}
                    value={companyPhone}
                />
                <FormInput
                    placeholder='Enter Your Email *'
                    icon={<EmailOutlinedIcon/>}
                    handleChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <FormInput
                    placeholder='Enter Password *'
                    inputType='password'
                    icon={<LockOutlinedIcon/>}
                    handleChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <FormInput
                    placeholder='Re-Type Password *'
                    inputType='password'
                    icon={<LockOutlinedIcon/>}
                    handleChange={(e) => setRePassword(e.target.value)}
                    value={rePassword}
                />
                <Button
                    className='primaryBtn'
                    sx={{marginTop: '1rem', width: '100%'}}
                    onClick={handleRegister}
                    disabled={isCompanyRegisterLoading}
                >
                    {isCompanyRegisterLoading ? 'Registering...' : 'Register'}
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