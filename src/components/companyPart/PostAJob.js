import React from 'react';
import Box from "@mui/material/Box";
import H3 from "../Typography/H3";
import {Autocomplete, Checkbox, FormControlLabel, Grid, TextField} from "@mui/material";
import H6 from "../Typography/H6";
import FormInput from "../common/FormInput";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import GroupIcon from '@mui/icons-material/Group';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';
import Button from "@mui/material/Button";
import Textarea from "../common/Textarea";
import CommonDatePicker from "../common/CommonDatePicker";
import {formatDate} from "../../helpers/Helpers";
import {genders} from "../../constants/Constant";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const PostAJob = ({
                      jobCategories,
                      jobLevels,
                      jobTypes,
                      employmentStatus,
                      jobPlaces,
                      skills,
                      degrees,
                      jobBenefits,
                      jobBasics,
                      setJobBasics,
                      salaryTypes,

                      jobRequirement,
                      setJobRequirement,

                      jobAddress,
                      setJobAddress,

                      handleSave,
                      isLoading
                  }) => {

    const handleOptionChange = (e, selectedVal, key) => {
        if (!selectedVal) {
            return;
        }
        setJobBasics({
            ...jobBasics,
            [key]: selectedVal.id,
        })
    }

    const handleJobRequirementsOptionChange = (e, selectedVal, key) => {
        if (!selectedVal) {
            return;
        }
        let selectedIds = selectedVal.id;
        if (key === 'skills_ids' || key === 'benefit_ids' || key === 'gender_ids') {
            selectedIds = [];
            selectedVal.forEach(val => selectedIds.push(val.id));
        }
        setJobRequirement({
            ...jobRequirement,
            [key]: selectedIds,
        })
    }

    const handleDateChange = (newDate) => {
        const formattedDate = formatDate(newDate);
        setJobBasics({
            ...jobBasics,
            application_deadline: formattedDate,
        });
    }

    return (
        <Box className='container' mt={15} mb={3}>
            <Box py={6}>
                <Box display='flex' justifyContent='space-between' flexWrap='wrap'>
                    <H3
                        text='Post a New Job!'
                        fontWeight='bold'
                    />
                    <H3
                        text='Ready to jump back in?'
                        color='#6B6E6F'
                    />
                </Box>

                <Grid container columnSpacing={4}>
                    <Grid item md={6} xs={12} mt={4}>
                        <H6
                            text='Job Title*'
                            color='#F28A1F'
                            mt={1}
                        />
                        <FormInput
                            placeholder='Job Title'
                            icon={<WorkHistoryIcon/>}
                            handleChange={(e) => setJobBasics({...jobBasics, job_title: e.target.value})}
                            value={jobBasics.job_title}
                        />
                    </Grid>
                    <Grid item md={6} xs={12} mt={4}>
                        <H6
                            text='Job Category*'
                            color='#F28A1F'
                            mt={1}
                        />
                        <Box mt={2}>
                            <Autocomplete
                                options={jobCategories}
                                getOptionLabel={(option) => option.category_name}
                                onChange={(e, sv) => handleOptionChange(e, sv, 'job_category_id')}
                                renderInput={(params) => <TextField {...params} label="Select Job Category"/>}
                            />
                        </Box>
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                        <H6
                            text='Vacancy*'
                            color='#F28A1F'
                            mt={3}
                        />
                        <FormInput
                            placeholder='Vacancies'
                            icon={<GroupIcon/>}
                            handleChange={(e) => setJobBasics({...jobBasics, no_of_vacancies: e.target.value})}
                            value={jobBasics.no_of_vacancies}
                        />
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                        <H6
                            text='Job Type'
                            color='#F28A1F'
                            mt={3}
                        />
                        <Box mt={2}>
                            <Autocomplete
                                options={jobTypes}
                                getOptionLabel={(option) => option.type_name}
                                onChange={(e, sv) => handleOptionChange(e, sv, 'job_type_id')}
                                renderInput={(params) => <TextField {...params} label="Select Job Type"/>}
                            />
                        </Box>
                    </Grid>
                    <Grid item md={3} sm={12} xs={12}>
                        <H6
                            text='Salary Type'
                            color='#F28A1F'
                            mt={3}
                        />
                        <Box mt={2}>
                            <Autocomplete
                                options={salaryTypes}
                                getOptionLabel={(option) => option.name}
                                onChange={(e, sv) => handleOptionChange(e, sv, 'salary_type_id')}
                                renderInput={(params) => <TextField {...params} label="Select Salary Type"/>}
                                value={salaryTypes ? salaryTypes.find((option) => option.id === jobBasics.salary_type_id) : null}
                            />
                        </Box>
                    </Grid>
                    <Grid item md={4} sm={12} xs={12}>
                        <H6
                            text='Salary From'
                            color='#F28A1F'
                            mt={3}
                        />
                        <FormInput
                            placeholder='Min Salary'
                            icon={<AttachMoneyIcon/>}
                            handleChange={(e) => setJobBasics({...jobBasics, min_salary: e.target.value})}
                            value={jobBasics.min_salary}
                        />
                    </Grid>
                    <Grid item md={4} sm={12} xs={12}>
                        <H6
                            text='Salary To*'
                            color='#F28A1F'
                            mt={3}
                        />
                        <FormInput
                            placeholder='Max Salary'
                            icon={<AttachMoneyIcon/>}
                            handleChange={(e) => setJobBasics({...jobBasics, max_salary: e.target.value})}
                            value={jobBasics.max_salary}
                        />
                    </Grid>
                    <Grid item md={1} sm={12} xs={12}>
                        <Box display='flex' alignItems='end' height='100%'>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={jobBasics.salary_range === 'Negotiable'}
                                        onChange={(e) => {
                                            setJobBasics({
                                                ...jobBasics,
                                                salary_range: e.target.checked ? 'Negotiable' : '',
                                            });
                                        }}
                                    />
                                }
                                label="Negotiable"
                                sx={{color: '#A1A6AB'}}
                            />
                        </Box>
                    </Grid>
                    <Grid item md={12} sm={12} xs={12}>
                        <H6
                            text='About Job *'
                            color='#F28A1F'
                            mt={3}
                        />
                        <Textarea
                            placeholder="About Job"
                            row={4}
                            value={jobBasics.job_description}
                            handleChange={(e) => {
                                setJobBasics({
                                    ...jobBasics,
                                    job_description: e.target.value
                                })
                            }}
                        />
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                        <H6
                            text='Employment Status*'
                            color='#F28A1F'
                            mt={3}
                        />
                        <Box mt={2}>
                            <Autocomplete
                                options={employmentStatus}
                                getOptionLabel={(option) => option.status_name}
                                onChange={(e, sv) => handleOptionChange(e, sv, 'employment_status_id')}
                                renderInput={(params) => <TextField {...params} label="Select Employment Status"/>}
                            />
                        </Box>
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                        <H6
                            text='Work Place*'
                            color='#F28A1F'
                            mt={3}
                        />
                        <Box mt={2}>
                            <Autocomplete
                                options={jobPlaces}
                                getOptionLabel={(option) => option.work_place}
                                onChange={(e, sv) => handleOptionChange(e, sv, 'work_place_id')}
                                renderInput={(params) => <TextField {...params} label="Select Work Place"/>}
                            />
                        </Box>
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                        <H6
                            text='Experience Level*'
                            color='#F28A1F'
                            mt={3}
                        />
                        <Box mt={2}>
                            <Autocomplete
                                options={jobLevels}
                                getOptionLabel={(option) => option.option_name}
                                onChange={(e, sv) => handleOptionChange(e, sv, 'job_level_id')}
                                renderInput={(params) => <TextField {...params} label="Select Experience Level"/>}
                            />
                        </Box>
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                        <H6
                            text='Age*'
                            color='#F28A1F'
                            mt={3}
                        />
                        <Box display="flex" columnGap={3}>
                            <FormInput
                                placeholder='Min'
                                icon={<EscalatorWarningIcon/>}
                                handleChange={(e) => setJobRequirement({
                                    ...jobRequirement,
                                    minimum_age: e.target.value
                                })}
                                value={jobRequirement.minimum_age}
                            />
                            <FormInput
                                placeholder='Max'
                                icon={<EscalatorWarningIcon/>}
                                handleChange={(e) => setJobRequirement({
                                    ...jobRequirement,
                                    maximum_age: e.target.value
                                })}
                                value={jobRequirement.maximum_age}
                            />
                        </Box>
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                        <H6
                            text='Gender*'
                            color='#F28A1F'
                            mt={3}
                        />
                        <Box mt={2}>
                            <Autocomplete
                                multiple
                                limitTags={3}
                                options={genders}
                                getOptionLabel={(option) => option.value}
                                onChange={(e, sv) => handleJobRequirementsOptionChange(e, sv, 'gender_ids')}
                                renderInput={(params) => <TextField {...params} label="Select Gender"/>}
                            />
                        </Box>
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                        <H6
                            text='Degree Requirements*'
                            color='#F28A1F'
                            mt={3}
                        />
                        <Box mt={2}>
                            <Autocomplete
                                options={degrees}
                                getOptionLabel={(option) => option.degree_name}
                                onChange={(e, sv) => handleJobRequirementsOptionChange(e, sv, 'degree_id')}
                                renderInput={(params) => <TextField {...params} label="Select a Degree"/>}
                            />
                        </Box>
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                        <H6
                            text='Skill Requirements*'
                            color='#F28A1F'
                            mt={3}
                        />
                        <Box mt={2}>
                            <Autocomplete
                                multiple
                                limitTags={3}
                                options={skills}
                                getOptionLabel={(option) => option.skill_name}
                                onChange={(e, sv) => handleJobRequirementsOptionChange(e, sv, 'skills_ids')}
                                renderInput={(params) => <TextField {...params} label="Select Skills"/>}
                            />
                        </Box>
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                        <H6
                            text='Job Benefits*'
                            color='#F28A1F'
                            mt={3}
                        />
                        <Box mt={2}>
                            <Autocomplete
                                multiple
                                limitTags={3}
                                options={jobBenefits}
                                getOptionLabel={(option) => option.benefit_name}
                                onChange={(e, sv) => handleJobRequirementsOptionChange(e, sv, 'benefit_ids')}
                                renderInput={(params) => <TextField {...params} label="Select Benefits"/>}
                            />
                        </Box>
                    </Grid>
                    <Grid item md={12} sm={12} xs={12}>
                        <H6
                            text='Job Responsibilities *'
                            color='#F28A1F'
                            mt={3}
                        />
                        <Textarea
                            placeholder="Write Job Responsibilities"
                            row={4}
                            handleChange={(e) => setJobBasics({
                                ...jobBasics,
                                job_responsibility: e.target.value
                            })}
                        />
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                        <H6
                            text='Job Address'
                            color='#F28A1F'
                            mt={3}
                        />
                        <FormInput
                            placeholder='Job Address'
                            icon={<LocationOnOutlinedIcon/>}
                            handleChange={(e) => setJobAddress({...jobAddress, job_address: e.target.value})}
                            value={jobAddress.job_address}
                        />
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                        <H6
                            text='Zipcode'
                            color='#F28A1F'
                            mt={3}
                        />
                        <FormInput
                            placeholder='Write Zipcode'
                            icon={<ConfirmationNumberOutlinedIcon/>}
                            handleChange={(e) => setJobAddress({...jobAddress, zip_code: e.target.value})}
                            value={jobAddress.zip_code}
                        />
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                        <H6
                            text='Deadline*'
                            color='#F28A1F'
                            mt={3}
                        />
                        <Box mt={2}>
                            <CommonDatePicker
                                label='MM/DD/YYYY*'
                                handleDateChange={(val) => handleDateChange(val)}
                                value={jobBasics.application_deadline}
                            />
                        </Box>
                    </Grid>
                    <Grid item md={12} sm={12} xs={12} mt={3}>
                        <Box display='flex' alignItems='end' height='100%'>
                            <FormControlLabel
                                control={<Checkbox/>}
                                label="Here, I accepted company terms & conditions."
                                sx={{color: '#A1A6AB'}}
                            />
                        </Box>
                    </Grid>
                    <Grid item md={6} sm={12} xs={12} mt={5}>
                        <Button size='large' className='primaryBtn' onClick={handleSave} disabled={isLoading}>
                            {isLoading ? 'Posting...' : 'Post Now'}
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default PostAJob;