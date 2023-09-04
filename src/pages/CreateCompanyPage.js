import React, {useEffect} from 'react';
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import CompanyCreate from "../components/companyPart/CompanyCreate";

const CreateCompanyPage = () => {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.title = 'Create Company - workersRUS';
    }, [])

    return (
        <>
            <Navbar isForHomePage={false}/>
            <CompanyCreate/>
            <Footer/>
        </>
    );
};

export default CreateCompanyPage;