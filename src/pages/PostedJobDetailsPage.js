import React, {useEffect, useState} from 'react';
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import PostedJobDetails from "../components/companyPart/PostedJobDetails";
import {useGetAppliedCandidatesQuery, useGetJobDetailsQuery} from "../services/authJobs";
import {useAppSelector} from "../app/hooks";
import {useSearchParams} from "react-router-dom";
import Loader from "../components/common/Loader";

const PostedJobDetailsPage = () => {
    const [searchParams] = useSearchParams();
    const [jobId] = useState(searchParams.get('job_id') ?? null);
    const {user_id: companyId} = useAppSelector((state) => state.app);
    const {data: candidates, isLoading} = useGetAppliedCandidatesQuery({
        companyId,
        jobId
    }, {skip: !jobId || !companyId});
    const {data: job, isLoading: isJobFetchLoading} = useGetJobDetailsQuery(jobId, {skip: !jobId});

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.title = 'Posted Job Details - workersRUS';
    }, [])

    return (
        <>
            <Navbar isForHomePage={false}/>
            {isLoading || isJobFetchLoading ? <Loader/> : <PostedJobDetails candidates={candidates} job={job?.job_details}/>}
            <Footer/>
        </>
    );
};

export default PostedJobDetailsPage;