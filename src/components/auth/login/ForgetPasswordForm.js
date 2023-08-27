import React from 'react';
import Box from "@mui/material/Box";
import FormInput from "../../common/FormInput";
import Button from "@mui/material/Button";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import TabWrapper from "../TabWrapper";

const tabContent = () => {
    return (
        <Box
            boxShadow="0px 0px 20px 0px rgba(242, 138, 31, 0.15)"
            width="100%"
            bgcolor="white"
            sx={{borderTopLeftRadius: '30px', borderTopRightRadius: '30px'}}
        >
            <Box px={4} py={8}>
                <FormInput
                    placeholder='Enter Your Email *'
                    inputType='email'
                    icon={<EmailOutlinedIcon/>}
                />
                <Button
                    className='primaryBtn'
                    sx={{marginTop: '1rem', width: '100%'}}
                >
                    Next
                </Button>
            </Box>
        </Box>
    )
}

const OTPForm = () => {
    return (
        <TabWrapper
            defaultTab={'2'}
            tabContent2={tabContent()}
            isDisabled={true}
        />
    );
};

export default OTPForm;