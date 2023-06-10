import React from 'react';
import JobsList from "./JobsList";
import Pagination from "../Common/Pagination";
import ReactSelect from '../Wrapper/ReactSelect';

const Jobs = () => {
    const options = [
        {
            value: 'test',
            label: 'Test'
        },
        {
            value: 'test2',
            label: 'Test 2'
        }
    ]
    const filterOptions = [
        {
            value: 'Default',
            label: 'Default'
        },
    ]
    const paginationOptions = [
        {
            value: '9',
            label: '9 Per Page'
        },
    ]

    return (
        <>
            <div className="jobsFilter">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <input type="text"
                                   className="form-control form-control-sm"
                                   placeholder="e.g. web design"
                            />
                        </div>
                        <div className="col-md-3">
                            <ReactSelect options={options} placeholder="All Category"/>
                        </div>
                        <div className="col-md-3">
                            <ReactSelect options={options} placeholder="All Location"/>
                        </div>
                        <div className="col-md-3 filterButtons">
                            <button className="btn filterBtn">Filter</button>
                            <button className="btn advancedBtn">Advanced</button>
                        </div>
                    </div>
                    <hr style={{
                        color: "#a5a5a5", marginTop: '50px', width: '100%',
                    }}/>
                    <div className="row">
                        <div className="listFilter">
                            <p>
                                Showing 1 - 9 of 10 results &nbsp;&nbsp;&nbsp;
                                <span className="rss">RSS Feed</span>
                            </p>
                            <div className="d-flex flex-wrap">
                                <div className="filterSelect">
                                    <ReactSelect options={filterOptions} placeholder="Default"/>
                                </div>
                                <div className="filterSelect">
                                    <ReactSelect options={paginationOptions} placeholder="9 Per Page"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <JobsList/>
            <Pagination/>
        </>
    );
};

export default Jobs;