import React from 'react';
import Box from "@mui/material/Box";
import H4 from "../Typography/H4";
import {Checkbox, FormControlLabel, Grid} from "@mui/material";
import H6 from "../Typography/H6";
import FormInput from "../common/FormInput";
import SaveNCancel from "../common/SaveNCancel";
import Button from "@mui/material/Button";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import CommonDatePicker from "../common/CommonDatePicker";
import Textarea from "../common/Textarea";

const PersonalInfo = () => {
    return (
        <Box mt={2}>
            <H4
                text='Experience'
                color='#0D9CA4'
                fontWeight='bold'
            />

            <Grid container spacing={2}>
                <Grid item md={6} xs={12} mt={4}>
                    <H6
                        text='Company Name*'
                        color='#F28A1F'
                        mt={1}
                    />
                    <FormInput
                        placeholder='Write Your Company Name'
                        icon={<AssignmentIndOutlinedIcon/>}
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
                    />
                </Grid>
                <Grid item md={6} sm={12} xs={12}>
                    <CommonDatePicker
                        label='From Date'
                    />
                </Grid>
                <Grid item md={6} sm={12} xs={12}>
                    <CommonDatePicker
                        label='To Date'
                    />
                </Grid>
                <Grid item md={6} sm={12} xs={12}>
                    <FormControlLabel
                        control={<Checkbox/>}
                        label="Currently Working"
                        sx={{color: '#A1A6AB'}}
                    />
                </Grid>

                <Grid item md={12} sm={12} xs={12}>
                    <Textarea
                        placeholder="Responsibilities"
                        row={4}
                    />
                </Grid>

                <Grid item md={12} mt={3}>
                    <SaveNCancel/>
                </Grid>

                <Grid item md={12} mt={3}>
                    <Button size='large' variant='outlined' className='secondaryBtn'>
                        <AddOutlinedIcon/>
                        Add Experience (If Required)
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default PersonalInfo;