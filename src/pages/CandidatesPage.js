import React, {useEffect} from 'react';
import '../assets/css/candidates.css';
import Navbar from "../components/Common/Navbar";
import SubBanner from "../components/Common/SubBanner";
import Footer from "../components/Common/Footer";
import Candidates from "../components/Candidates/Candidates";

const CandidatesPage = () => {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, [])
    return (
        <>
            <Navbar navBg='scrolledNav'/>
            <SubBanner title="Candidate - Grid"/>
            <Candidates/>
            <Footer/>
        </>
    );
};

export default CandidatesPage;