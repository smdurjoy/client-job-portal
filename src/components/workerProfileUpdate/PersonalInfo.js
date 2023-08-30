import React from 'react';
import Box from "@mui/material/Box";
import H4 from "../Typography/H4";
import {Autocomplete, Grid, TextField} from "@mui/material";
import H6 from "../Typography/H6";
import FormInput from "../common/FormInput";
import {cities, countries, states} from "../../constants/Constant";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import RememberMeOutlinedIcon from '@mui/icons-material/RememberMeOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SaveNCancel from "../common/SaveNCancel";
import Textarea from "../common/Textarea";

const PersonalInfo = () => {
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
                    />
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                    <H6
                        text='Address*'
                        color='#F28A1F'
                        mt={1}
                    />
                    <FormInput
                        placeholder='Enter Your Address'
                        icon={<LocationOnOutlinedIcon/>}
                    />
                </Grid>
                <Grid item md={6} sm={12} xs={12} mt={1}>
                    <Autocomplete
                        options={countries}
                        renderInput={(params) => <TextField {...params} label="Select Country"/>}
                    />
                </Grid>
                <Grid item md={6} sm={12} xs={12} mt={1}>
                    <Autocomplete
                        options={states}
                        renderInput={(params) => <TextField {...params} label="Select State"/>}
                    />
                </Grid>
                <Grid item md={6} sm={12} xs={12} mt={1}>
                    <Autocomplete
                        options={cities}
                        renderInput={(params) => <TextField {...params} label="Select City"/>}
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
                    <SaveNCancel/>
                </Grid>
            </Grid>
        </Box>
    );
};

export default PersonalInfo;