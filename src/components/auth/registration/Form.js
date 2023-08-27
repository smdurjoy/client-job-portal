import React from 'react';
import CompanyRegForm from "./CompanyRegForm";
import TabWrapper from "../TabWrapper";

const Form = () => {
    return (
        <>
            <TabWrapper
                defaultTab={'2'}
                tabContent2={<CompanyRegForm/>}
                isDisabled={true}
            />
        </>
    );
};

export default Form;