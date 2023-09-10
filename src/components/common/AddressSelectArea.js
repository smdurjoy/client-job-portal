import React, {useState} from 'react';
import {Autocomplete, Grid, TextField} from "@mui/material";
import H6 from "../Typography/H6";
import FormInput from "./FormInput";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import {useGetAreasByCountryQuery, useGetCitiesByCountryQuery, useGetStatesByCountryQuery} from "../../services/common";

const AddressSelectArea = ({countries, handleOptionChange, handleChange}) => {
    const [countryId, setCountryId] = useState(null);

    const {data: states} = useGetStatesByCountryQuery(countryId, {
        skip: !countryId
    });

    const {data: cities} = useGetCitiesByCountryQuery(countryId, {
        skip: !countryId
    });

    const {data: areas} = useGetAreasByCountryQuery(countryId, {
        skip: !countryId
    });

    const handleCountryChange = (e, sv, key) => {
        handleOptionChange(e, sv, key);
        setCountryId(sv.id);
    }

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
                    handleChange={handleChange}
                />
            </Grid>
            <Grid item md={6} sm={12} xs={12} mt={3}>
                <Autocomplete
                    options={countries}
                    getOptionLabel={(option) => option.country_name}
                    onChange={(e, sv) => handleCountryChange(e, sv, 'country_id')}
                    renderInput={(params) => <TextField {...params} label="Select Country"/>}
                />
            </Grid>
            <Grid item md={6} sm={12} xs={12} mt={3}>
                <Autocomplete
                    options={states ? states.states : []}
                    getOptionLabel={(option) => option.state_name}
                    onChange={(e, sv) => handleOptionChange(e, sv, 'state_id')}
                    renderInput={(params) => <TextField {...params} label="Select State"/>}
                />
            </Grid>
            <Grid item md={6} sm={12} xs={12} mt={3}>
                <Autocomplete
                    options={cities ? cities.cities : []}
                    getOptionLabel={(option) => option.city_name}
                    onChange={(e, sv) => handleOptionChange(e, sv, 'city_id')}
                    renderInput={(params) => <TextField {...params} label="Select City"/>}
                />
            </Grid>
            <Grid item md={6} sm={12} xs={12} mt={3}>
                <Autocomplete
                    options={areas ? areas.areas : []}
                    getOptionLabel={(option) => option.area_name}
                    onChange={(e, sv) => handleOptionChange(e, sv, 'area_id')}
                    renderInput={(params) => <TextField {...params} label="Select Area"/>}
                />
            </Grid>
        </>
    );
};

export default AddressSelectArea;