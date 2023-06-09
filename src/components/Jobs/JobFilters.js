import React from 'react';
import JobsList from "./JobsList";

const JobFilters = () => {
    return (
        <>
            <div className="jobsFilter">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <input type="text"
                                   className="form-control form-control-sm"
                                   placeholder="e.g. web design"
                            />
                        </div>
                        <div className="col">
                            <select name="category_id" className="form-select">
                                <option value="">Test</option>
                                <option value="">Test 2</option>
                            </select>
                        </div>
                        <div className="col">
                            <select name="category_id" className="form-select">
                                <option value="">Test</option>
                                <option value="">Test 2</option>
                            </select>
                        </div>
                        <div className="col">
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
                            <div className="d-flex">
                                <select name="category_id" className="form-select">
                                    <option value="">Default</option>
                                </select>
                                <select name="category_id" className="form-select">
                                    <option value="">9 Per Page</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <JobsList/>
        </>
    );
};

export default JobFilters;