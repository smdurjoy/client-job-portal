import React from 'react';
import WorkerOTPForm from "./WorkerOTPForm";
import TabWrapper from "../TabWrapper";
import {COMPANY_LOGIN} from "../../../helpers/Constants";
import CompanyOTPForm from "./CompanyOTPForm";

const OTPForm = ({userType}) => {
    return (
        <>
            <TabWrapper
                defaultTab={userType === COMPANY_LOGIN ? '2' : '1'}
                tabContent2={userType === COMPANY_LOGIN ? <CompanyOTPForm/> : <WorkerOTPForm/>}
                isDisabled={true}
            />
        </>
    );
};

export default OTPForm;