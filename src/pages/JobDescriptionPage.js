import React, {useEffect} from 'react';
import '../assets/css/candidates.css';
import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
import JobDescription from "../components/Jobs/JobDescription";
import ProfileBanner from "../components/Common/ProfileBanner";

const CandidatesPage = () => {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.title = 'Job Description - workersRUS';
    }, [])
    return (
        <>
            <Navbar navBg='scrolledNav'/>
            <ProfileBanner title="Python 3 Bootcamp"/>
            <JobDescription/>
            <Footer/>
        </>
    );
};

export default CandidatesPage;