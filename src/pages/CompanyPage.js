import React, {useEffect, useState} from 'react';
import '../assets/css/candidates.css';
import Navbar from "../components/Common/Navbar";
import SubBanner from "../components/Common/SubBanner";
import Footer from "../components/Common/Footer";
import Employer from "../components/Companies/Companies";
import axios from 'axios';

const CompanyPage = () => {
    const [companies, setCompanies] = useState([]);
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.title = 'Companies - workersRUS';
        fetchCompanies();
    }, [])

    const fetchCompanies = async () => {
        try {
            const {data:{companies}} = await axios.get('/company/all/');
            setCompanies(companies);
        } catch (e) {
            console.log(e)
        } finally {
            setLoader(false);
        }
    }

    return (
        <>
            <Navbar navBg='scrolledNav'/>
            <SubBanner title="Companies"/>
            <Employer companies={companies} loader={loader}/>
            <Footer/>
        </>
    );
};

export default CompanyPage;