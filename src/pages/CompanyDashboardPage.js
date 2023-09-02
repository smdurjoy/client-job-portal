import React, {useEffect} from 'react';
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import Dashboard from "../components/companyPart/Dashboard";

const CompanyDashboardPage = () => {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.title = 'Dashboard - workersRUS';
    }, [])

    return (
        <>
            <Navbar isForHomePage={false}/>
            <Dashboard/>
            <Footer/>
        </>
    );
};

export default CompanyDashboardPage;