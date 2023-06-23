import React, {useEffect, useState} from 'react';
import Navbar from "../components/Common/Navbar";
import SubBanner from "../components/Common/SubBanner";
import Footer from "../components/Common/Footer";
import {fetchJobsByCompany} from "../api/jobs/jobs";
import Loader from "../components/Loader/Loader";
import PostedJobs from "../components/Company/PostedJobs";
import {useNavigate} from "react-router-dom";

const PostedJobsPage = () => {
    const [jobs, setJobs] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.title = 'Posted Jobs - workersRUS';
        const token = localStorage.getItem('auth-token');
        const authType = localStorage.getItem('type');
        const company_id = localStorage.getItem('company_id');
        if (!token || authType != '2' || !company_id) {
            navigate('/');
        }
        fetchJobsByCompany(company_id).then(res => {
            setJobs(res);
            setLoading(false);
        });
    }, [navigate])

    return (
        <>
            <Navbar navBg='scrolledNav'/>
            <SubBanner title="Posted Jobs"/>
            {
                isLoading ? <Loader/> : <PostedJobs jobs={jobs}/>
            }
            <Footer/>
        </>
    );
};

export default PostedJobsPage;