import React, {useEffect} from 'react';
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import Companies from "../components/companies";

const BookmarkPage = () => {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.title = 'Companies - workersRUS';
    }, [])

    return (
        <>
            <Navbar isForHomePage={false}/>
            <Companies/>
            <Footer/>
        </>
    );
};

export default BookmarkPage;