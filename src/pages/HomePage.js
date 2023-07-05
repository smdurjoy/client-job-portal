import React, {useEffect, useState} from 'react';
import "../assets/css/homePage.css";
import Navbar from "../components/Common/Navbar";
import Banner from "../components/Common/Banner";
import Category from "../components/Home/Category/Category";
import Summary from "../components/Home/Summary/Summary";
import Pricing from "../components/Home/Pricing/Pricing";
import Jobs from "../components/Home/Jobs/Jobs";
import Downloads from "../components/Home/Downloads/Downloads";
import HowItWorks from "../components/Home/HowItWorks/HowItWorks";
import Client from "../components/Home/Clients/Client";
import Icons from "../components/Home/Icons/Icons";
import Footer from "../components/Common/Footer";
import FeaturedJobs from '../components/Home/FeaturedJobs/FeaturedJobs';
import Marketing from '../components/Home/Marketing/Marketing';
import {fetchCategories, fetchCountries} from "../api/common/commonApi";
import LoginCompanyBanner from "../components/Common/LoginCompanyBanner";
import {fetchAllJobs} from "../api/jobs/jobs";

const HomePage = () => {
    const [navBackground, setNavBackground] = useState('');
    const [countries, setCountries] = useState([]);
    const [categories, setCategories] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [loginType, setLoginType] = useState('1');
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
        setLoginType(localStorage.getItem('type'));
        fetchCountries().then(countries => setCountries(countries));
        fetchCategories().then(categories => setCategories(categories));
        fetchAllJobs().then(jobs => setJobs(jobs));
    }, [])

    return (
        <>
            <Navbar navBg={navBackground}/>
            {
                loginType == '2' ? <LoginCompanyBanner/> : <Banner
                    countries={countries}
                    categories={categories}
                    loginType={loginType}
                />
            }

            <Category categories={categories}/>
            <Summary/>
            <FeaturedJobs/>
            {
                loginType == '2' ? <></> : <Jobs jobs={jobs}/>
            }
            <Pricing/>
            <Marketing/>
            <Downloads/>
            <HowItWorks/>
            <Client/>
            <Icons/>
            <Footer/>
        </>
    )
}

export default HomePage;