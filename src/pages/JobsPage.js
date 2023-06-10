import React, {useEffect} from 'react';
import '../assets/css/jobsPage.css';
import Navbar from "../components/Common/Navbar";
import SubBanner from "../components/Common/SubBanner";
import Jobs from "../components/Jobs/Jobs";
import Footer from "../components/Common/Footer";

const JobsPage = () => {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.title = 'Jobs - workersRUS';
    }, [])
    return (
        <>
            <Navbar navBg='scrolledNav'/>
            <SubBanner title="Job List - V1"/>
            <Jobs/>
            <Footer/>
        </>
    );
};

export default JobsPage;