import React from 'react';
import ApplicantsCard from "./ApplicantsCard";

const ApplicantsWithCV = ({applicants}) => {
    return (
        <>
            {
                applicants?.map((applicant, key) => (
                    <ApplicantsCard applicant={applicant} key={key}/>
                ))
            }
        </>
    );
};

export default ApplicantsWithCV;