import React from 'react';
import AuthLayout from "../AuthLayout";
import FormWrapper from "../FormWrapper";
import ResetPasswordForm from "./ResetPasswordForm";

const ResetPassword = ({img, subtitle}) => {

    return (
        <AuthLayout img={img}>
            <FormWrapper
                title="Reset Password"
                subTitle={subtitle}
                form={<ResetPasswordForm/>}
            />
        </AuthLayout>
    );
};

export default ResetPassword;