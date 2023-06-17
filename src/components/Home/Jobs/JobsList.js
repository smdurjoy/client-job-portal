import React from 'react';
import pythonLogo from '../../../images/pythonLogo.png'
import {Link} from "react-router-dom";

const JobsList = () => {
    return (
        <div className="jobList">
            <div className="container">
                <div className="list mt-4">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 d-flex">
                            <img src={pythonLogo} alt="python bootcamp"/>
                            <div className="jobDes">
                                <h5>Python 3 Bootcamp</h5>
                                <span>$2000 - $2500 / month</span>
                                <span className="jobType">Internship</span>
                                <p className="mt-2">1628 2nd Ave New York</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 pull-right">
                            <div className="applyArea">
                                <span>Application ends October 1, 2025</span>
                                <Link to="/jobs/1">
                                    <button className="btn">
                                        Apply Now
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="list mt-4">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 d-flex">
                            <img src={pythonLogo} alt="python bootcamp"/>
                            <div className="jobDes">
                                <h5>Python 3 Bootcamp</h5>
                                <span>$2000 - $2500 / month</span>
                                <span className="jobType">Internship</span>
                                <p className="mt-2">1628 2nd Ave New York</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 pull-right">
                            <div className="applyArea">
                                <span>Application ends October 1, 2025</span>
                                <Link to="/jobs/1">
                                    <button className="btn">
                                        Apply Now
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="list mt-4">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 d-flex">
                            <img src={pythonLogo} alt="python bootcamp"/>
                            <div className="jobDes">
                                <h5>Python 3 Bootcamp</h5>
                                <span>$2000 - $2500 / month</span>
                                <span className="jobType">Internship</span>
                                <p className="mt-2">1628 2nd Ave New York</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 pull-right">
                            <div className="applyArea">
                                <span>Application ends October 1, 2025</span>
                                <Link to="/jobs/1">
                                    <button className="btn">
                                        Apply Now
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobsList;