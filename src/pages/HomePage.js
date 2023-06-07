import React from 'react';
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

const HomePage = () => {
    return (
        <>
            <Navbar/>
            <Banner/>
            <Category/>
            <Summary/>
            <Pricing/>
            <Jobs/>
            <Downloads/>
            <HowItWorks/>
            <Client/>
        </>
    )
}

export default HomePage;