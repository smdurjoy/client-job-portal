import React from 'react';
import HomeJobsList from '../../Jobs/HomeJobList';

const Jobs = ({jobs}) => {
    return (
        <div className="jobs">
        <div className="container">
            <div className="text-center">
                <h2 className="jobsTitle">We Found {jobs?.length} Matches Jobs</h2>
                <span className="subTitle">YOU ARE WATCHING 4 TO {jobs?.length}</span>
            </div>
            <div className="row mt-3">
                <HomeJobsList jobs={jobs}/>
            </div>
        </div>
        </div>
    );
};

export default Jobs;