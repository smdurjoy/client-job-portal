import React, {useEffect, useState} from 'react';
import '../../assets/css/login.css';
import axios from "axios";
import {useForm} from 'react-hook-form';
import {toastError, toastSuccess} from "../../Helpers/Toaster";
import EmailVersion from './EmailVersion';
// import OTPVersion from "./OTPVersion";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [otpMode, setOtpMode] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('auth-token');
        if (token) {
            navigate('/');
        }
    }, [navigate]);

    const onSubmit = async (formData, e) => {
        setIsSubmitting(true);
        try {
            const {data} = await axios.post('/auth/send/otp/email/', formData);
            if (data.status === 0) {
                toastError(data.message);
            } else {
                toastSuccess(data.message);
                alert(data.message);
                setOtpMode(true);
            }
        } catch (err) {
            toastError('Something Went Wrong !');
            console.log(err)
        } finally {
            setIsSubmitting(false);
            e.target.reset();
        }
    };

    const onOTPSubmit = async (formData, e) => {
        setIsSubmitting(true);
        try {
            formData.otp = parseInt(formData.otp);
            const {data} = await axios.post('/auth/verify/otp/email/', formData);
            if (data.status === 0) {
                alert(data.message);
                toastError(data.message);
            } else {
                toastSuccess('Login Success');
                alert('Login Success');
                localStorage.setItem('auth-token', data.data.token);
                localStorage.setItem('user_id', data.data.user_id);
                navigate('/');
            }
        } catch (err) {
            toastError('Something Went Wrong !');
        } finally {
            setIsSubmitting(false);
            e.target.reset();
        }
    };

    return (
        <div className="login">
            <div className="container text-center">
                <h4>Login</h4>
                {/*<OTPVersion*/}
                {/*    otpMode={otpMode}*/}
                {/*    handleSubmit={handleSubmit}*/}
                {/*    onOTPSubmit={onOTPSubmit}*/}
                {/*    register={register}*/}
                {/*    errors={errors}*/}
                {/*    isSubmitting={isSubmitting}*/}
                {/*    onSubmit={onSubmit}*/}
                {/*/>*/}
                <EmailVersion
                    otpMode={otpMode}
                    handleSubmit={handleSubmit}
                    onOTPSubmit={onOTPSubmit}
                    register={register}
                    errors={errors}
                    isSubmitting={isSubmitting}
                    onSubmit={onSubmit}
                />
            </div>
        </div>
    );
};

export default Login;