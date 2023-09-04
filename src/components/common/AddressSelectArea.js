import React from 'react';
import {Autocomplete, Grid, TextField} from "@mui/material";
import H6 from "../Typography/H6";
import FormInput from "./FormInput";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const AddressSelectArea = ({countries, cities, states}) => {
    return (
        <>
            <Grid item md={12} sm={12} xs={12}>
                <H6
                    text='Address*'
                    color='#F28A1F'
                    mt={3}
                />
                <FormInput
                    placeholder='Enter Your Address'
                    icon={<LocationOnOutlinedIcon/>}
                />
            </Grid>
            <Grid item md={6} sm={12} xs={12} mt={3}>
                <Autocomplete
                    options={countries}
                    renderInput={(params) => <TextField {...params} label="Select Country"/>}
                />
            </Grid>
            <Grid item md={6} sm={12} xs={12} mt={3}>
                <Autocomplete
                    options={states}
                    renderInput={(params) => <TextField {...params} label="Select State"/>}
                />
            </Grid>
            <Grid item md={6} sm={12} xs={12} mt={3}>
                <Autocomplete
                    options={cities}
                    renderInput={(params) => <TextField {...params} label="Select City"/>}
                />
            </Grid>
            <Grid item md={6} sm={12} xs={12} mt={3}></Grid>
        </>
    );
};

export default AddressSelectArea;