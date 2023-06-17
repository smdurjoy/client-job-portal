import React, {useEffect, useState} from 'react';
import '../assets/css/jobsPage.css';
import Navbar from "../components/Common/Navbar";
import SubBanner from "../components/Common/SubBanner";
import Jobs from "../components/Jobs/Jobs";
import Footer from "../components/Common/Footer";
import {fetchCategories, fetchCountries} from "../api/common/commonApi";

const JobsPage = () => {
    const [countries, setCountries] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.title = 'Jobs - workersRUS';
        fetchCountries().then(countries => setCountries(countries));
        fetchCategories().then(countries => setCategories(countries));
    }, [])
    return (
        <>
            <Navbar navBg='scrolledNav'/>
            <SubBanner title="Job List - V1"/>
            <Jobs
                countries={countries}
                categories={categories}
            />
            <Footer/>
        </>
    );
};

export default JobsPage;