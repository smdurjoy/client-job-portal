import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Button from "@mui/material/Button";
import {useNavigate} from 'react-router-dom';
import FormInput from "../../common/FormInput";
import useAuthManager from "../../../app/customHooks/useAuthManger";
import {toast} from "react-toastify";
import {useAppDispatch} from "../../../app/hooks";
import {setUserPhone, setUserType} from "../../../services/app";
import {WORKER_LOGIN} from "../../../helpers/Constants";

const WorkerForm = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [phoneNumberWithCode, setPhoneNumberWithCode] = useState('');
    const navigate = useNavigate();
    const {isOtpSendLoading, isOtpSendSuccess, sendOtp} = useAuthManager();
    const dispatch = useAppDispatch();

    const handleLogin = () => {
        sendOtp(phoneNumberWithCode);
    }
    const handleChange = (e) => {
        const phoneNumber = '+88' + e.target.value;
        dispatch(setUserPhone(phoneNumber))
        setPhoneNumberWithCode(phoneNumber);
        setPhoneNumber(e.target.value);
    }

    useEffect(() => {
        if (isOtpSendSuccess) {
            toast.success('OTP Send Success');
            dispatch(setUserType(WORKER_LOGIN));
            navigate('/otp-verification');
        }
    }, [isOtpSendSuccess, navigate])

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
                    handleChange={handleChange}
                    value={phoneNumber}
                />
                <Button
                    className='primaryBtn'
                    sx={{marginTop: '1rem', width: '100%'}}
                    onClick={handleLogin}
                    disabled={isOtpSendLoading}
                >
                    {isOtpSendLoading ? 'Login in..' : 'Login'}
                </Button>
            </Box>
        </Box>
    );
};

export default WorkerForm;