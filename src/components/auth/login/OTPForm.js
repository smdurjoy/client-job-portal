import React from 'react';
import WorkerOTPForm from "./WorkerOTPForm";
import TabWrapper from "../TabWrapper";

const OTPForm = () => {
    return (
        <>
            <TabWrapper
                defaultTab={'2'}
                tabContent2={<WorkerOTPForm/>}
                isDisabled={true}
            />
        </>
    );
};

export default OTPForm;