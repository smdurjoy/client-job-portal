import React, {useEffect, useState} from 'react';
import '../assets/css/candidates.css';
import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
import JobDescription from "../components/Jobs/JobDescription";
import ProfileBanner from "../components/Common/ProfileBanner";
import {useNavigate, useParams} from 'react-router-dom';
import {fetchJobDescription} from '../api/jobs/jobs';
import axios from 'axios';
import {toastError, toastSuccess} from '../Helpers/Toaster';

const JobDescriptionPage = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [jobDescription, setJobDescription] = useState([])
    const [isLoading, setLoading] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [type, setType] = useState('');
    const [workerId, setWorkerId] = useState(null);
    const [token, setToken] = useState(null);
    const params = useParams();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleJobDescription = () => {
        setLoading(true);
        fetchJobDescription(id).then(jobDesc => {
            setJobDescription(jobDesc);
            setLoading(false);
        });
    }

    const handleJobApply = async () => {
        if (token) {
            setIsSubmitting(true);
            try {
                const {data} = await axios.post('/worker/job/apply/', {
                    job_id: parseInt(id),
                    worker_id: parseInt(workerId)
                }, {
                    headers: {
                        'Authorization': `Token ${token}`
                    }
                });
                if (data.status === 0) {
                    alert(data.message);
                    toastError(data.message);
                } else {
                    toastSuccess('Successfully Applied');
                    alert('Successfully Applied');
                    navigate('/')
                }
            } catch (err) {
                toastError('Something Went Wrong !');
            } finally {
                setIsSubmitting(false);
            }
        } else {
            navigate('/login')
        }
    };

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.title = 'Job Description - workersRUS';
        setType(localStorage.getItem('type'));
        handleJobDescription();
    }, [])

    useEffect(() => {
        setWorkerId(localStorage.getItem('user_id'));
        setToken(localStorage.getItem('auth-token'));
    }, [])

    const workerMakeJobShortlisted = async () => {
        if (!token) {
            navigate('/login');
            return;
        }
        const formData = {
            job_id: parseInt(id),
            worker_id: parseInt(workerId)
        }
        setIsSubmitting(true);
        try {
            await axios.post('/worker/job/shortlist/', formData, {
                headers: {
                    'Authorization': `Token ${token}`
                }
            });
            toastSuccess('Shortlisted Successfully.')
        } catch (e) {
            toastError('Something Went Wrong!');
        } finally {
            setIsSubmitting(false);
        }
    }

    const handleAppliedCandidates = () => {
        navigate('/applied-candidates/' + params.id);
    }

    const handleShortlistedCandidates = () => {
        navigate('/shortlisted-candidates/' + params.id);
    }

    const handleJobEdit = () => {

    }

    return (
        <>
            <Navbar navBg='scrolledNav'/>
            <ProfileBanner
                isLoading={isLoading}
                title={jobDescription.job_title}
                subTitle={jobDescription.industry}
                deadline={jobDescription.application_deadline}
                type={type}
                handleJobApply={handleJobApply}
                handleAppliedCandidates={handleAppliedCandidates}
                handleShortlistedCandidates={handleShortlistedCandidates}
                workerMakeJobShortlisted={workerMakeJobShortlisted}
                isSubmitting={isSubmitting}
            />
            <JobDescription
                jobDescription={jobDescription}
                isLoading={isLoading}
                handleJobApply={handleJobApply}
                type={type}
                handleJobEdit={handleJobEdit}
                workerMakeJobShortlisted={workerMakeJobShortlisted}
                isSubmitting={isSubmitting}
            />
            <Footer/>
        </>
    );
};

export default JobDescriptionPage;