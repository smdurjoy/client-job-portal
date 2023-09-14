import React, {useEffect} from 'react';
import {Autocomplete, Checkbox, FormControlLabel, Grid, TextField} from "@mui/material";
import H6 from "../Typography/H6";
import FormInput from "../common/FormInput";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CommonDatePicker from "../common/CommonDatePicker";
import {formatDate} from "../../helpers/Helpers";

const EducationNTrainingForm = ({degree, idx, removeDegree, degrees, degreeList, setDegreeList}) => {
    const handleChange = (e, selectedVal) => {
        if (!selectedVal) {
            return;
        }
        degree.degree_id = selectedVal?.id;
    }

    const handleInputChange = (e, key, isCheckedChange = false) => {
        const updatedDegreeList = [...degreeList];
        updatedDegreeList[idx][key] = isCheckedChange ? e.target.checked : e.target.value;
        setDegreeList(updatedDegreeList);
    }

    const handleDateChange = (newDate) => {
        const formattedDate = formatDate(newDate);
        const updatedDegreeList = [...degreeList];
        updatedDegreeList[idx].passing_year = formattedDate;
        setDegreeList(updatedDegreeList);
    }

    useEffect(() => {
        if (degree?.id) {
            degree.degree_id = degree.id;
        }
    }, [degree]);

    return (
        <>
            <Grid item md={12} xs={12} mt={4}>
                <H6
                    text='Institution*'
                    color='#F28A1F'
                    mt={1}
                />
                <FormInput
                    placeholder='Write Your Institute Name'
                    icon={<LocationOnOutlinedIcon/>}
                    value={degree.institute}
                    handleChange={(e) => handleInputChange(e, 'institute')}
                />
            </Grid>
            <Grid item md={12} xs={12} mt={1}>
                <Autocomplete
                    options={degrees}
                    getOptionLabel={(option) => (option && typeof option.degree_name === 'string' ? option.degree_name : '')}
                    onChange={(e, sv) => handleChange(e, sv)}
                    renderInput={(params) => <TextField {...params} label="Select Degree"/>}
                    value={degrees ? degrees.find((option) => option.id === degree.degree_id) : null}
                />
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
                <FormInput
                    placeholder='Result'
                    value={degree.result}
                    handleChange={(e) => handleInputChange(e, 'result')}
                />
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
                <Box mt={1}>
                    <CommonDatePicker
                        label='MM/DD/YYYY*'
                        handleDateChange={(val) => handleDateChange(val)}
                        value={degree.passing_year ? degree.passing_year : null}
                    />
                </Box>
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
                <Box display='flex'>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={degree.is_currently_reading}
                                onChange={(e) => handleInputChange(e, 'is_currently_reading', true)}
                            />
                        }
                        label="Currently Studying"
                        sx={{color: '#A1A6AB'}}
                    />
                    {idx !== 0 && (
                        <Button onClick={() => removeDegree(idx)}>
                            <DeleteOutlineIcon sx={{color: 'red'}}/>
                        </Button>
                    )}
                </Box>
            </Grid>
        </>
    );
};

export default EducationNTrainingForm;