import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import DialpadIcon from '@mui/icons-material/Dialpad';
import Button from "@mui/material/Button";
import H6 from "../../Typography/H6";
import FormInput from "../../common/FormInput";
import useAuthManager from "../../../app/customHooks/useAuthManger";
import {useAppSelector} from "../../../app/hooks";
import {toast} from "react-toastify";
import {setToken, setUserId, setUserPhone} from "../../../services/app";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const WorkerOTPForm = () => {
    const [otp, setOtp] = useState('');
    const {
        isCompanyOtpVerificationLoading,
        isCompanyOtpVerificationSuccess,
        verifyCompanyOtp,
        optCompanyVerificationResponse
    } = useAuthManager();
    const {company_email} = useAppSelector((state) => state.app);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleVerification = () => {
        verifyCompanyOtp(company_email, otp);
    }
    const handleChange = (e) => {
        setOtp(parseInt(e.target.value));
    }

    useEffect(() => {
        if (isCompanyOtpVerificationSuccess) {
            const {data, status} = optCompanyVerificationResponse;
            if (status === 0) {
                toast.warning('Invalid OTP');
                return;
            }
            dispatch(setToken(data.token));
            dispatch(setUserId(data.user_id));
            dispatch(setUserPhone(data.user_phone));
            toast.success('Login Success');
            navigate('/');
        }
    }, [dispatch, isCompanyOtpVerificationSuccess, navigate, optCompanyVerificationResponse]);

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
                    handleChange={handleChange}
                    value={otp}
                />
                <Button
                    className='primaryBtn'
                    sx={{marginTop: '1rem', width: '100%'}}
                    onClick={handleVerification}
                    disabled={isCompanyOtpVerificationLoading}
                >
                    {isCompanyOtpVerificationLoading ? 'Sending..' : 'Send'}
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