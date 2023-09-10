import React, {useEffect} from 'react';
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import JobDetails from "../components/Jobs/JobDetails";
import {useGetJobDetailsQuery} from "../services/jobs";
import {useParams} from "react-router-dom";

const HomePage = () => {
    const {id} = useParams();
    const {data: job} = useGetJobDetailsQuery(id);
    console.log({job})

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.title = 'Job Details - workersRUS';
    }, [])

    return (
        <>
            <Navbar isForHomePage={false}/>
            <JobDetails job={job?.job_details}/>
            <Footer/>
        </>
    );
};

export default HomePage;