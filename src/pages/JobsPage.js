import React, {useEffect, useState} from 'react';
import Footer from "../components/common/Footer";
import Jobs from "../components/Jobs/Jobs";
import Navbar from "../components/common/Navbar";
import {useGetAllJobCategoriesQuery, useSearchJobsQuery} from "../services/jobs";
import {useGetCountriesQuery} from "../services/common";
import {useAppSelector} from "../app/hooks";
import {useGetAppliedJobsQuery} from "../services/worker";
import {useSearchParams} from "react-router-dom";

const JobsPage = () => {
    const {user_id, token} = useAppSelector((state) => state.app);
    const [searchParams] = useSearchParams();
    const [categoryId, setCategoryId] = useState(searchParams.get('category_id') ?? 'all');
    const [countryId, setCountryId] = useState(searchParams.get('country_id') ?? 'all');
    const [keyword, setKeyword] = useState(searchParams.get('keyword') ?? '');
    const [isSearchLoading, setIsSearchLoading] = useState(false);
    const {data: jobs, isLoading, refetch} = useSearchJobsQuery({keyword, countryId, categoryId});
    const {data: countries} = useGetCountriesQuery();
    const {data: categories} = useGetAllJobCategoriesQuery();
    const {data: appliedJobs} = useGetAppliedJobsQuery(user_id);

    const handleSearch = async () => {
        setIsSearchLoading(true);
        await refetch({ keyword, countryId, categoryId });
        setIsSearchLoading(false);
    }

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
                appliedJobs={appliedJobs?.data}
                userId={user_id}
                token={token}
                isLoading={isLoading}
                handleSearch={handleSearch}
                categoryId={categoryId}
                setCategoryId={setCategoryId}
                countryId={countryId}
                setCountryId={setCountryId}
                keyword={keyword}
                setKeyword={setKeyword}
                isSearchLoading={isSearchLoading}
            />
            <Footer/>
        </>
    );
};

export default JobsPage;