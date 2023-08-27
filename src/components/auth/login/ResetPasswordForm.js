import React from 'react';
import Box from "@mui/material/Box";
import FormInput from "../../common/FormInput";
import Button from "@mui/material/Button";
import TabWrapper from "../TabWrapper";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

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
                    placeholder='Enter Password *'
                    inputType='password'
                    icon={<LockOutlinedIcon/>}
                />
                <FormInput
                    placeholder='Re-Type Password *'
                    inputType='password'
                    icon={<LockOutlinedIcon/>}
                />
                <Button
                    className='primaryBtn'
                    sx={{marginTop: '1rem', width: '100%'}}
                >
                    Reset
                </Button>
            </Box>
        </Box>
    )
}

const ResetPasswordForm = () => {
    return (
        <TabWrapper
            defaultTab={'2'}
            tabContent2={tabContent()}
            isDisabled={true}
        />
    );
};

export default ResetPasswordForm;