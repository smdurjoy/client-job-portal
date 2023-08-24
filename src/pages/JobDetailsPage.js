import React, {useEffect} from 'react';
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import JobDetails from "../components/Jobs/JobDetails";

const HomePage = () => {

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.title = 'Job Details - workersRUS';
    }, [])

    return (
        <>
            <Navbar isForHomePage={false}/>
            <JobDetails/>
            <Footer/>
        </>
    );
};

export default HomePage;