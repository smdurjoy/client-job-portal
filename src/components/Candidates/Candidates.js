import React from 'react';
import ReactSelect from "../Common/ReactSelect";
import client1 from '../../images/client1.jpeg'
import Rating from "../Common/Rating";

const Candidates = () => {
    const filterOptions = [
        {
            value: 'Newest',
            label: 'Newest'
        },
    ]
    const paginationOptions = [
        {
            value: '8',
            label: '8 Per Page'
        },
    ]
    return (
        <div className="candidates">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-6">Showing 1 - 8 of 13 results </div>
                            <div className="col-md-6 select">
                                <ReactSelect options={filterOptions} placeholder="Newest"/>
                                <ReactSelect options={paginationOptions} placeholder="8 Per Page"/>
                            </div>
                            <div className="col-md-6 mt-4">
                                <div className="card text-center">
                                    <div className="card-body p-0">
                                        <img src={client1} alt="company"/>
                                        <h5 className="card-title">Charles Dickens</h5>
                                        <span className="card-text">User Experience Design Essentials</span>
                                        <Rating/>
                                        <div className="skills mt-3">
                                            <span>Bootstrap</span>
                                            <span>Javascript</span>
                                        </div>
                                        <div className="mt-4 mb-4 subTitle">
                                            View Profile >>>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        Candidate Alert
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Candidates;