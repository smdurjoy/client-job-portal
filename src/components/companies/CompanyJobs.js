import React, {useState} from 'react';
import JobList from "../Jobs/JobList";

const CompanyJobs = ({jobs}) => {
    const [viewMode, setViewMode] = React.useState(0);
    const [sortBy, setSortBy] = useState(1);

    const handleChange = (event, newValue) => {
        setViewMode(newValue);
    };

    return (
        <>
            <JobList
                viewMode={viewMode}
                sortBy={sortBy}
                setSortBy={setSortBy}
                jobs={jobs}
                handleChange={handleChange}
            />
        </>
    );
};

export default CompanyJobs;