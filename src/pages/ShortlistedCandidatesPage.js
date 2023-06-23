import React, {useEffect, useState} from 'react';
import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
import Loader from "../components/Loader/Loader";
import {useNavigate, useParams} from "react-router-dom";
import {fetchShortlistedCandidates} from "../api/jobs/applied";
import AppliedCandidates from "../components/Candidates/AppliedCandidates";

const PostedJobsPage = () => {
    const [candidates, setCandidates] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [jobId, setJobId] = useState(null);
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.title = 'Shortlisted Candidates - workersRUS';
        const token = localStorage.getItem('auth-token');
        const authType = localStorage.getItem('type');
        const companyId = localStorage.getItem('company_id');
        if (!token || authType != '2' || !companyId) {
            navigate('/');
            return;
        }
        setJobId(params.id);
        fetchShortlistedCandidates(companyId, params.id).then(res => {
            setCandidates(res);
            setLoading(false);
        });
    }, [navigate, params.id])

    return (
        <>
            <Navbar navBg='scrolledNav'/>
            <section style={{marginTop: '7rem'}}>
                {
                    isLoading ? <Loader/> : <AppliedCandidates candidates={candidates}
                                                               jobId={jobId}
                                                               title="Shortlisted Candidates"
                    />
                }
            </section>
            <Footer/>
        </>
    );
};

export default PostedJobsPage;