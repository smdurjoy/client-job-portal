import React, {useState} from 'react';
import {Autocomplete, Grid, TextField} from "@mui/material";
import H6 from "../Typography/H6";
import FormInput from "./FormInput";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import {useGetAreasByCountryQuery, useGetCitiesByCountryQuery, useGetStatesByCountryQuery} from "../../services/common";

const AddressSelectArea = ({
                               countries,
                               handleOptionChange,
                               handleChange,
                               addressVal,
                               country_id,
                               state_id,
                               city_id,
                               area_id
                           }) => {
    const [countryId, setCountryId] = useState(country_id ?? null);

    const {data: states} = useGetStatesByCountryQuery(countryId, {
        skip: !countryId
    });

    const {data: cities} = useGetCitiesByCountryQuery(countryId, {
        skip: !countryId
    });

    const {data: areas} = useGetAreasByCountryQuery(countryId, {
        skip: !countryId
    });

    console.log({area_id})

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
                    value={addressVal}
                />
            </Grid>
            <Grid item md={6} sm={12} xs={12} mt={3}>
                <Autocomplete
                    options={countries}
                    getOptionLabel={(option) => (option && typeof option.country_name === 'string' ? option.country_name : '')}
                    onChange={(e, sv) => handleCountryChange(e, sv, 'country_id')}
                    renderInput={(params) => <TextField {...params} label="Select Country"/>}
                    value={countries ? countries.find((option) => option.id === countryId) : null}
                />
            </Grid>
            <Grid item md={6} sm={12} xs={12} mt={3}>
                <Autocomplete
                    options={states ? states.states : []}
                    getOptionLabel={(option) => (option && typeof option.state_name === 'string' ? option.state_name : '')}
                    onChange={(e, sv) => handleOptionChange(e, sv, 'state_id')}
                    renderInput={(params) => <TextField {...params} label="Select State"/>}
                    value={states ? states.states.find((option) => option.id === state_id) : null}
                />
            </Grid>
            <Grid item md={6} sm={12} xs={12} mt={3}>
                <Autocomplete
                    options={cities ? cities.cities : []}
                    getOptionLabel={(option) => (option && typeof option.city_name === 'string' ? option.city_name : '')}
                    onChange={(e, sv) => handleOptionChange(e, sv, 'city_id')}
                    renderInput={(params) => <TextField {...params} label="Select City"/>}
                    value={cities ? cities.cities.find((option) => option.id === city_id) : null}
                />
            </Grid>
            <Grid item md={6} sm={12} xs={12} mt={3}>
                <Autocomplete
                    options={areas ? areas.areas : []}
                    getOptionLabel={(option) => (option && typeof option.area_name === 'string' ? option.area_name : '')}
                    onChange={(e, sv) => handleOptionChange(e, sv, 'area_id')}
                    renderInput={(params) => <TextField {...params} label="Select Area"/>}
                    value={areas ? areas.areas.find((option) => option.id === area_id) : null}
                />
            </Grid>
        </>
    );
};

export default AddressSelectArea;