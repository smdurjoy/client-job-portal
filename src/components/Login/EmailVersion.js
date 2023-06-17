import React from 'react';

const EmailVersion = ({otpMode, handleSubmit, onOTPSubmit, register, errors, isSubmitting, onSubmit}) => {
    return (
        <div>
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
                                <input type="email"
                                       className="form-control"
                                       placeholder="Email"
                                       disabled={isSubmitting}
                                       {...register('email', {required: true})}
                                />
                                {errors.email && <span className="errorMsg">This field is required</span>}
                            </div>
                        </div>
                        <button type="submit" className="btn submitBtn text-center">
                            {isSubmitting ? 'Signing in...' : 'Sign In'}
                        </button>
                    </form>
                )
            }
        </div>
    );
};

export default EmailVersion;