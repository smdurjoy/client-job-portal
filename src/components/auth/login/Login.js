import React from 'react';
import Form from "./Form";
import AuthLayout from "../AuthLayout";
import FormWrapper from "../FormWrapper";

const Login = () => {
    return (
        <AuthLayout>
            <FormWrapper
                title="Welcome"
                subTitle="Log in to continue your account and explore new jobs"
                form={<Form/>}
            />
        </AuthLayout>
    );
};

export default Login;