import React, {useEffect} from 'react';
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import CompanyDetails from "../components/companies/CompanyDetails";
import {useGetAllJobsQuery} from "../services/jobs";

const CompanyDetailsPage = () => {
    const {data: jobs} = useGetAllJobsQuery();

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.title = 'Company Details - workersRUS';
    }, [])

    return (
        <>
            <Navbar isForHomePage={false}/>
            <CompanyDetails jobs={jobs?.jobs}/>
            <Footer/>
        </>
    );
};

export default CompanyDetailsPage;