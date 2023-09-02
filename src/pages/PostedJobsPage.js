import React, {useEffect} from 'react';
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import PostedJobs from "../components/companyPart/PostedJobs";

const PostedJobsPage = () => {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.title = 'Dashboard - workersRUS';
    }, [])

    return (
        <>
            <Navbar isForHomePage={false}/>
            <PostedJobs/>
            <Footer/>
        </>
    );
};

export default PostedJobsPage;