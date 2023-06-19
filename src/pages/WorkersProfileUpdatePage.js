import React, {useEffect, useState} from 'react';
import '../assets/css/companyprofile.css';
import '../assets/css/candidateProfile.css';
import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
import Form from "../components/Profile/Form";
import {useForm, useFieldArray} from 'react-hook-form';
import {fetchAreas, fetchCities, fetchCountries, fetchStates} from "../api/common/commonApi";
import {toastError, toastSuccess, toastWarning} from "../Helpers/Toaster";
import axios from "axios";

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
        }
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [countries, setCountries] = useState([]);
    const [cities, setCities] = useState([]);
    const [states, setStates] = useState([]);
    const [areas, setAreas] = useState([]);
    const token = localStorage.getItem('auth-token');

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.title = 'Update Profile - workersRUS';
        fetchCountries().then(countries => setCountries(countries))
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
                toastWarning(data.message);
                return;
            }

            res = await storeEducation(formData);

            if (res.status === 0) {
                toastWarning(data.message);
                return;
            }

            toastSuccess('Updated Successfully.');

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

    return (
        <>
            <Navbar navBg='scrolledNav'/>
            <Form
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
            />
            <Footer/>
        </>
    );
};

export default WorkersProfileUpdatePage;