import React, {useEffect, useState} from 'react';
import '../assets/css/about.css';
import Footer from "../components/Common/Footer";
import Navbar from "../components/Common/Navbar";
import SubBanner from "../components/Common/SubBanner";
import AllCategoryList from "../components/Category/AllCategoryList";
import {fetchCategories} from "../api/common/commonApi";
import Loader from "../components/Loader/Loader";

const AllCategoryListPage = () => {
    const [categories, setCategories] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.title = 'All Categories - workersRUS';
        fetchCategories().then(res => {
            setCategories(res);
            setLoading(false);
        });
    }, [])
    return (
        <>
            <Navbar navBg='scrolledNav'/>
            <SubBanner title="All Categories"/>
            {
                isLoading ? <Loader/> : <AllCategoryList categories={categories}/>
            }
            <Footer/>
        </>
    );
};

export default AllCategoryListPage;