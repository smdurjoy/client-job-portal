import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {toastError, toastSuccess} from "../../Helpers/Toaster";
import axios from "axios";

const RegisterAsWorker = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('auth-token');
        if (token) {
            navigate('/');
        }
    }, [navigate]);

    const onSubmit = async (formData) => {
        setIsSubmitting(true);
        try {
            const {data} = await axios.post('/auth/signup/', formData);
            if (data.status === 0) {
                toastError(data.message);
            } else {
                toastSuccess(data.message);
                localStorage.setItem('auth-token', data.data.token);
                localStorage.setItem('user_id', data.data.user_id);
                localStorage.setItem('type', '1');
                navigate('/');
            }
        } catch (e) {
            toastError('Something Went Wrong !');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <form className="mt-3" onSubmit={handleSubmit(onSubmit)}>
                <div className="row mb-3">
                    <div className="col-md-6 mt-3">
                        <div className="form-group">
                            <label className="form-label">First Name *</label>
                            <input type="text"
                                   {...register('first_name', {required: true})}
                                   className="form-control"
                            />
                            {errors.first_name && <span className="errorMsg">This field is required</span>}
                        </div>
                    </div>
                    <div className="col-md-6 mt-3">
                        <div className="form-group">
                            <label className="form-label">Last Name *</label>
                            <input type="text"
                                   {...register('last_name', {required: true})}
                                   className="form-control"
                            />
                            {errors.last_name && <span className="errorMsg">This field is required</span>}
                        </div>
                    </div>
                    <div className="col-md-6 mt-3">
                        <div className="form-group">
                            <label className="form-label">Phone Number *</label>
                            <input type="number"
                                   {...register('phone_number', {required: true})}
                                   className="form-control"
                            />
                            {errors.phone_number && <span className="errorMsg">This field is required</span>}
                        </div>
                    </div>
                </div>
                <button type="submit"
                        className="btn submitBtn text-center mt-3"
                        disabled={isSubmitting}
                >
                    {isSubmitting ? 'Signing up...' : 'Sign Up'}
                </button>
            </form>
        </div>
    );
};

export default RegisterAsWorker;