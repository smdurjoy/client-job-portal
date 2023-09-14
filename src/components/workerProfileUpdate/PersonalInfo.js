import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import H4 from "../Typography/H4";
import {Grid} from "@mui/material";
import H6 from "../Typography/H6";
import FormInput from "../common/FormInput";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import RememberMeOutlinedIcon from '@mui/icons-material/RememberMeOutlined';
import SaveNCancel from "../common/SaveNCancel";
import Textarea from "../common/Textarea";
import AddressSelectArea from "../common/AddressSelectArea";
import {useGetCountriesQuery} from "../../services/common";
import useWorkerManger from "../../app/customHooks/useWorkerManger";
import {toast} from "react-toastify";
import CommonDatePicker from "../common/CommonDatePicker";
import {formatDate} from "../../helpers/Helpers";

const PersonalInfo = ({profile, user_id}) => {
    console.log(profile);
    const [personalInfo, setPersonalInfo] = useState({
        user_id,
        first_name: profile?.first_name ?? '',
        last_name: profile?.last_name ?? '',
        phone: profile?.phone_number ?? '',
        email: profile?.email ?? '',
        passport_number: profile?.passport_number ?? '',
        address_line1: profile?.address_line1 ?? '',
        country_id: profile?.country ?? '',
        state_id: profile?.state ?? '',
        city_id: profile?.city ?? '',
        area_id: profile?.area ?? '',
        date_of_birth: profile?.date_of_birth ?? '',
        gender_id: profile?.gender ?? '',
        postal_code: profile?.postal_code ?? '',
    });

    const {data: countries} = useGetCountriesQuery();
    const {
        isUpdateBasicProfileInfoLoading,
        isUpdateBasicProfileInfoError,
        updateBasicProfileInfo,
        updateBasicProfileInfoError,

        isUpdateProfileAddressLoading,
        isUpdateProfileAddressSuccess,
        isUpdateProfileAddressError,
        updateProfileAddress,
        updateProfileAddressError
    } = useWorkerManger();

    const handleSave = async () => {
        await updateBasicProfileInfo(personalInfo);
        await updateProfileAddress(personalInfo);
    }

    useEffect(() => {
        if (isUpdateBasicProfileInfoError) {
            const {status} = updateBasicProfileInfoError;
            if (status === 400) {
                toast.warning('Field is Required');
                return;
            }
            toast.error('Something Went Wrong.');
        }
    }, [isUpdateBasicProfileInfoError, updateBasicProfileInfoError]);

    useEffect(() => {
        if (isUpdateProfileAddressSuccess) {
            toast.success('Updated Successfully.');
        }
        if (isUpdateProfileAddressError) {
            const {status} = updateProfileAddressError;
            if (status === 400) {
                toast.warning('Field is Required');
                return;
            }
            toast.error('Something Went Wrong.');
        }
    }, [isUpdateProfileAddressSuccess, isUpdateProfileAddressError, updateProfileAddressError]);

    const handleJobAddressOptionChange = (e, selectedVal, key) => {
        if (!selectedVal) {
            return;
        }
        setPersonalInfo({
            ...personalInfo,
            [key]: selectedVal.id,
        });
    }

    const handleDateChange = (newDate) => {
        const formattedDate = formatDate(newDate);
        setPersonalInfo({
            ...personalInfo,
            date_of_birth: formattedDate,
        });
    }

    return (
        <Box mt={2}>
            <H4
                text='Personal Information'
                color='#0D9CA4'
                fontWeight='bold'
            />

            <Grid container spacing={2}>
                <Grid item md={6} sm={12} xs={12}>
                    <H6
                        text='First Name*'
                        color='#F28A1F'
                        mt={4}
                    />
                    <FormInput
                        placeholder='Enter Your First Name'
                        icon={<PersonOutlineOutlinedIcon/>}
                        value={personalInfo?.first_name}
                        handleChange={(e) => {
                            setPersonalInfo({
                                ...personalInfo,
                                first_name: e.target.value
                            })
                        }}
                    />
                </Grid>
                <Grid item md={6} sm={12} xs={12}>
                    <H6
                        text='Last Name*'
                        color='#F28A1F'
                        mt={4}
                    />
                    <FormInput
                        placeholder='Enter Your Last Name'
                        icon={<PersonOutlineOutlinedIcon/>}
                        value={personalInfo?.last_name}
                        handleChange={(e) => {
                            setPersonalInfo({
                                ...personalInfo,
                                last_name: e.target.value
                            })
                        }}
                    />
                </Grid>
                <Grid item md={6} sm={12} xs={12}>
                    <H6
                        text='Phone Number*'
                        color='#F28A1F'
                        mt={1}
                    />
                    <FormInput
                        placeholder='Enter Your Phone Number'
                        icon={<LocalPhoneIcon/>}
                        value={personalInfo?.phone}
                        handleChange={(e) => {
                            setPersonalInfo({
                                ...personalInfo,
                                phone: e.target.value
                            })
                        }}
                    />
                </Grid>
                <Grid item md={6} sm={12} xs={12}>
                    <H6
                        text='Email Address*'
                        color='#F28A1F'
                        mt={1}
                    />
                    <FormInput
                        placeholder='Enter Your Email'
                        icon={<EmailOutlinedIcon/>}
                        value={personalInfo?.email}
                        handleChange={(e) => {
                            setPersonalInfo({
                                ...personalInfo,
                                email: e.target.value
                            })
                        }}
                    />
                </Grid>
                <Grid item md={6} sm={12} xs={12}>
                    <H6
                        text='NID/Passport'
                        color='#F28A1F'
                        mt={1}
                    />
                    <FormInput
                        placeholder='Enter Your NID/Passport'
                        icon={<RememberMeOutlinedIcon/>}
                        value={personalInfo?.passport_number}
                        handleChange={(e) => {
                            setPersonalInfo({
                                ...personalInfo,
                                passport_number: e.target.value
                            })
                        }}
                    />
                </Grid>
                <Grid item md={6} sm={12} xs={12}>
                    <H6
                        text='Date Of Birth*'
                        color='#F28A1F'
                        mt={1}
                    />
                    <Box mt={1}>
                        <CommonDatePicker
                            label='MM/DD/YYYY*'
                            handleDateChange={(val) => handleDateChange(val)}
                            value={personalInfo.date_of_birth}
                        />
                    </Box>
                </Grid>
                <AddressSelectArea
                    countries={countries ? countries.counties : []}
                    handleOptionChange={handleJobAddressOptionChange}
                    handleChange={(e) => setPersonalInfo({
                        ...personalInfo,
                        address_line1: e.target.value
                    })}
                    addressVal={personalInfo.address_line1}
                    country_id={personalInfo.country_id}
                    state_id={personalInfo.state_id}
                    city_id={personalInfo.city_id}
                    area_id={personalInfo.area_id}
                />
                <Grid item md={6} sm={12} xs={12}>
                    <H6
                        text='Postal Code*'
                        color='#F28A1F'
                        mt={1}
                    />
                    <FormInput
                        placeholder='Enter Your Postal Code'
                        icon={<RememberMeOutlinedIcon/>}
                        value={personalInfo?.postal_code}
                        handleChange={(e) => {
                            setPersonalInfo({
                                ...personalInfo,
                                postal_code: e.target.value
                            })
                        }}
                    />
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                    <H6
                        text='About Yourself*'
                        color='#F28A1F'
                        mt={1}
                    />
                    <Textarea
                        placeholder="Write About Yourself"
                        row={3}
                    />
                </Grid>
                <Grid item md={12} mt={3}>
                    <SaveNCancel
                        handleSave={handleSave}
                        isLoading={isUpdateBasicProfileInfoLoading || isUpdateProfileAddressLoading}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default PersonalInfo;