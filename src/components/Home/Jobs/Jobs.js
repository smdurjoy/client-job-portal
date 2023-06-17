import React from 'react';
import HomeJobsList from '../../Jobs/HomeJobList';

const Jobs = () => {
    return (
        <div className="jobs">
        <div className="container">
            <div className="text-center">
                <h2 className="jobsTitle">We Found 489 Matches Jobs</h2>
                <span className="subTitle">YOU ARE WATCHING 4 TO 27</span>
            </div>
            <div className="row mt-3">
                <HomeJobsList />
            </div>
        </div>
        </div>
    );
};

export default Jobs;