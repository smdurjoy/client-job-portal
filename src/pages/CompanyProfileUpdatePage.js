import React, {useEffect, useState} from 'react';
import '../assets/css/candidates.css';
import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
import axios from '../api/axios-configure';
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {fetchAllIndustries, fetchAreas, fetchCities, fetchCountries, fetchStates} from "../api/common/commonApi";
import {toastError, toastSuccess} from "../Helpers/Toaster";
import ProfileUpdate from "../components/Company/ProfileUpdate";
import {fetchCompanyProfileInfo} from "../api/company/company";

const CompanyProfileUpdatePage = () => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: {errors},
    } = useForm();
    const navigate = useNavigate();
    const [company, setCompany] = useState({});
    const [industries, setIndustries] = useState([]);
    const [countries, setCountries] = useState([]);
    const [cities, setCities] = useState([]);
    const [states, setStates] = useState([]);
    const [areas, setAreas] = useState([]);
    const [token, setToken] = useState(null);
    const [companyId, setCompanyId] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('auth-token');
        const authType = localStorage.getItem('type');
        const company_id = localStorage.getItem('company_id');
        if (!token || authType != '2' || !company_id) {
            navigate('/');
            return;
        }
        setToken(token);
        setCompanyId(company_id);
        fetchAllIndustries().then(res => setIndustries(res))
        fetchCountries().then(res => setCountries(res))
        fetchCompanyProfileInfo(company_id).then(res => {
            setCompany(res);
            format(res);
            setIsLoading(false);
        });
    }, [navigate]);

    const onSubmit = async (formData) => {
        setIsSubmitting(true);
        try {
            formData.user_id = companyId;
            const {data} = await axios.post('/company/update/profile/', formData, {
                headers: {
                    'Authorization': `Token ${token}`
                }
            });
            if (data.status === 0) {
                toastError(data.message);
            } else {
                toastSuccess(data.message);
                alert(data.message);
            }
        } catch (e) {
            toastError('Something Went Wrong !');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleCountryChange = (e) => {
        fetchCities(e.id).then(cities => setCities(cities));
        fetchStates(e.id).then(states => setStates(states));
        fetchAreas(e.id).then(areas => setAreas(areas));
        setValue('country_id', e.id);
    }

    const format = (res) => {
        setValue('user_id', res.id);
        setValue('zip_code', res.zip_code);
        setValue('contact_person_name', res.contact_person_name);
        setValue('contact_person_position', res.contact_person_position);
        setValue('contact_person_mobile', res.contact_person_mobile);
        setValue('contact_person_mobile', res.contact_person_email);
        setValue('industry_id', res.industry_id);
        setValue('country_id', res.country_id);
        setValue('state_id', res.state_id);
        setValue('city_id', res.city_id);
        setValue('area_id', res.area_id);
    }

    return (
        <>
            <Navbar navBg='scrolledNav'/>
            <ProfileUpdate
                register={register}
                errors={errors}
                industries={industries}
                onSubmit={onSubmit}
                handleSubmit={handleSubmit}
                isSubmitting={isSubmitting}
                countries={countries}
                cities={cities}
                states={states}
                areas={areas}
                handleCountryChange={handleCountryChange}
                setValue={setValue}
                company={company}
                isLoading={isLoading}
            />
            <Footer/>
        </>
    );
};

export default CompanyProfileUpdatePage;