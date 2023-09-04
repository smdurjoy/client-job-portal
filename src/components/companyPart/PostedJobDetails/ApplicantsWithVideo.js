import React from 'react';
import {Grid} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const ApplicantsWithVideo = ({applicants}) => {
    return (
        <Grid container columnSpacing={4}>
            {
                applicants?.map((applicant, key) => (
                    <Grid item md={4} xs={12} mt={4} key={key}>
                        <Box p={2} border='1px solid #D4D4D4' borderRadius='7px' textAlign='center' mb={2}>
                            <video width='100%' height='300px'>
                                <source src="" type="video/mp4"/>
                            </video>
                            <Button size='large' className='primaryBtn' mt={2}>
                                Contact Me
                            </Button>
                        </Box>
                    </Grid>
                ))
            }
        </Grid>
    );
};

export default ApplicantsWithVideo;