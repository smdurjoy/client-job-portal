import React from 'react';
import '../assets/css/jobsPage.css';
import Navbar from "../components/Common/Navbar";
import SubBanner from "../components/Common/SubBanner";
import JobFilters from "../components/Jobs/JobFilters";
import JobsList from "../components/Jobs/JobsList";
import Footer from "../components/Common/Footer";

const JobsPage = () => {
    return (
        <>
            <Navbar navBg='scrolledNav'/>
            <SubBanner/>
            <JobFilters/>
            <Footer/>
        </>
    );
};

export default JobsPage;