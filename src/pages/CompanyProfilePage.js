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
    const [type, setType] = useState(null);
    const params = useParams();

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.title = 'Company Profile - workersRUS';
        let id = params.id;
        const loginType = localStorage.getItem('type');
        setType(loginType);
        if (loginType == '2') {
            id = localStorage.getItem('company_id');
        }
        fetchCompanyProfileInfo(id).then(profile => setProfile(profile));
    }, [params.id])
    return (
        <>
            <Navbar navBg='scrolledNav'/>
            <CompanyProfileBanner profile={profile} type={type}/>
            <CompanyProfile profile={profile} type={type}/>
            <Footer/>
        </>
    );
};

export default CompanyProfilePage;