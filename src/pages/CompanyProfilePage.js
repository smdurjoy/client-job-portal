import React, {useEffect} from 'react';
import '../assets/css/candidates.css';
import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
import CompanyProfileBanner from "../components/Common/CompanyProfileBanner";
import CompanyProfile from "../components/Company/CompanyProfile";

const CompanyProfilePage = () => {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.title = 'Company Profile - workersRUS';
    }, [])
    return (
        <>
            <Navbar navBg='scrolledNav'/>
            <CompanyProfileBanner title="Cadillac"/>
            <CompanyProfile/>
            <Footer/>
        </>
    );
};

export default CompanyProfilePage;