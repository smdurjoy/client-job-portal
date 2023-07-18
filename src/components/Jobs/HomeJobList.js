import React from 'react';
import geoImg from '../../assets/images/geo-alt1.svg'
import wishlist from '../../assets/images/wishlist.svg'
import {Link} from "react-router-dom";

const HomeJobsList = ({jobs}) => {
    const homeJobs = jobs?.slice(0, 4);
    return (
        <div className='homeJobList'>
            {
                homeJobs?.map(job => (
                    <div className='row justify-content-between align-items-center border rounded mt-4'>
                        <div className='col-md-1'>
                            <img className='m-0 p-2' src={job.company_logo} alt="python bootcamp"/>
                        </div>
                        <div className='col-md-4'>
                            <h6 className='text-white'>{job.job_title}</h6>
                            <div className='d-flex text-white'>
                                <p className='text-white m-0'>{job.salary_range} / {job.salary_type}</p>
                                <p className='text-white m-0'>&nbsp; {job.job_type}</p>
                            </div>
                        </div>
                        <div className='col-md-4 d-flex align-items-center'>
                            {
                                (job.city || job.state) && (
                                    <>
                                        <img className='m-0' style={{width: '24px', height: '16px'}} src={geoImg}
                                             alt='search'/>
                                        <p className='text-white m-0'>{job.city}, {job.state}</p>
                                    </>
                                )
                            }
                        </div>
                        <div className='col-md-3'>
                            <div className='d-flex flex-column justify-content-between text-end'
                                 style={{height: '70px'}}>
                                <div className='wishListImg'>
                                    <img style={{width: '30px', margin: 0}} src={wishlist} alt='wishlist'/>
                                </div>
                                <Link to={"/jobs/" + job.id} className='text-white text-decoration-none'>
                                    View Details >>>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default HomeJobsList;