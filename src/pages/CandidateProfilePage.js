import React, {useEffect} from 'react';
import '../assets/css/companyprofile.css';
import '../assets/css/candidateProfile.css';
import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
import CandidateProfileBanner from "../components/CandidatesProfile/CandidateProfileBanner";
import ProfileDescription from "../components/CandidatesProfile/ProfileDescription";

const CompanyProfilePage = () => {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.title = 'Candidate Profile - workersRUS';
    }, [])
    return (
        <>
            <Navbar navBg='scrolledNav'/>
            <CandidateProfileBanner title="Tarek Fatah"/>
            <ProfileDescription/>
            <Footer/>
        </>
    );
};

export default CompanyProfilePage;