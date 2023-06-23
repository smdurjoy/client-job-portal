import React, {useEffect, useState} from 'react';
import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
import Loader from "../components/Loader/Loader";
import {useNavigate, useParams} from "react-router-dom";
import {fetchAppliedCandidates} from "../api/jobs/applied";
import AppliedCandidates from "../components/Candidates/AppliedCandidates";

const PostedJobsPage = () => {
    const [candidates, setCandidates] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [jobId, setJobId] = useState(null);
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.title = 'Applied Candidates - workersRUS';
        const token = localStorage.getItem('auth-token');
        const authType = localStorage.getItem('type');
        const companyId = localStorage.getItem('company_id');
        if (!token || authType != '2' || !companyId) {
            navigate('/');
        }
        setJobId(params.id);
        fetchAppliedCandidates(companyId, params.id).then(res => {
            console.log({res})
            setCandidates(res);
            setLoading(false);
        });
    }, [])

    return (
        <>
            <Navbar navBg='scrolledNav'/>
            <section style={{marginTop: '7rem'}}>
                {
                    isLoading ? <Loader/> : <AppliedCandidates candidates={candidates}
                                                               jobId={jobId}
                                                               title="Applied Candidates"
                    />
                }
            </section>
            <Footer/>
        </>
    );
};

export default PostedJobsPage;