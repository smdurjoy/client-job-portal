import React from 'react';
import Box from "@mui/material/Box";
import H3 from "../Typography/H3";
import {Autocomplete, Checkbox, FormControlLabel, Grid, TextField} from "@mui/material";
import H6 from "../Typography/H6";
import FormInput from "../common/FormInput";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import GroupIcon from '@mui/icons-material/Group';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';
import Button from "@mui/material/Button";
import Textarea from "../common/Textarea";
import AddressSelectArea from "../common/AddressSelectArea";
import {cities, countries, states} from "../../constants/Constant";
import CommonDatePicker from "../common/CommonDatePicker";

const CompanyCreate = () => {
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
                                options={[]}
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
                                options={[]}
                                renderInput={(params) => <TextField {...params} label="Select Job Type"/>}
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
                        />
                    </Grid>
                    <Grid item md={2} sm={12} xs={12}>
                        <Box display='flex' alignItems='end' height='100%'>
                            <FormControlLabel control={<Checkbox/>} label="Negotiable" sx={{color: '#A1A6AB'}}/>
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
                                options={[]}
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
                                options={[]}
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
                        <FormInput
                            placeholder='Type Experience'
                            icon={<AllInboxIcon/>}
                        />
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                        <H6
                            text='Age*'
                            color='#F28A1F'
                            mt={3}
                        />
                        <FormInput
                            placeholder='Type Age'
                            icon={<EscalatorWarningIcon/>}
                        />
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                        <H6
                            text='Gender*'
                            color='#F28A1F'
                            mt={3}
                        />
                        <Box mt={2}>
                            <Autocomplete
                                options={[]}
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
                                options={[]}
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
                                options={[]}
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
                                options={[]}
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
                        />
                    </Grid>
                    <AddressSelectArea
                        countries={countries}
                        cities={cities}
                        states={states}
                    />
                    <Grid item md={6} sm={12} xs={12}>
                        <H6
                            text='Deadline*'
                            color='#F28A1F'
                            mt={3}
                        />
                        <Box mt={2}>
                            <CommonDatePicker
                                label='MM/DD/YY*'
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
                        <Button size='large' className='primaryBtn'>
                            Post Now
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default CompanyCreate;