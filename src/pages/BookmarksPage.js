import React, {useEffect} from 'react';
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import Bookmark from "../components/bookmark";

const BookmarkPage = () => {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.title = 'Bookmarks - workersRUS';
    }, [])

    return (
        <>
            <Navbar isForHomePage={false}/>
            <Bookmark/>
            <Footer/>
        </>
    );
};

export default BookmarkPage;