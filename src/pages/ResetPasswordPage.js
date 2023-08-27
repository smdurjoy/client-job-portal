import React, {useEffect} from 'react';
import loginImg from "../assets/images/auth/companyLogin.png";
import ResetPassword from "../components/auth/login/ResetPassword";

const ResetPasswordPage = () => {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.title = 'Reset Password - workersRUS';
    }, [])

    return (
        <>
            <ResetPassword
                img={loginImg}
                subtitle='Your new password must be different from previous used password'
            />
        </>
    );
};

export default ResetPasswordPage;