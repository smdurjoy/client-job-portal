import React, {useEffect} from 'react';
import Footer from "../components/common/Footer";
import Jobs from "../components/Jobs/Jobs";
import Navbar from "../components/common/Navbar";

const HomePage = () => {

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.title = 'Jobs - workersRUS';
    }, [])

    return (
        <>
            <Navbar isForHomePage={false}/>
            <Jobs/>
            <Footer/>
        </>
    );
};

export default HomePage;