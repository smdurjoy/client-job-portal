import React, {useEffect, useState} from 'react';
import '../assets/css/companyprofile.css';
import '../assets/css/candidateProfile.css';
import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
import Form from "../components/Profile/Form";
import {useFieldArray, useForm} from 'react-hook-form';
import {fetchAreas, fetchCities, fetchCountries, fetchDegrees, fetchStates} from "../api/common/commonApi";
import {toastError, toastSuccess, toastWarning} from "../Helpers/Toaster";
import axios from "../api/axios-configure";
import {useNavigate} from "react-router-dom";
import {fetchProfileInfo} from "../api/profile/profile";
import Loader from "../components/Loader/Loader";

const WorkersProfileUpdatePage = () => {
    const {
        register,
        handleSubmit,
        setValue,
        control,
        formState: {errors},
    } = useForm({
        defaultValues: {
            country_id: 1,
            state_id: 1,
            city_id: 1,
            area_id: 1,
            gender_id: 1,
            address_line1: 'N/A',
            educations: [],
        }
    });
    const [profile, setProfile] = useState({
        id: null,
        first_name: '-',
        middle_name: '-',
        last_name: '-',
        email: '-',
        phone_number: '-',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [countries, setCountries] = useState([]);
    const [cities, setCities] = useState([]);
    const [states, setStates] = useState([]);
    const [areas, setAreas] = useState([]);
    const [degrees, setDegrees] = useState([]);
    const token = localStorage.getItem('auth-token');
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.title = 'Update Profile - workersRUS';
        const workerId = localStorage.getItem('user_id');

        if (!workerId) {
            navigate('/');
            return;
        }

        fetchCountries().then(countries => setCountries(countries))
        fetchDegrees().then(degrees => setDegrees(degrees))

        fetchProfileInfo(workerId).then(res => {
            setProfile(res);
            format(res);
        });
    }, [])

    const handleCountryChange = (e) => {
        fetchCities(e.id).then(cities => setCities(cities));
        fetchStates(e.id).then(states => setStates(states));
        fetchAreas(e.id).then(areas => setAreas(areas));
        setValue('country_id', e.id);
    }

    const onSubmit = async (formData) => {
        setIsSubmitting(true);
        try {
            formData.user_id = localStorage.getItem('user_id');
            const {data} = await axios.post('/auth/set/worker/basic/', formData, {
                headers: {
                    'Authorization': `Token ${token}`
                }
            })
            if (data.status === 0) {
                toastWarning(data.message);
                return;
            }
            let res = await storeAddress(formData);

            if (res.status === 0) {
                toastWarning(res.message);
                return;
            }

            res = await storeEducation(formData);

            if (res.status === 0) {
                toastWarning(res.message);
                return;
            }

            res = await storeSkills(formData);

            if (res.status === 0) {
                toastWarning(res.message);
                return;
            }

            if (formData.profile_picture && formData.profile_picture[0]) {
                res = await storeProfilePicture(formData);
                if (res.status === 0) {
                    toastWarning(res.message);
                    return;
                }
            }

            if (formData.attachment && formData.attachment[0]) {
                res = await storeAttachment(formData);
                if (res.status === 0) {
                    toastWarning(res.message);
                    return;
                }
            }

            toastSuccess('Updated Successfully.');
            navigate('/profile');

        } catch (e) {
            toastError('Something Went Wrong!');
        } finally {
            setIsSubmitting(false);
        }
    }

    const storeAddress = async (formData) => {
        try {
            const {data} = await axios.post('/auth/set/worker/address/', formData, {
                headers: {
                    'Authorization': `Token ${token}`
                }
            })
            return data;
        } catch (e) {
            toastError('Something Went Wrong!');
        }
    }

    const storeEducation = async (formData) => {
        try {
            const {data} = await axios.post('/auth/set/worker/education/', formData, {
                headers: {
                    'Authorization': `Token ${token}`
                }
            })
            return data;
        } catch (e) {
            toastError('Something Went Wrong!');
        }
    }

    const storeSkills = async (formData) => {
        try {
            const {data} = await axios.post('/auth/set/worker/skill/', formData, {
                headers: {
                    'Authorization': `Token ${token}`
                }
            })
            return data;
        } catch (e) {
            toastError('Something Went Wrong!');
        }
    }

    const storeProfilePicture = async (form) => {
        const formData = new FormData();
        formData.append("profile_picture", form.profile_picture[0]);
        formData.append("worker_id", form.user_id);
        try {
            const {data} = await axios.post('/worker/upload/profile/picture/', formData, {
                headers: {
                    'Authorization': `Token ${token}`,
                    'Content-Type': 'multipart/form-data',
                }
            })
            return data;
        } catch (e) {
            toastError('Something Went Wrong!');
        }
    }

    const storeAttachment = async (form) => {
        const formData = new FormData();
        formData.append("profile_picture", form.attachment[0]);
        formData.append("worker_id", form.user_id);
        try {
            const {data} = await axios.post('/worker/upload/resume/', formData, {
                headers: {
                    'Authorization': `Token ${token}`,
                    'Content-Type': 'multipart/form-data',
                }
            })
            return data;
        } catch (e) {
            toastError('Something Went Wrong!');
        }
    }

    const format = (res) => {
        setValue('first_name', res.first_name);
        setValue('middle_name', res.middle_name);
        setValue('last_name', res.last_name);
        setValue('email', res.email);
        setValue('phone_number', res.phone_number);
        setValue('country_id', res.country);
        setValue('state_id', res.state);
        setValue('city_id', res.city);
        setValue('area_id', res.area);
        setValue('gender_id', res.gender);
        setValue('address_line1', res.address_line1);
        setValue('address_line2', res.address_line2);
        setValue('postal_code', res.postal_code);
        setValue('skill_set', res.skill_set);
        setValue('educations', res.educations);
        setValue('date_of_birth', res.date_of_birth);
        fetchCities(res.country).then(cities => setCities(cities));
        fetchStates(res.country).then(states => setStates(states));
        fetchAreas(res.country).then(areas => setAreas(areas));
    }

    return (
        <>
            <Navbar navBg='scrolledNav'/>
            {
                profile.id ? <Form
                    countries={countries}
                    cities={cities}
                    states={states}
                    areas={areas}
                    register={register}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    handleCountryChange={handleCountryChange}
                    onSubmit={onSubmit}
                    setValue={setValue}
                    control={control}
                    useFieldArray={useFieldArray}
                    isSubmitting={isSubmitting}
                    profile={profile}
                    degrees={degrees}
                /> : <div style={{marginTop: '9rem'}}><Loader/></div>
            }
            <Footer/>
        </>
    );
};

export default WorkersProfileUpdatePage;