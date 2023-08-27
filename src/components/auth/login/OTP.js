import React from 'react';
import AuthLayout from "../AuthLayout";
import FormWrapper from "../FormWrapper";
import OTPForm from "./OTPForm";

const Login = () => {
    return (
        <AuthLayout>
            <FormWrapper
                title="OTP Verification"
                subTitle="Please Enter Verification Code"
                form={<OTPForm/>}
            />
        </AuthLayout>
    );
};

export default Login;