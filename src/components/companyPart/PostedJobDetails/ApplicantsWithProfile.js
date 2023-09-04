import React from 'react';
import ApplicantsCard from "./ApplicantsCard";

const ApplicantsWithProfile = ({applicants}) => {
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

export default ApplicantsWithProfile;