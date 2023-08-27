import React from 'react';
import Form from "./Form";
import AuthLayout from "../AuthLayout";
import FormWrapper from "../FormWrapper";

const Login = ({img, setImg, subtitle, setSubtitle}) => {
    return (
        <AuthLayout img={img}>
            <FormWrapper
                title="Welcome"
                subTitle={subtitle}
                form={<Form setImg={setImg} setSubtitle={setSubtitle}/>}
            />
        </AuthLayout>
    );
};

export default Login;