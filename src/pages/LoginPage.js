import React, {useEffect} from 'react';
import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
import Login from "../components/Login/Login";

const LoginPage = () => {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.title = 'Login - workersRUS';
    }, [])
    return (
        <>
            <Navbar navBg='scrolledNav'/>
            <Login/>
            <Footer/>
        </>
    );
};

export default LoginPage;