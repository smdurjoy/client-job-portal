import React, {useEffect} from 'react';
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import WorkerProfile from "../components/workerProfile";
import {useAppSelector} from "../app/hooks";
import {useGetWorkerDetailsQuery} from "../services/worker";

const HomePage = () => {
    const {user_id} = useAppSelector((state) => state.app);
    const {data: profile, isLoading} = useGetWorkerDetailsQuery(user_id);

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.title = 'Profile - workersRUS';
    }, [])

    return (
        <>
            <Navbar isForHomePage={false}/>
            <WorkerProfile
                profile={profile}
                isLoading={isLoading}
            />
            <Footer/>
        </>
    );
};

export default HomePage;