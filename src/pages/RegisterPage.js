import React, {useEffect} from 'react';
import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
import Register from "../components/Register/Register";

const LoginPage = () => {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.title = 'Register - workersRUS';
    }, [])
    return (
        <>
            <Navbar navBg='scrolledNav'/>
            <Register/>
            <Footer/>
        </>
    );
};

export default LoginPage;