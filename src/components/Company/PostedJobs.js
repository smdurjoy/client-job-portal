import React from 'react';
import JobsList from "../Jobs/JobsList";

const PostedJobs = ({jobs}) => {
    return (
        <div className="container py-5">
            <h4 className="workerTitle">Posted Jobs</h4>
            <JobsList jobs={jobs}/>
        </div>
    );
};

export default PostedJobs;