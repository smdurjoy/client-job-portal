import React from 'react';
import WorkerForm from "./WorkerForm";
import CompanyForm from "./CompanyForm";
import workerLoginImg from '../../../assets/images/auth/workerLogin.png';
import companyLoginImg from '../../../assets/images/auth/companyLogin.png';
import TabWrapper from "../TabWrapper";

const Form = ({setImg, setSubtitle}) => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);

        if (newValue === '1') {
            setImg(workerLoginImg);
            setSubtitle('Log in to continue your account and explore new jobs');
        } else {
            setImg(companyLoginImg);
            setSubtitle('Log in to continue your account and enjoy more features');
        }
    };

    return (
        <>
            <TabWrapper
                defaultTab={value}
                tabContent1={<WorkerForm/>}
                tabContent2={<CompanyForm/>}
                handleChange={handleChange}
            />
        </>
    );
};

export default Form;