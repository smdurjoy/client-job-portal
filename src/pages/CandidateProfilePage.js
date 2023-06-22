import React, {useEffect, useState} from 'react';
import '../assets/css/companyprofile.css';
import '../assets/css/candidateProfile.css';
import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
import CandidateProfileBanner from "../components/CandidatesProfile/CandidateProfileBanner";
import ProfileDescription from "../components/CandidatesProfile/ProfileDescription";
import {fetchProfileInfo} from "../api/profile/profile";
import Loader from "../components/Loader/Loader";

const CompanyProfilePage = () => {
    const [profile, setProfile] = useState({
        id: null,
        first_name: '-',
        middle_name: '-',
        last_name: '-',
        email: '-',
        phone_number: '-',
    });
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.title = 'Candidate Profile - workersRUS';
        const workerId = localStorage.getItem('user_id');
        fetchProfileInfo(workerId).then(res => setProfile(res));
    }, [])

    return (
        <>
            <Navbar navBg='scrolledNav'/>
            <CandidateProfileBanner profile={profile}/>
            {
                profile.id ? <ProfileDescription
                        profile={profile}
                    />
                    : <Loader/>
            }
            <Footer/>
        </>
    );
};

export default CompanyProfilePage;