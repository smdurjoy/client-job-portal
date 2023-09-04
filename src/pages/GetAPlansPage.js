import React, {useEffect} from 'react';
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import GetAPlan from "../components/companyPart/GetAPlan";

const GetAPlansPage = () => {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.title = 'Dashboard - workersRUS';
    }, [])

    return (
        <>
            <Navbar isForHomePage={false}/>
            <GetAPlan/>
            <Footer/>
        </>
    );
};

export default GetAPlansPage;