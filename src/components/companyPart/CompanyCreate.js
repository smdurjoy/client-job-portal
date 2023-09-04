import React from 'react';
import Box from "@mui/material/Box";
import H3 from "../Typography/H3";
import {Grid} from "@mui/material";
import H6 from "../Typography/H6";
import FormInput from "../common/FormInput";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import FactoryIcon from '@mui/icons-material/Factory';
import uploadImg from '../../assets/images/company/uploadImg.svg';
import H4 from "../Typography/H4";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LanguageIcon from '@mui/icons-material/Language';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import {cities, countries, states} from "../../constants/Constant";
import Button from "@mui/material/Button";
import AddressSelectArea from "../common/AddressSelectArea";

const CompanyCreate = () => {
    return (
        <Box className='container' mt={15} mb={3}>
            <Box py={6}>
                <H3
                    text='Create Company Profile'
                    fontWeight='bold'
                />

                <Grid container columnSpacing={4}>
                    <Grid item md={4} xs={12} mt={4}>
                        <Box sx={{border: '1px dashed #A1A6AB'}} display='flex' flexDirection='column'
                             alignItems='center' py={10}>
                            <img src={uploadImg} alt='upload' width='40px'/>
                            <H4
                                text='Browse Logo'
                            />
                        </Box>
                    </Grid>
                    <Grid item md={8} xs={12} mt={4}>
                        <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center'
                             height='100%'>
                            <H6
                                text='Max file size is 5MB, Minimum dimension: 330x300 And Suitable files are .jpg & .png'
                            />
                        </Box>
                    </Grid>
                    <Grid item md={6} xs={12} mt={4}>
                        <H6
                            text='Company Name*'
                            color='#F28A1F'
                            mt={1}
                        />
                        <FormInput
                            placeholder='Write Your Company Name'
                            icon={<BusinessCenterIcon/>}
                        />
                    </Grid>
                    <Grid item md={6} xs={12} mt={4}>
                        <H6
                            text='Industry Type*'
                            color='#F28A1F'
                            mt={1}
                        />
                        <FormInput
                            placeholder='Industry Type'
                            icon={<FactoryIcon/>}
                        />
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                        <H6
                            text='Phone Number*'
                            color='#F28A1F'
                            mt={3}
                        />
                        <FormInput
                            placeholder='Enter Your Phone Number'
                            icon={<LocalPhoneIcon/>}
                        />
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                        <H6
                            text='Email Address*'
                            color='#F28A1F'
                            mt={3}
                        />
                        <FormInput
                            placeholder='Enter Your Email'
                            icon={<EmailOutlinedIcon/>}
                        />
                    </Grid>
                    <AddressSelectArea
                        countries={countries}
                        cities={cities}
                        states={states}
                    />
                    <Grid item md={6} sm={12} xs={12}>
                        <H6
                            text='Website*'
                            color='#F28A1F'
                            mt={3}
                        />
                        <FormInput
                            placeholder='Company Website'
                            icon={<LanguageIcon/>}
                        />
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                        <H6
                            text='Company Size'
                            color='#F28A1F'
                            mt={3}
                        />
                        <FormInput
                            placeholder='Type Company Employee Size'
                            icon={<PeopleAltIcon/>}
                        />
                    </Grid>
                    <Grid item md={6} sm={12} xs={12} mt={5}>
                        <Button size='large' className='primaryBtn'>
                            Create Profile
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default CompanyCreate;