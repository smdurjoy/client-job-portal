import React, {useEffect} from 'react';
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import PostAJob from "../components/companyPart/PostAJob";

const PostAJobPage = () => {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.title = 'Post a Job - workersRUS';
    }, [])

    return (
        <>
            <Navbar isForHomePage={false}/>
            <PostAJob/>
            <Footer/>
        </>
    );
};

export default PostAJobPage;