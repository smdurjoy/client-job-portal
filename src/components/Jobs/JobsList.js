import React from 'react';
import pythonLogo from '../../images/pythonLogo.png'
import {Link} from "react-router-dom";
import geoImg from "../../assets/images/geo-alt1.svg";
import wishlist from "../../assets/images/wishlist.svg";

const JobsList = ({jobs, isLoading}) => {
    return (
        <div className="jobList">
            <div className="container">
                {
                    jobs?.length ? jobs.map((job, index) => (
                        <div className="list mt-4" key={index}>
                            <div className="row justify-content-between align-items-center border rounded mt-4">
                                <div className='col-md-1 col-sm-1'>
                                    <img className='m-0 p-2' src={pythonLogo} alt="python bootcamp"/>
                                </div>
                                <div className='col-md-4 col-sm-4'>
                                    <h6 className=''>{job.job_title}</h6>
                                    <div className='d-flex'>
                                        <p className='m-0'>$2000-$3000 / Monthly</p>
                                        <p className='m-0'>&nbsp; Internship</p>
                                    </div>
                                </div>
                                <div className='col-md-4 d-flex align-items-center'>
                                    <img className='m-0' style={{width: '24px', height: '16px'}} src={geoImg} alt='search' />
                                    <p className='m-0'>1628 2nd Ave New York</p>
                                </div>
                                <div className='col-md-3 link'>
                                    <div className='d-flex flex-column justify-content-between text-end' style={{height: '70px'}}>
                                        <div>
                                            <img style={{width: '30px', margin: 0}} src={wishlist} alt='wishlist' />
                                        </div>
                                        <Link to={`/jobs/${job.id}`} className='text-decoration-none'>
                                            View Details >>>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )) : <p className="text-center">{!isLoading ? 'No Jobs Found' : ''}</p>
                }
            </div>
        </div>
    );
};

export default JobsList;