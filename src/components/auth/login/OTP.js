import React from 'react';
import AuthLayout from "../AuthLayout";
import FormWrapper from "../FormWrapper";
import OTPForm from "./OTPForm";

const OTP = ({img, subtitle, userType}) => {

    return (
        <AuthLayout img={img}>
            <FormWrapper
                title="OTP Verification"
                subTitle={subtitle}
                form={<OTPForm userType={userType}/>}
            />
        </AuthLayout>
    );
};

export default OTP;