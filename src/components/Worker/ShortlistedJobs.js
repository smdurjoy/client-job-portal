import React from 'react';
import JobsList from "../Jobs/JobsList";

const ShortlistedJobs = ({jobs}) => {
    return (
        <div className="container py-5">
            <h4>Shortlisted Jobs</h4>
            <JobsList jobs={jobs}/>
        </div>
    );
};

export default ShortlistedJobs;