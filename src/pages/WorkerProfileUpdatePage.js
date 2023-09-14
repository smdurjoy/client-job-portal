import React, {useEffect} from 'react';
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import WorkerProfileUpdate from "../components/workerProfileUpdate";
import {useAppSelector} from "../app/hooks";
import {useGetWorkerDetailsQuery} from "../services/worker";

const WorkerProfileUpdatePage = () => {
    const {user_id} = useAppSelector((state) => state.app);
    const {data: profile, isLoading} = useGetWorkerDetailsQuery(user_id);

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.title = 'Update Profile - workersRUS';
    }, [])

    return (
        <>
            <Navbar isForHomePage={false}/>
            <WorkerProfileUpdate
                profile={profile?.data}
                isLoading={isLoading}
                userId={user_id}
            />
            <Footer/>
        </>
    );
};

export default WorkerProfileUpdatePage;