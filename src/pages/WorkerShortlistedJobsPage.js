import React, {useEffect, useState} from 'react';
import Navbar from "../components/Common/Navbar";
import SubBanner from "../components/Common/SubBanner";
import Footer from "../components/Common/Footer";
import {fetchWorkerShortlistedJobs} from "../api/jobs/jobs";
import Loader from "../components/Loader/Loader";
import ShortlistedJobs from "../components/Worker/ShortlistedJobs";
import {useNavigate} from "react-router-dom";

const CompanyPage = () => {
    const [jobs, setJobs] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const navigate = useNavigate();


    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.title = 'Shortlisted Jobs - workersRUS';
        const workerId = localStorage.getItem('user_id');

        if (!workerId) {
            navigate('/');
            return;
        }

        fetchWorkerShortlistedJobs(workerId).then(res => {
            setJobs(res);
            setLoading(false);
        });
    }, [navigate])

    return (
        <>
            <Navbar navBg='scrolledNav'/>
            <SubBanner title="Shortlisted Jobs"/>
            {
                isLoading ? <Loader/> : <ShortlistedJobs jobs={jobs}/>
            }
            <Footer/>
        </>
    );
};

export default CompanyPage;