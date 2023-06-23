import React, {useEffect, useState} from 'react';
import '../assets/css/companyprofile.css';
import '../assets/css/candidateProfile.css';
import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
import CandidateProfileBanner from "../components/CandidatesProfile/CandidateProfileBanner";
import ProfileDescription from "../components/CandidatesProfile/ProfileDescription";
import {fetchProfileInfo} from "../api/profile/profile";
import Loader from "../components/Loader/Loader";
import {useParams} from "react-router-dom";
import axios from "axios";
import {toastSuccess} from "../Helpers/Toaster";

const CompanyProfilePage = () => {
    const [profile, setProfile] = useState({
        id: null,
        first_name: '-',
        middle_name: '-',
        last_name: '-',
        email: '-',
        phone_number: '-',
    });
    const [workerId, setWorkerId] = useState('');
    const [jobId, setJobId] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const params = useParams();
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.title = 'Candidate Profile - workersRUS';
        const id = params.id ? params.id : localStorage.getItem('user_id');
        setWorkerId(id);
        setJobId(params.jobId);
        fetchProfileInfo(id).then(res => setProfile(res));
    }, [])

    const makeShortListed = async () => {
        setIsSubmitting(true);
        const token = localStorage.getItem('auth-token');
        try {
            const data = {
                job_id: jobId,
                worker_id: workerId
            }
            await axios.post(`/company/candidate/shortlist/`, data, {
                headers: {
                    'Authorization': `Token ${token}`
                }
            })
            alert('Shortlisted Successfully.');
            toastSuccess('Shortlisted Successfully.');
        } catch (e) {

        }
    }
    return (
        <>
            <Navbar navBg='scrolledNav'/>
            <CandidateProfileBanner profile={profile}
                                    makeShortListed={makeShortListed}
                                    jobId={jobId}
            />
            {
                profile.id ? <ProfileDescription
                        profile={profile}
                        jobId={jobId}
                        isSubmitting={isSubmitting}
                        makeShortListed={makeShortListed}
                    />
                    : <Loader/>
            }
            <Footer/>
        </>
    );
};

export default CompanyProfilePage;