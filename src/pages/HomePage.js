import React from 'react';
import "../assets/css/homePage.css";
import Navbar from "../components/Common/Navbar";
import Banner from "../components/Common/Banner";
import Category from "../components/Category/Category";
import Summary from "../components/Summary/Summary";

const HomePage = () => {
    return (
        <>
            <Navbar/>
            <Banner/>
            <Category/>
            <Summary/>
        </>
    )
}

export default HomePage;