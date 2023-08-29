import React from 'react';
import Box from "@mui/material/Box";
import H4 from "../Typography/H4";
import {Autocomplete, Checkbox, FormControlLabel, Grid, TextField} from "@mui/material";
import H6 from "../Typography/H6";
import FormInput from "../common/FormInput";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SaveNCancel from "../common/SaveNCancel";
import Button from "@mui/material/Button";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

const EducationNTraining = () => {
    return (
        <Box mt={2}>
            <H4
                text='Education / Training'
                color='#0D9CA4'
                fontWeight='bold'
            />

            <Grid container spacing={2}>
                <Grid item md={12} xs={12} mt={4}>
                    <H6
                        text='Institution*'
                        color='#F28A1F'
                        mt={1}
                    />
                    <FormInput
                        placeholder='Write Your Institute Name'
                        icon={<LocationOnOutlinedIcon/>}
                    />
                </Grid>
                <Grid item md={12} xs={12} mt={1}>
                    <Autocomplete
                        options={[]}
                        renderInput={(params) => <TextField {...params} label="Select a Degree"/>}
                    />
                </Grid>
                <Grid item md={6} sm={12} xs={12}>
                    <FormInput
                        placeholder='Result'
                    />
                </Grid>
                <Grid item md={6} sm={12} xs={12}>
                    <FormInput
                        placeholder='Passing Year'
                    />
                </Grid>
                <Grid item md={6} sm={12} xs={12}>
                    <FormControlLabel
                        control={<Checkbox/>}
                        label="Currently Studying"
                        sx={{color: '#A1A6AB'}}
                    />
                </Grid>

                <Grid item md={12} mt={3}>
                    <SaveNCancel/>
                </Grid>

                <Grid item md={12} mt={3}>
                    <Button size='large' variant='outlined' className='secondaryBtn'>
                        <AddOutlinedIcon/>
                        Add Education (If Required)
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default EducationNTraining;