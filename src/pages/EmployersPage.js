import React, {useEffect} from 'react';
import '../assets/css/candidates.css';
import Navbar from "../components/Common/Navbar";
import SubBanner from "../components/Common/SubBanner";
import Footer from "../components/Common/Footer";
import Employer from "../components/Employer/Employer";

const EmployersPage = () => {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.title = 'Employers - workersRUS';
    }, [])
    return (
        <>
            <Navbar navBg='scrolledNav'/>
            <SubBanner title="Employer - Grid"/>
            <Employer/>
            <Footer/>
        </>
    );
};

export default EmployersPage;