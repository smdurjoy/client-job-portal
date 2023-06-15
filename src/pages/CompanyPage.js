import React, {useEffect} from 'react';
import '../assets/css/candidates.css';
import Navbar from "../components/Common/Navbar";
import SubBanner from "../components/Common/SubBanner";
import Footer from "../components/Common/Footer";
import Employer from "../components/Companies/Companies";

const CompanyPage = () => {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.title = 'Companies - workersRUS';
        // fetchCompanies();
    }, [])

    // const fetchCompanies = async () => {
    //     try {
    //         const res = await axios.get(`http://18.208.161.157:8000/company/all`);
    //         console.log({res})
    //     } catch (e) {n
    //         alert('Something Went Wrong');
    //     }
    // }

    return (
        <>
            <Navbar navBg='scrolledNav'/>
            <SubBanner title="Companies"/>
            <Employer/>
            <Footer/>
        </>
    );
};

export default CompanyPage;