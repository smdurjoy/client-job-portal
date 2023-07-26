import React, {useEffect, useState} from 'react';
import '../assets/css/jobsPage.css';
import Navbar from "../components/Common/Navbar";
import SubBanner from "../components/Common/SubBanner";
import Jobs from "../components/Jobs/Jobs";
import Footer from "../components/Common/Footer";
import {fetchCategories, fetchCountries} from "../api/common/commonApi";
import {fetchAllJobs, searchJobs} from "../api/jobs/jobs";
import Loader from "../components/Loader/Loader";
import {toastError} from "../Helpers/Toaster";

const JobsPage = () => {
    const [jobs, setJobs] = useState([]);
    const [countries, setCountries] = useState([]);
    const [categories, setCategories] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [keyword, setKeyword] = useState('');
    const [category, setCategory] = useState({
        value: '',
        label: 'Select',
    });
    const [country, setCountry] = useState({
        value: '',
        label: 'Select',
    });

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.title = 'Jobs - workersRUS';
        setLoading(true);
        handleJobEffect();
    }, [])

    const handleJobEffect = async () => {
        try {
            const countryRes = await fetchCountries();
            const categoryRes = await fetchCategories();
            setCategories(categoryRes);
            setCountries(countryRes);
            await fetchJobs(categoryRes, countryRes);
        } catch (e) {
            toastError('Something Went Wrong!');
        }
    }

    const fetchJobs = async (categoryRes, countryRes) => {
        try {
            const urlParams = new URLSearchParams(window.location.search);
            let categoryId = urlParams.get('category_id');
            categoryId = categoryId === null ? 'all' : categoryId;
            let countryId = urlParams.get('country_id');
            countryId = countryId === null ? 'all' : countryId;
            let keyword = urlParams.get('keyword');
            keyword = keyword === null ? '' : keyword;
            let jobsRes;

            if (keyword || countryId || categoryId) {
                jobsRes = await searchJobs(keyword, countryId, categoryId);
                if (categoryId) {
                    const label = categoryRes.find(val => val.id == categoryId)?.label;
                    setCategory({
                        value: categoryId,
                        label,
                    });
                }
                if (countryId) {
                    const countryLabel = countryRes.find(val => val.id == countryId)?.label;
                    setCountry({
                        value: countryId,
                        label: countryLabel,
                    });
                }
                setKeyword(keyword);
            } else {
                jobsRes = await fetchAllJobs();
            }
            setJobs(jobsRes);
            setLoading(false);
        } catch (e) {
            toastError('Something Went Wrong!');
        }
    }

    const handleJobSearch = () => {
        setLoading(true);
        const countryVal = country.value ? country.value : 'all';
        const categoryVal = category.value ? category.value : 'all';
        searchJobs(keyword, countryVal, categoryVal).then(jobs => {
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
                jobs={jobs}
                isLoading={isLoading}
                category={category}
                setCategory={setCategory}
                country={country}
                setCountry={setCountry}
                handleJobSearch={handleJobSearch}
                keyword={keyword}
                setKeyword={setKeyword}
            />
            {
                isLoading ? <Loader/> : <></>
            }
            <Footer/>
        </>
    );
};

export default JobsPage;