import React, {useEffect} from 'react';
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import AppliedJobs from "../components/appliedJobs";
import {useAppSelector} from "../app/hooks";
import {useGetAppliedJobsQuery} from "../services/worker";

const AppliedJobsPage = () => {
    const {user_id} = useAppSelector((state) => state.app);
    const {data: appliedJobs} = useGetAppliedJobsQuery(user_id);

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.title = 'Applied Jobs - workersRUS';
    }, [])

    return (
        <>
            <Navbar isForHomePage={false}/>
            <AppliedJobs appliedJobs={appliedJobs ? appliedJobs?.data : []}/>
            <Footer/>
        </>
    );
};

export default AppliedJobsPage;