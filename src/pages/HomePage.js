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
import Download from "../components/home/Download";
import Footer from "../components/common/Footer";
import {useGetCountriesQuery} from "../services/common";
import {useGetAllJobCategoriesQuery} from "../services/jobs";

const HomePage = () => {
    const [isForHomePage, setIsForHomePage] = useState(true);
    const {data: countries} = useGetCountriesQuery();
    const {data: categories} = useGetAllJobCategoriesQuery();

    const onScroll = () => {
        if (window.scrollY > 500) {
            setIsForHomePage(false);
        } else {
            setIsForHomePage(true);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.title = 'Home - workersRUS';
    }, [])

    return (
        <>
            <Navbar isForHomePage={isForHomePage}/>
            <Banner
                categories={categories?.job_categories}
                countries={countries?.counties}
            />
            <Companies/>
            <Category categories={categories?.job_categories}/>
            <HelpToWorker/>
            <FeaturedJobs/>
            <EasyAccess/>
            <PostAJob/>
            <Statistics/>
            <Plans/>
            <SuccessStories/>
            <Download/>
            <Footer/>
        </>
    );
};

export default HomePage;