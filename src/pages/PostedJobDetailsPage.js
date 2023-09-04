import React, {useEffect} from 'react';
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import PostedJobDetails from "../components/companyPart/PostedJobDetails";

const PostedJobDetailsPage = () => {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.title = 'Posted Job Details - workersRUS';
    }, [])

    return (
        <>
            <Navbar isForHomePage={false}/>
            <PostedJobDetails/>
            <Footer/>
        </>
    );
};

export default PostedJobDetailsPage;