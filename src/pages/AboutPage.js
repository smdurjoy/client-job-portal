import React, {useEffect} from 'react';
import '../assets/css/about.css';
import Footer from "../components/Common/Footer";
import About from "../components/About/About";
import Navbar from "../components/Common/Navbar";

const AboutPage = () => {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.title = 'About - workersRUS';
    }, [])
    return (
        <>
            <Navbar navBg='scrolledNav'/>
            <About/>
            <Footer/>
        </>
    );
};

export default AboutPage;