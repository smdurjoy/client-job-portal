import React, {useEffect} from 'react';
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import CompanyDetails from "../components/companies/CompanyDetails";
import {useGetAllJobsQuery} from "../services/jobs";
import {useAppSelector} from "../app/hooks";
import {useGetCompanyDetailsQuery} from "../services/company";
import Loader from "../components/common/Loader";

const CompanyProfilePage = () => {
    const {data: jobs} = useGetAllJobsQuery();
    const {user_id} = useAppSelector((state) => state.app);
    const {data: company, isLoading} = useGetCompanyDetailsQuery(user_id);
    console.log({company})

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.title = 'Company Profile - workersRUS';
    }, [])

    return (
        <>
            <Navbar isForHomePage={false}/>
            {isLoading ? <Loader/> : (
                <CompanyDetails
                    jobs={jobs?.jobs}
                    company={company?.data}
                    profileMode={true}
                />
            )}
            <Footer/>
        </>
    );
};

export default CompanyProfilePage;