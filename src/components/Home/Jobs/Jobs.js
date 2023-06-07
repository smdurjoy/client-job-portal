import React from 'react';
import rabbit from '../../../images/rabbit.svg'

const Jobs = () => {
    return (<div className="jobs">
        <div className="container">
            <div className="text-center">
                <h2 className="jobsTitle">We Found 489 Matches Jobs</h2>
                <span className="subTitle">MOST VIEW JOBS</span>
            </div>
            <div className="row mt-5">
                <div className="col">
                    <div className="card text-center">
                        <img src={rabbit} alt="--"/>
                        <div className="card-body">
                            <h5 className="card-title">Site Engineer</h5>
                            <p className="card-text">On Site</p>
                            <span>$3000-$3500 / Month </span> <br/>
                            <span>Full Time</span>
                            <div className="mt-4 subTitle">
                                813 Howard Street Oswego <br/>
                                NY 13126 USA
                            </div>
                        </div>
                        <div className="card-footer">
                            Apply Now >>>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card text-center">
                        <img src={rabbit} alt="--"/>
                        <div className="card-body">
                            <h5 className="card-title">Python 3 Bootcamp</h5>
                            <p className="card-text">Skype</p>
                            <span>$2000-$2500 / Month </span> <br/>
                            <span>Internship</span>
                            <div className="mt-4 subTitle">
                                813 Howard Street Oswego <br/>
                                NY 13126 USA
                            </div>
                        </div>
                        <div className="card-footer">
                            Apply Now >>>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card text-center">
                        <img src={rabbit} alt="--"/>
                        <div className="card-body">
                            <h5 className="card-title">Developers Full Stack</h5>
                            <p className="card-text">Oscar Wilde</p>
                            <span>$5500-$7500 / Month </span> <br/>
                            <span>Internship</span>
                            <div className="mt-4 subTitle">
                                813 Howard Street Oswego <br/>
                                NY 13126 USA
                            </div>
                        </div>
                        <div className="card-footer">
                            Apply Now >>>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Jobs;