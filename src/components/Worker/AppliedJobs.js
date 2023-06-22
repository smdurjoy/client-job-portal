import React from 'react';
import JobsList from "../Jobs/JobsList";

const AppliedJobs = ({jobs}) => {
    return (
        <div className="container py-5">
            <h4 className="workerTitle">Applied Jobs</h4>
            <JobsList jobs={jobs}/>
        </div>
    );
};

export default AppliedJobs;