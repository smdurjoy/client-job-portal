import React, {useEffect} from 'react';
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import WorkerProfile from "../components/workerProfile";

const HomePage = () => {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.title = 'Profile - workersRUS';
    }, [])

    return (
        <>
            <Navbar isForHomePage={false}/>
            <WorkerProfile/>
            <Footer/>
        </>
    );
};

export default HomePage;