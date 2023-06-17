import React, {useEffect} from 'react';
import '../assets/css/companyprofile.css';
import '../assets/css/candidateProfile.css';
import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
import Form from "../components/Profile/Form";

const WorkersProfileUpdatePage = () => {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.title = 'Update Profile - workersRUS';
    }, [])
    return (
        <>
            <Navbar navBg='scrolledNav'/>
            <Form/>
            <Footer/>
        </>
    );
};

export default WorkersProfileUpdatePage;