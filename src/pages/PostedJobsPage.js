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
    const [token, setToken] = useState(null);
    const [companyId, setCompanyId] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.title = 'Company Jobs - workersRUS';
        const token = localStorage.getItem('auth-token');
        const authType = localStorage.getItem('type');
        const company_id = localStorage.getItem('company_id');
        if (!token || authType != '2' || !company_id) {
            navigate('/');
        }
        setToken(token);
        setCompanyId(company_id);
        fetchJobsByCompany(company_id).then(res => {
            setJobs(res);
            setLoading(false);
        });
    }, [])

    return (
        <>
            <Navbar navBg='scrolledNav'/>
            <SubBanner title="Company Jobs"/>
            {
                isLoading ? <Loader/> : <PostedJobs jobs={jobs}/>
            }
            <Footer/>
        </>
    );
};

export default PostedJobsPage;