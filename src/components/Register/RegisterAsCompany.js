import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {toastError, toastSuccess} from "../../Helpers/Toaster";
import axios from "../../api/axios-configure";

const RegisterAsCompany = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const onSubmit = async (formData) => {
        setIsSubmitting(true);
        try {
            const {data} = await axios.post('/auth/company/signup/', formData);
            if (data.status === 0) {
                toastError(data.message);
            } else {
                toastSuccess(data.message);
                localStorage.setItem('auth-token', data.data.token);
                localStorage.setItem('company_id', data.data.user_id);
                localStorage.setItem('type', '2');
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
                            <label className="form-label">Company Name *</label>
                            <input type="text"
                                   {...register('company_name', {required: true})}
                                   className="form-control"
                            />
                            {errors.company_name && <span className="errorMsg">This field is required</span>}
                        </div>
                    </div>
                    <div className="col-md-6 mt-3">
                        <div className="form-group">
                            <label className="form-label">Email *</label>
                            <input type="email"
                                   {...register('email', {required: true})}
                                   className="form-control"
                            />
                            {errors.email && <span className="errorMsg">This field is required</span>}
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
                    <div className="col-md-6 mt-3">
                        <div className="form-group">
                            <label className="form-label">Password *</label>
                            <input type="password"
                                   {...register('password', {required: true})}
                                   className="form-control"
                            />
                            {errors.password && <span className="errorMsg">This field is required</span>}
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

export default RegisterAsCompany;