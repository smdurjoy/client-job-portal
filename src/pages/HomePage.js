import React, {useEffect, useState} from 'react';
import Navbar from "../components/common/Navbar";

const HomePage = () => {
    const [navBackground, setNavBackground] = useState('');

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
    }, [])

    return (
        <>
            <Navbar/>
        </>
    );
};

export default HomePage;