import React, {useEffect} from 'react';
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import Companies from "../components/companies";
import {useGetCompaniesQuery} from "../services/common";

const CompaniesPage = () => {
    const {data: companies, isLoading} = useGetCompaniesQuery();

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.title = 'Companies - workersRUS';
    }, [])

    return (
        <>
            <Navbar isForHomePage={false}/>
            <Companies
                companies={companies ? companies.companies : []}
                isLoading={isLoading}
            />
            <Footer/>
        </>
    );
};

export default CompaniesPage;