import React, {useEffect} from 'react';
import Footer from "../components/common/Footer";
import Jobs from "../components/Jobs/Jobs";
import Navbar from "../components/common/Navbar";
import {useGetAllJobCategoriesQuery, useGetAllJobsQuery} from "../services/jobs";
import {useGetCountriesQuery} from "../services/common";

const HomePage = () => {
    const {data: jobs} = useGetAllJobsQuery();
    const {data: countries} = useGetCountriesQuery();
    const {data: categories} = useGetAllJobCategoriesQuery();

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.title = 'Jobs - workersRUS';
    }, [])

    return (
        <>
            <Navbar isForHomePage={false}/>
            <Jobs
                jobs={jobs?.jobs}
                categories={categories?.job_categories}
                countries={countries?.counties}
            />
            <Footer/>
        </>
    );
};

export default HomePage;