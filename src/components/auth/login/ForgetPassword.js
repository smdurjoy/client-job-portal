import React from 'react';
import AuthLayout from "../AuthLayout";
import FormWrapper from "../FormWrapper";
import ForgetPasswordForm from "./ForgetPasswordForm";

const ForgetPassword = ({img, subtitle}) => {

    return (
        <AuthLayout img={img}>
            <FormWrapper
                title="Forget Password"
                subTitle={subtitle}
                form={<ForgetPasswordForm/>}
            />
        </AuthLayout>
    );
};

export default ForgetPassword;