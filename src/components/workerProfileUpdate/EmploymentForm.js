import React, {useEffect} from 'react';
import {Checkbox, FormControlLabel, Grid} from "@mui/material";
import H6 from "../Typography/H6";
import FormInput from "../common/FormInput";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import CommonDatePicker from "../common/CommonDatePicker";
import Textarea from "../common/Textarea";
import {formatDate} from "../../helpers/Helpers";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const EmploymentForm = ({idx, experience, experienceList, setExperienceList, removeExperience}) => {
    console.log({experience})
    const handleInputChange = (e, key, isCheckedChange = false) => {
        const updatedDegreeList = [...experienceList];
        updatedDegreeList[idx][key] = isCheckedChange ? e.target.checked : e.target.value;
        setExperienceList(updatedDegreeList);
    }

    const handleDateChange = (newDate, key) => {
        const formattedDate = formatDate(newDate);
        const updatedExperienceList = [...experienceList];
        updatedExperienceList[idx][key] = formattedDate;
        setExperienceList(updatedExperienceList);
    }

    return (
        <>
            <Grid item md={6} xs={12} mt={4}>
                <H6
                    text='Company Name*'
                    color='#F28A1F'
                    mt={1}
                />
                <FormInput
                    placeholder='Write Your Company Name'
                    icon={<AssignmentIndOutlinedIcon/>}
                    value={experience.company_name}
                    handleChange={(e) => handleInputChange(e, 'company_name')}
                />
            </Grid>
            <Grid item md={6} xs={12} mt={4}>
                <H6
                    text='Designtion*'
                    color='#F28A1F'
                    mt={1}
                />
                <FormInput
                    placeholder='Write Your Designation'
                    icon={<AssignmentIndOutlinedIcon/>}
                    value={experience.designation}
                    handleChange={(e) => handleInputChange(e, 'designation')}
                />
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
                <Box mt={1}>
                    <CommonDatePicker
                        label='From Date'
                        handleDateChange={(val) => handleDateChange(val, 'start_at')}
                        value={experience.start_at ? experience.start_at : null}
                    />
                </Box>
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
                <Box mt={1}>
                    <CommonDatePicker
                        label='To Date'
                        handleDateChange={(val) => handleDateChange(val, 'end_at')}
                        value={(experience.end_at) ? experience.end_at : null}
                    />
                </Box>
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={experience.is_currently_working}
                            onChange={(e) => handleInputChange(e, 'is_currently_working', true)}
                        />
                    }
                    label="Currently Working"
                    sx={{color: '#A1A6AB'}}
                />
            </Grid>

            <Grid item md={12} sm={12} xs={12}>
                <Textarea
                    placeholder="Responsibilities"
                    row={4}
                    handleChange={(e) => handleInputChange(e, 'responsibilities')}
                />
                {idx !== 0 && (
                    <Button onClick={() => removeExperience(idx)}>
                        <DeleteOutlineIcon sx={{color: 'red'}}/>
                    </Button>
                )}
            </Grid>
        </>
    );
};

export default EmploymentForm;