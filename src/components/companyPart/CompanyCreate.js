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
import AddressSelectArea from "../common/AddressSelectArea";
import Textarea from "../common/Textarea";
import SaveNCancel from "../common/SaveNCancel";

const CompanyCreate = ({companyDetails, setCompanyDetails, countries, handleSave, isLoading}) => {
    console.log({companyDetails})
    const handleJobAddressOptionChange = (e, selectedVal, key) => {
        if (!selectedVal) {
            return;
        }
        setCompanyDetails({
            ...companyDetails,
            [key]: selectedVal.id,
        })
    }

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
                            value={companyDetails?.company_name}
                            handleChange={(e) => {
                                setCompanyDetails({
                                    ...companyDetails,
                                    company_name: e.target.value
                                })
                            }}
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
                            value={companyDetails?.industry_type}
                            handleChange={(e) => {
                                setCompanyDetails({
                                    ...companyDetails,
                                    industry_type: e.target.value
                                })
                            }}
                        />
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                        <H6
                            text='Contact Number*'
                            color='#F28A1F'
                            mt={3}
                        />
                        <FormInput
                            placeholder='Enter Your Phone Number'
                            icon={<LocalPhoneIcon/>}
                            value={companyDetails?.company_contact_number}
                            handleChange={(e) => {
                                setCompanyDetails({
                                    ...companyDetails,
                                    company_contact_number: e.target.value
                                })
                            }}
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
                            value={companyDetails?.company_email}
                            handleChange={(e) => {
                                setCompanyDetails({
                                    ...companyDetails,
                                    company_email: e.target.value
                                })
                            }}
                        />
                    </Grid>
                    <AddressSelectArea
                        countries={countries}
                        handleOptionChange={handleJobAddressOptionChange}
                        handleChange={(e) => setCompanyDetails({
                            ...companyDetails,
                            address: e.target.value
                        })}
                        addressVal={companyDetails.address}
                        country_id={companyDetails.country_id}
                        state_id={companyDetails.state_id}
                        city_id={companyDetails.city_id}
                        area_id={companyDetails.area_id}
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
                            value={companyDetails?.company_website}
                            handleChange={(e) => {
                                setCompanyDetails({
                                    ...companyDetails,
                                    company_website: e.target.value
                                })
                            }}
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
                            value={companyDetails?.company_size}
                            handleChange={(e) => {
                                setCompanyDetails({
                                    ...companyDetails,
                                    company_size: e.target.value
                                })
                            }}
                        />
                    </Grid>
                    <Grid item md={12} sm={12} xs={12}>
                        <H6
                            text='About Company'
                            color='#F28A1F'
                            mt={3}
                        />
                        <Textarea
                            placeholder="About Company"
                            row={4}
                            value={companyDetails.about_company}
                            handleChange={(e) => {
                                setCompanyDetails({
                                    ...companyDetails,
                                    about_company: e.target.value
                                })
                            }}
                        />
                    </Grid>
                    <Grid item md={6} sm={12} xs={12} mt={5}>
                        <SaveNCancel
                            handleSave={handleSave}
                            isLoading={isLoading}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default CompanyCreate;