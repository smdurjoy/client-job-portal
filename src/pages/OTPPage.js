import React, {useEffect, useState} from 'react';
import loginImg from "../assets/images/auth/workerLogin.png";
import OTP from "../components/auth/login/OTP";
import {useAppSelector} from "../app/hooks";

const OTPPage = () => {
    const [img, setImg] = useState(loginImg);
    const [subtitle, setSubtitle] = useState('Please Enter Verification Code');
    const {user_type} = useAppSelector((state) => state.app);

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.title = 'OTP Verification - workersRUS';
    }, [])

    return (
        <>
            <OTP
                img={img}
                setImg={setImg}
                subtitle={subtitle}
                setSubtitle={setSubtitle}
                userType={user_type}
            />
        </>
    );
};

export default OTPPage;