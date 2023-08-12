import React, {useEffect, useState} from 'react';
import Navbar from "../components/common/Navbar";
import Banner from "../components/home/Banner";
import Companies from "../components/home/Companies";
import Category from "../components/home/Category";
import HelpToWorker from "../components/home/HelpToWorker";
import FeaturedJobs from "../components/home/FeaturedJobs";
import EasyAccess from "../components/home/EasyAccess";
import PostAJob from "../components/home/PostAJob";
import Statistics from "../components/home/Statistics";
import Plans from "../components/home/Plans";
import SuccessStories from "../components/home/SuccessStories";

const HomePage = () => {
    const [navBackground, setNavBackground] = useState('');

    const onScroll = () => {
        if (window.scrollY > 600) {
            setNavBackground('scrolledNav');
        } else {
            setNavBackground('');
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.title = 'Home - workersRUS';
    }, [])

    return (
        <>
            <Navbar/>
            <Banner/>
            <Companies/>
            <Category/>
            <HelpToWorker/>
            <FeaturedJobs/>
            <EasyAccess/>
            <PostAJob/>
            <Statistics/>
            <Plans/>
            <SuccessStories/>
        </>
    );
};

export default HomePage;