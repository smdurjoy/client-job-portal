import React, {useEffect, useState} from 'react';
import '../assets/css/jobsPage.css';
import Navbar from "../components/Common/Navbar";
import SubBanner from "../components/Common/SubBanner";
import Jobs from "../components/Jobs/Jobs";
import Footer from "../components/Common/Footer";
import {fetchCategories, fetchCountries} from "../api/common/commonApi";
import {fetchAllJobs, fetchJobsByCategory} from "../api/jobs/jobs";
import Loader from "../components/Loader/Loader";

const JobsPage = () => {
    const [jobs, setJobs] = useState([]);
    const [countries, setCountries] = useState([]);
    const [categories, setCategories] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [categoryId, setCategoryId] = useState({
        value: '',
        label: 'Select',
    });

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.title = 'Jobs - workersRUS';
        setLoading(true);
        fetchCountries().then(countries => setCountries(countries));
        fetchCategories().then(countries => {
            setCategories(countries);
            fetchJobs(countries);
        });
    }, [])

    const fetchJobs = (cat) => {
        const urlParams = new URLSearchParams(window.location.search);
        const categoryId = urlParams.get('category_id');
        if (categoryId) {
            fetchJobsByCategory(categoryId).then(jobs => {
                setJobs(jobs);
                setLoading(false);
            });
            const label = cat.find(val => val.id == categoryId)?.label;
            setCategoryId({
                value: categoryId,
                label,
            });
        } else {
            fetchAllJobs().then(jobs => {
                setJobs(jobs);
                setLoading(false);
            });
        }
    }

    const handleCategoryChange = (e) => {
        setJobs([]);
        setLoading(true);
        const label = categories.find(val => val.id == e.id)?.label;
        setCategoryId({
            value: e.id,
            label,
        });
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
                categoryId={categoryId}
            />
            {
                isLoading ? <Loader/> : <></>
            }
            <Footer/>
        </>
    );
};

export default JobsPage;