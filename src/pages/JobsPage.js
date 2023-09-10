import React, {useEffect} from 'react';
import Footer from "../components/common/Footer";
import Jobs from "../components/Jobs/Jobs";
import Navbar from "../components/common/Navbar";
import {useGetAllJobCategoriesQuery, useGetAllJobsQuery} from "../services/jobs";
import {useGetCountriesQuery} from "../services/common";
import {useAppSelector} from "../app/hooks";
import {useGetAppliedJobsQuery} from "../services/worker";
import Loader from "../components/common/Loader";

const JobsPage = () => {
    const {user_id, token} = useAppSelector((state) => state.app);
    const {data: jobs, isLoading} = useGetAllJobsQuery();
    const {data: countries} = useGetCountriesQuery();
    const {data: categories} = useGetAllJobCategoriesQuery();
    const {data: appliedJobs} = useGetAppliedJobsQuery(user_id);

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.title = 'Jobs - workersRUS';
    }, [])

    return (
        <>
            <Navbar isForHomePage={false}/>
            {
                isLoading ? <Loader/> : (
                    <Jobs
                        jobs={jobs?.jobs}
                        categories={categories?.job_categories}
                        countries={countries?.counties}
                        appliedJobs={appliedJobs?.data}
                        userId={user_id}
                        token={token}
                    />
                )
            }
            <Footer/>
        </>
    );
};

export default JobsPage;