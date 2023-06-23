import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {toastError, toastSuccess} from "../../Helpers/Toaster";

const LoginAsCompany = () => {
    const {
        register, handleSubmit, formState: {errors},
    } = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);
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
            const {data} = await axios.post('/auth/company/login/', formData);
            if (data.status === 0) {
                toastError(data.message);
            } else {
                toastSuccess(data.message);
                localStorage.setItem('auth-token', data.data.token);
                localStorage.setItem('company_id', data.data.user_id);
                localStorage.setItem('type', '2');
                navigate('/');
            }
        } catch (err) {
            toastError('Something Went Wrong !');
        } finally {
            setIsSubmitting(false);
            e.target.reset();
        }
    };

    return (<div>
        <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="row mb-3">
                <div className="col-md-6 offset-md-3">
                    <label className="form-label">Email</label>
                    <input type="email"
                           className="form-control"
                           placeholder="Email"
                           disabled={isSubmitting}
                           {...register('email', {required: true})}
                    />
                    {errors.email && <span className="errorMsg">This field is required</span>}
                </div>
                <div className="col-md-6 offset-md-3 mt-3">
                    <label className="form-label">Password</label>
                    <input type="password"
                           className="form-control"
                           placeholder="Password"
                           disabled={isSubmitting}
                           {...register('password', {required: true})}
                    />
                    {errors.password && <span className="errorMsg">This field is required</span>}
                </div>
            </div>
            <button type="submit" className="btn submitBtn text-center" disabled={isSubmitting}>
                {isSubmitting ? 'Signing in...' : 'Sign In'}
            </button>
        </form>
    </div>);
};

export default LoginAsCompany;