import React from 'react';
import amazonLogo from "../../../images/amazon.png";

const FeaturedJobs = () => {
    return (<div className="pricing">
        <div className="container">
            <div className="text-center">
                <span className="subTitle">MOST VIEW JOBS</span>
                <h2 className="featureJobTitle">Hot & Featured Jobs</h2>
            </div>
            <div className="row mt-5">
                <div className="col">
                    <div className="card text-center">
                        <div>
                            <span className="header">
                                Featured
                            </span>
                        </div>
                        <span className="mt-2">Full Time</span>
                        <div className="card-body p-0">
                            <img src={amazonLogo} alt="company"/>
                            <h5 className="card-title">Head of Marketing</h5>
                            <p className="card-text">lorem ipsum</p>
                            <div>
                                <span>Strategy</span>
                                <span>Planning</span>
                                <span>Leadership</span>
                            </div>
                            <div className="mt-4 subTitle">
                                813 Howard Street Oswego <br/>
                                NY 13126 USA
                            </div>
                            <div className="mt-4 mb-4 subTitle">
                                Browse Jobs >>>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card text-center">
                        <div>
                            <span className="header">
                                Featured
                            </span>
                        </div>
                        <span className="mt-2">Full Time</span>
                        <div className="card-body p-0">
                            <img src={amazonLogo} alt="company"/>
                            <h5 className="card-title">Head of Marketing</h5>
                            <p className="card-text">lorem ipsum</p>
                            <div>
                                <span>Strategy</span>
                                <span>Planning</span>
                                <span>Leadership</span>
                            </div>
                            <div className="mt-4 subTitle">
                                813 Howard Street Oswego <br/>
                                NY 13126 USA
                            </div>
                            <div className="mt-4 mb-4 subTitle">
                                Browse Jobs >>>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card text-center">
                        <div>
                            <span className="header">
                                Featured
                            </span>
                        </div>
                        <span className="mt-2">Full Time</span>
                        <div className="card-body p-0">
                            <img src={amazonLogo} alt="company"/>
                            <h5 className="card-title">Head of Marketing</h5>
                            <p className="card-text">lorem ipsum</p>
                            <div>
                                <span>Strategy</span>
                                <span>Planning</span>
                                <span>Leadership</span>
                            </div>
                            <div className="mt-4 subTitle">
                                813 Howard Street Oswego <br/>
                                NY 13126 USA
                            </div>
                            <div className="mt-4 mb-4 subTitle">
                                Browse Jobs >>>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
};

export default FeaturedJobs;