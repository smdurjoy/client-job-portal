import React, {useEffect} from 'react';
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import WorkerProfileUpdate from "../components/workerProfileUpdate";

const HomePage = () => {

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.title = 'Update Profile - workersRUS';
    }, [])

    return (
        <>
            <Navbar isForHomePage={false}/>
            <WorkerProfileUpdate/>
            <Footer/>
        </>
    );
};

export default HomePage;