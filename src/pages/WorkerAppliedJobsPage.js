import React, {useEffect, useState} from 'react';
import Navbar from "../components/Common/Navbar";
import SubBanner from "../components/Common/SubBanner";
import Footer from "../components/Common/Footer";
import {fetchWorkerAppliedJobs} from "../api/jobs/jobs";
import Loader from "../components/Loader/Loader";
import AppliedJobs from "../components/Worker/AppliedJobs";
import {useNavigate} from "react-router-dom";

const CompanyPage = () => {
    const [jobs, setJobs] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.title = 'Applied Jobs - workersRUS';
        const workerId = localStorage.getItem('user_id');

        if (!workerId) {
            navigate('/');
            return;
        }

        fetchWorkerAppliedJobs(workerId).then(res => {
            setJobs(res);
            setLoading(false);
        });
    }, [])

    return (
        <>
            <Navbar navBg='scrolledNav'/>
            <SubBanner title="Applied Jobs"/>
            {
                isLoading ? <Loader/> : <AppliedJobs jobs={jobs}/>
            }
            <Footer/>
        </>
    );
};

export default CompanyPage;