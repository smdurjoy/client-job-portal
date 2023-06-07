import React from 'react';
import "../assets/css/homePage.css";
import Navbar from "../components/Common/Navbar";
import Banner from "../components/Common/Banner";
import Category from "../components/Home/Category/Category";
import Summary from "../components/Home/Summary/Summary";
import Pricing from "../components/Home/Pricing/Pricing";
import Jobs from "../components/Home/Jobs/Jobs";

const HomePage = () => {
    return (
        <>
            <Navbar/>
            <Banner/>
            <Category/>
            <Summary/>
            <Pricing/>
            <Jobs/>
        </>
    )
}

export default HomePage;