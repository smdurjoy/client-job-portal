import React, {useEffect, useState} from 'react';
import '../assets/css/jobsPage.css';
import Navbar from "../components/Common/Navbar";
import SubBanner from "../components/Common/SubBanner";
import Jobs from "../components/Jobs/Jobs";
import Footer from "../components/Common/Footer";
import {fetchCategories, fetchCountries} from "../api/common/commonApi";
import {fetchJobsByCategory} from "../api/jobs/jobs";
import Loader from "../components/Loader/Loader";

const JobsPage = () => {
    const [jobs, setJobs] = useState([]);
    const [countries, setCountries] = useState([]);
    const [categories, setCategories] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.title = 'Jobs - workersRUS';
        fetchCountries().then(countries => setCountries(countries));
        fetchCategories().then(countries => setCategories(countries));
    }, [])

    const handleCategoryChange = (e) => {
        setJobs([]);
        setLoading(true);
        fetchJobsByCategory(e.id).then(jobs => {
            setJobs(jobs);
            setLoading(false);
        });
    }

    return (
        <>
            <Navbar navBg='scrolledNav'/>
            <SubBanner title="Jobs"/>
            <Jobs
                countries={countries}
                categories={categories}
                handleCategoryChange={handleCategoryChange}
                jobs={jobs}
                isLoading={isLoading}
            />
            {
                isLoading ? <Loader/> : <></>
            }
            <Footer/>
        </>
    );
};

export default JobsPage;