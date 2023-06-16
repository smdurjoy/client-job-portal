import React, {useState} from 'react';
import '../../assets/css/login.css';
import axios from "axios";
import {useForm} from 'react-hook-form';
import {toastError, toastSuccess} from "../../Helpers/Toaster";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [otpMode, setOtpMode] = useState(false);
    const [number, setNumber] = useState('');

    const onSubmit = async (formData, e) => {
        setIsSubmitting(true);
        toastSuccess('Registration Success');
        try {
            const {data} = await axios.post('/auth/send/otp/', formData);
            if (data.status === 0) {
                toastError(data.message);
            } else {
                toastSuccess(data.message);
                alert(data.message);
                // localStorage.setItem('auth-token', data.data.token);
                setOtpMode(true);
                setNumber(formData.phone_number);
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
        toastSuccess('Registration Success');
        try {
            formData.phone_number = number;
            const {data} = await axios.post('/auth/verify/otp/', formData);
            if (data.status === 0) {
                toastError(data.message);
            } else {
                toastSuccess(data.data.message);
                alert(data.data.message);
                localStorage.setItem('auth-token', data.data.token);
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
                {
                    otpMode ? (
                        <form className="mt-3" onSubmit={handleSubmit(onOTPSubmit)}>
                            <div className="row mb-3">
                                <div className="col-md-6 offset-md-3">
                                    <input type="number"
                                           className="form-control"
                                           placeholder="OTP"
                                           disabled={isSubmitting}
                                           {...register('otp', {required: true})}
                                    />
                                    {errors.otp && <span className="errorMsg">This field is required</span>}
                                </div>
                            </div>
                            <button type="submit" className="btn submitBtn text-center">
                                {isSubmitting ? 'Sending...' : 'Send OTP'}
                            </button>
                        </form>
                    ) : (
                        <form className="mt-3" onSubmit={handleSubmit(onSubmit)}>
                            <div className="row mb-3">
                                <div className="col-md-6 offset-md-3">
                                    <input type="number"
                                           className="form-control"
                                           placeholder="Mobile Number"
                                           disabled={isSubmitting}
                                           {...register('phone_number', {required: true})}
                                    />
                                    {errors.phone_number && <span className="errorMsg">This field is required</span>}
                                </div>
                            </div>
                            <button type="submit" className="btn submitBtn text-center">
                                {isSubmitting ? 'Signing in...' : 'Sign In'}
                            </button>
                        </form>
                    )
                }
            </div>
        </div>
    );
};

export default Login;