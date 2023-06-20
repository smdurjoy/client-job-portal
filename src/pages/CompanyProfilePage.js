import React, {useEffect, useState} from 'react';
import '../assets/css/candidates.css';
import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
import CompanyProfileBanner from "../components/Common/CompanyProfileBanner";
import CompanyProfile from "../components/Company/CompanyProfile";
import {fetchCompanyProfileInfo} from "../api/company/company";
import {useParams} from "react-router-dom";

const CompanyProfilePage = () => {
    const [profile, setProfile] = useState({});
    const params = useParams();

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.title = 'Company Profile - workersRUS';
        fetchCompanyProfileInfo(params.id).then(profile => setProfile(profile));
    }, [])
    return (
        <>
            <Navbar navBg='scrolledNav'/>
            <CompanyProfileBanner profile={profile}/>
            <CompanyProfile profile={profile}/>
            <Footer/>
        </>
    );
};

export default CompanyProfilePage;