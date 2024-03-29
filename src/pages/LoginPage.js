import React, {useEffect, useState} from 'react';
import Login from "../components/auth/login/Login";
import loginImg from "../assets/images/auth/workerLogin.png";

const LoginPage = () => {
    const [img, setImg] = useState(loginImg);
    const [subtitle, setSubtitle] = useState('Log in to continue your account and explore new jobs');

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.title = 'Login - workersRUS';
    }, [])

    return (
        <>
            <Login
                img={img}
                setImg={setImg}
                subtitle={subtitle}
                setSubtitle={setSubtitle}
            />
        </>
    );
};

export default LoginPage;