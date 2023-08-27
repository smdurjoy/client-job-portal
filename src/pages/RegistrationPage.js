import React, {useEffect} from 'react';
import loginImg from "../assets/images/auth/companyLogin.png";
import Registration from "../components/auth/registration/Registration";

const OTPPage = () => {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.title = 'Registration - workersRUS';
    }, [])

    return (
        <>
            <Registration
                img={loginImg}
                subTitle="By signing up, you're agree to our! Terms & Condition and privacy policy"
            />
        </>
    );
};

export default OTPPage;