import React from 'react';

const JobFilters = () => {
    return (
        <div className="jobs">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <input type="text"
                               className="form-control"
                               placeholder="e.g. web design"
                        />
                    </div>
                    <div className="col">
                        <select name="category_id" className="form-control">
                            <option value="">Test</option>
                            <option value="">Test 2</option>
                        </select>
                    </div>
                    <div className="col">
                        <select name="category_id" className="form-control">
                            <option value="">Test</option>
                            <option value="">Test 2</option>
                        </select>
                    </div>
                    <div className="col">
                        <button className="btn">Filter</button>
                        <button className="btn">Advanced</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobFilters;