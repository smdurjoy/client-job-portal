import React from 'react';
import Box from "@mui/material/Box";
import H4 from "../Typography/H4";
import {Grid} from "@mui/material";
import H6 from "../Typography/H6";
import FormInput from "../common/FormInput";
import SaveNCancel from "../common/SaveNCancel";
import Button from "@mui/material/Button";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';

const OtherInformation = () => {
    return (
        <Box mt={2}>
            <H4
                text='Other Information'
                color='#0D9CA4'
                fontWeight='bold'
            />

            <Grid container spacing={2}>
                <Grid item md={12} xs={12} mt={4}>
                    <H6
                        text='Skills*'
                        color='#F28A1F'
                        mt={1}
                    />
                    <FormInput
                        placeholder='Write Your Skills'
                        icon={<SignalCellularAltOutlinedIcon/>}
                    />
                </Grid>

                <Grid item md={12} mt={3}>
                    <SaveNCancel/>
                </Grid>

                <Grid item md={12} mt={3}>
                    <Button size='large' variant='outlined' className='secondaryBtn'>
                        <AddOutlinedIcon/>
                        Add Skills
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default OtherInformation;