import React, {useEffect, useState} from 'react';
import Navbar from "../components/common/Navbar";
import Loader from "../components/common/Loader";
import Footer from "../components/common/Footer";
import {useAppSelector} from "../app/hooks";
import {useGetCompanyDetailsQuery} from "../services/company";
import CompanyCreate from "../components/companyPart/CompanyCreate";
import {useGetCountriesQuery} from "../services/common";
import useCompanyManger from "../app/customHooks/useCompanyManger";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

const CompanyProfileUpdatePage = () => {
    const {user_id} = useAppSelector((state) => state.app);
    const {data: company, isLoading} = useGetCompanyDetailsQuery(user_id);
    const {data: countries} = useGetCountriesQuery();
    const {
        isUpdateCompanyProfileLoading,
        isUpdateCompanyProfileSuccess,
        updateCompanyProfile,
        isUpdateCompanyProfileError,
        updateCompanyProfileError
    } = useCompanyManger();
    const [companyDetails, setCompanyDetails] = useState({
        user_id,
        industry_id: company?.data?.industry_id ?? null,
        country_id: company?.data?.country_id ?? null,
        industry_type: company?.data?.industry_type ?? null,
        company_name: company?.data?.company_name ?? null,
        company_contact_number: company?.data?.company_contact_number ?? null,
        company_email: company?.data?.company_email ?? null,
        company_website: company?.data?.company_website ?? null,
        state_id: company?.data?.state_id ?? null,
        city_id: company?.data?.city_id ?? null,
        area_id: company?.data?.area_id ?? null,
        address: company?.data?.address ?? null,
        zip_code: company?.data?.zip_code ?? null,
        contact_person_name: company?.data?.contact_person_name ?? null,
        contact_person_position: company?.data?.contact_person_position ?? null,
        contact_person_mobile: company?.data?.contact_person_mobile ?? null,
        contact_person_email: company?.data?.contact_person_email ?? null,
        about_company: company?.data?.about_company ?? null,
    });
    const navigate = useNavigate();

    const handleSave = async () => {
        await updateCompanyProfile(companyDetails);
    }

    useEffect(() => {
        if (isUpdateCompanyProfileSuccess) {
            toast.success('Updated Successfully.');
            navigate('/profile');
        }

        if (isUpdateCompanyProfileError) {
            const {status} = updateCompanyProfileError;
            if (status === 400) {
                toast.warning('Field is Required');
                return;
            }
            toast.error('Something Went Wrong.');
        }
    }, [isUpdateCompanyProfileSuccess, isUpdateCompanyProfileError, updateCompanyProfileError]);

    return (
        <>
            <Navbar isForHomePage={false}/>
            {isLoading ? <Loader/> : (
                <CompanyCreate
                    companyDetails={companyDetails}
                    setCompanyDetails={setCompanyDetails}
                    countries={countries ? countries?.counties : []}
                    handleSave={handleSave}
                    isLoading={isUpdateCompanyProfileLoading}
                />
            )}
            <Footer/>
        </>
    );
};

export default CompanyProfileUpdatePage;