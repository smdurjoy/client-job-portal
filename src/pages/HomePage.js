import React, {useEffect, useState} from 'react';
import "../assets/css/homePage.css";
import axios from "axios";
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
import {toastError} from "../Helpers/Toaster";
import {fetchCountries} from "../api/common/commonApi";

const HomePage = () => {
    const [navBackground, setNavBackground] = useState('');
    const [countries, setCountries] = useState([]);
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
        fetchCountries().then(countries => setCountries(countries));
    }, [])

    return (
        <>
            <Navbar navBg={navBackground}/>
            <Banner countries={countries}/>
            <Category/>
            <Summary/>
            <FeaturedJobs/>
            <Jobs/>
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