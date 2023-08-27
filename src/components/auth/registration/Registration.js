import React from 'react';
import AuthLayout from "../AuthLayout";
import FormWrapper from "../FormWrapper";
import Form from "./Form";

const Registration = ({img, subTitle}) => {
    return (
        <AuthLayout img={img}>
            <FormWrapper
                title="Create Your Account"
                subTitle={subTitle}
                form={<Form/>}
            />
        </AuthLayout>
    );
};

export default Registration;