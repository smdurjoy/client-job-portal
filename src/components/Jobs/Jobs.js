import React from 'react';
import JobsList from "./JobsList";
import ReactSelect from '../Wrapper/ReactSelect';

const Jobs = ({
                  countries,
                  categories,
                  jobs,
                  isLoading,
                  category,
                  country,
                  handleJobSearch,
                  setCountry,
                  setCategory,
                  keyword,
                  setKeyword,
              }) => {
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
                                   value={keyword}
                                   onChange={(e) => setKeyword(e.target.value)}
                            />
                        </div>
                        <div className="col-md-3">
                            <ReactSelect
                                options={categories}
                                placeholder="All Category"
                                value={category}
                                onChange={(e) => {
                                    const label = categories.find(val => val.id == e.id)?.label;
                                    setCategory({
                                        value: e.id,
                                        label,
                                    });
                                }}
                            />
                        </div>
                        <div className="col-md-3">
                            <ReactSelect
                                options={countries}
                                placeholder="All Location"
                                value={country}
                                onChange={(e) => {
                                    const label = countries.find(val => val.id == e.id)?.label;
                                    setCountry({
                                        value: e.id,
                                        label,
                                    });
                                }}
                            />
                        </div>
                        <div className="col-md-3 filterButtons">
                            <button className="btn filterBtn" onClick={handleJobSearch}>
                                Filter
                            </button>
                            {/*<button className="btn advancedBtn">*/}
                            {/*    <i className="fa fa-cog"></i> &nbsp;*/}
                            {/*    Advanced*/}
                            {/*</button>*/}
                        </div>
                    </div>
                    <hr style={{
                        color: "#a5a5a5", marginTop: '50px', width: '100%',
                    }}/>
                    {/*{*/}
                    {/*    jobs?.length ? <div className="row">*/}
                    {/*        <div className="listFilter">*/}
                    {/*            <p>*/}
                    {/*                Showing 1 - 9 of 10 results &nbsp;&nbsp;&nbsp;*/}
                    {/*                <span className="rss">RSS Feed</span>*/}
                    {/*            </p>*/}
                    {/*            <div className="d-flex flex-wrap">*/}
                    {/*                <div className="filterSelect">*/}
                    {/*                    <ReactSelect options={filterOptions} placeholder="Default"/>*/}
                    {/*                </div>*/}
                    {/*                <div className="filterSelect">*/}
                    {/*                    <ReactSelect options={paginationOptions} placeholder="9 Per Page"/>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div> : <></>*/}
                    {/*}*/}
                </div>
            </div>
            <JobsList
                jobs={jobs}
                isLoading={isLoading}
            />
            {/*{jobs?.length && <Pagination/>}*/}
        </>
    );
};

export default Jobs;