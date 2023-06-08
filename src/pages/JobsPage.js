import React from 'react';
import '../assets/css/jobsPage.css';
import Navbar from "../components/Common/Navbar";
import SubBanner from "../components/Common/SubBanner";
import JobFilters from "../components/Jobs/JobFilters";

const JobsPage = () => {
    return (
        <>
            <Navbar navBg='scrolledNav'/>
            <SubBanner/>
            <JobFilters/>
        </>
    );
};

export default JobsPage;