import React, {useEffect} from 'react';
import loginImg from "../assets/images/auth/companyLogin.png";
import ForgetPassword from "../components/auth/login/ForgetPassword";

const ForgetPasswordPage = () => {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.title = 'Forget Password - workersRUS';
    }, [])

    return (
        <>
            <ForgetPassword
                img={loginImg}
                subtitle='Enter your email to reset password'
            />
        </>
    );
};

export default ForgetPasswordPage;