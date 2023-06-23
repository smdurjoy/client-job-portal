import React, {useEffect, useState} from 'react';
import '../assets/css/candidates.css';
import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
import axios from 'axios';
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {
    fetchAreas,
    fetchCategories,
    fetchCities,
    fetchCountries,
    fetchDegrees,
    fetchStates
} from "../api/common/commonApi";
import {toastError, toastSuccess, toastWarning} from "../Helpers/Toaster";
import {
    fetchEmploymentStatus,
    fetchJobBenefits,
    fetchJobCvReceivingOptions,
    fetchJobLevels,
    fetchJobTypes,
    fetchJobWorkPlaces
} from "../api/jobs/jobs";
import JobPostForm from "../components/Jobs/JobPostForm";

const CompanyProfileUpdatePage = () => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: {errors},
    } = useForm();
    const navigate = useNavigate();
    const [countries, setCountries] = useState([]);
    const [cities, setCities] = useState([]);
    const [states, setStates] = useState([]);
    const [areas, setAreas] = useState([]);
    const [jobTypes, setJobTypes] = useState([]);
    const [categories, setCategories] = useState([]);
    const [levels, setLevels] = useState([]);
    const [employmentStatus, setEmploymentStatus] = useState([]);
    const [workPlaces, setWorPlaces] = useState([]);
    const [benefits, setBenefits] = useState([]);
    const [cvReceivingOptions, setCvReceivingOptions] = useState([]);
    const [degrees, setDegrees] = useState([]);
    const [token, setToken] = useState(null);
    const [companyId, setCompanyId] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('auth-token');
        const authType = localStorage.getItem('type');
        const company_id = localStorage.getItem('company_id');
        if (!token || authType != '2' || !company_id) {
            navigate('/');
        }
        setToken(token);
        setCompanyId(company_id);
        fetchCategories().then(res => setCategories(res));
        fetchJobTypes().then(res => setJobTypes(res));
        fetchJobLevels().then(res => setLevels(res));
        fetchEmploymentStatus().then(res => setEmploymentStatus(res));
        fetchJobWorkPlaces().then(res => setWorPlaces(res));
        fetchJobBenefits().then(res => setBenefits(res));
        fetchJobCvReceivingOptions().then(res => setCvReceivingOptions(res));
        fetchDegrees().then(res => setDegrees(res));
        fetchCountries().then(res => setCountries(res));
    }, [navigate]);

    const onSubmit = async (formData) => {
        setIsSubmitting(true);
        try {
            formData.user_id = companyId;
            const {data} = await axios.post('/job/create/basic/', formData, {
                headers: {
                    'Authorization': `Token ${token}`
                }
            })
            if (data.status === 0) {
                toastWarning(data.message);
                return;
            }
            formData.job_id = data.job_id;
            let res = await storeRequirements(formData);

            if (res.status === 0) {
                toastWarning(data.message);
                return;
            }

            res = await storeAddress(formData);

            if (res.status === 0) {
                toastWarning(data.message);
                return;
            }

            toastSuccess('Stored Successfully.');
            navigate('/posted-job-list');

        } catch (e) {
            toastError('Something Went Wrong!');
        } finally {
            setIsSubmitting(false);
        }
    }

    const storeRequirements = async (formData) => {
        try {
            const {data} = await axios.post('/job/create/requirements/', formData, {
                headers: {
                    'Authorization': `Token ${token}`
                }
            })
            return data;
        } catch (e) {
            toastError('Something Went Wrong!');
        }
    }

    const storeAddress = async (formData) => {
        try {
            const {data} = await axios.post('/job/create/address/', formData, {
                headers: {
                    'Authorization': `Token ${token}`
                }
            })
            return data;
        } catch (e) {
            toastError('Something Went Wrong!');
        }
    }

    const handleCountryChange = (e) => {
        fetchCities(e.id).then(cities => setCities(cities));
        fetchStates(e.id).then(states => setStates(states));
        fetchAreas(e.id).then(areas => setAreas(areas));
        setValue('country_id', e.id);
    }

    return (
        <>
            <Navbar navBg='scrolledNav'/>
            <JobPostForm
                register={register}
                errors={errors}
                jobTypes={jobTypes}
                onSubmit={onSubmit}
                handleSubmit={handleSubmit}
                isSubmitting={isSubmitting}
                categories={categories}
                levels={levels}
                employmentStatus={employmentStatus}
                workPlaces={workPlaces}
                benefits={benefits}
                degrees={degrees}
                cvReceivingOptions={cvReceivingOptions}
                setValue={setValue}
                countries={countries}
                cities={cities}
                states={states}
                areas={areas}
                handleCountryChange={handleCountryChange}
            />
            <Footer/>
        </>
    );
};

export default CompanyProfileUpdatePage;