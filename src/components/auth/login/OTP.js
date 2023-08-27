import React from 'react';
import AuthLayout from "../AuthLayout";
import FormWrapper from "../FormWrapper";
import OTPForm from "./OTPForm";

const OTP = ({img, subtitle}) => {

    return (
        <AuthLayout img={img}>
            <FormWrapper
                title="OTP Verification"
                subTitle={subtitle}
                form={<OTPForm/>}
            />
        </AuthLayout>
    );
};

export default OTP;