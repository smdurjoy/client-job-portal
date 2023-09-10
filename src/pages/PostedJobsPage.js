import React, {useEffect} from 'react';
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import PostedJobs from "../components/companyPart/PostedJobs";
import {useGetCompanyJobsQuery} from "../services/authJobs";
import {useAppSelector} from "../app/hooks";

const PostedJobsPage = () => {
    const {user_id} = useAppSelector((state) => state.app);

    const {data: jobs, isLoading} = useGetCompanyJobsQuery(user_id);

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.title = 'Dashboard - workersRUS';
    }, [])

    return (
        <>
            <Navbar isForHomePage={false}/>
            <PostedJobs
                jobs={jobs ? jobs.data : []}
                isLoading={isLoading}
            />
            <Footer/>
        </>
    );
};

export default PostedJobsPage;