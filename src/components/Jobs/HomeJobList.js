import React from 'react';
import pythonLogo from '../../images/pythonLogo.png'
import geoImg from '../../assets/images/geo-alt1.svg'
import wishlist from '../../assets/images/wishlist.svg'
import {Link} from "react-router-dom";

const HomeJobsList = () => {
    return (
        <div className='homeJobList'>
            <div className='row justify-content-between align-items-center border rounded mt-4'>
                <div className='col-md-1'>
                    <img className='m-0 p-2' src={pythonLogo} alt="python bootcamp"/>
                </div>
                <div className='col-md-4'>
                    <h6 className='text-white'>Python 3 Bootcamp</h6>
                    <div className='d-flex text-white'>
                        <p className='text-white m-0'>$2000-$3000 / Monthe</p>
                        <p className='text-white m-0'>&nbsp; Internship</p>
                    </div>
                </div>
                <div className='col-md-4 d-flex align-items-center'>
                    <img className='m-0' style={{width: '24px', height: '16px'}} src={geoImg} alt='search' />
                    <p className='text-white m-0'>1628 2nd Ave New York</p>
                </div>
                <div className='col-md-3'>
                    <div className='d-flex flex-column justify-content-between text-end' style={{height: '70px'}}>
                        <div className='wishListImg'>
                            <img style={{width: '30px', margin: 0}} src={wishlist} alt='wishlist' />
                        </div>
                        <Link to="/jobs/1" className='text-white text-decoration-none'>
                            View Details >>>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='row justify-content-between align-items-center border rounded mt-4'>
                <div className='col-md-1'>
                    <img className='m-0 p-2' src={pythonLogo} alt="python bootcamp"/>
                </div>
                <div className='col-md-4'>
                    <h6 className='text-white'>Python 3 Bootcamp</h6>
                    <div className='d-flex text-white'>
                        <p className='text-white m-0'>$2000-$3000 / Monthe</p>
                        <p className='text-white m-0'>&nbsp; Internship</p>
                    </div>
                </div>
                <div className='col-md-4 d-flex align-items-center'>
                    <img className='m-0' style={{width: '24px', height: '16px'}} src={geoImg} alt='search' />
                    <p className='text-white m-0'>1628 2nd Ave New York</p>
                </div>
                <div className='col-md-3'>
                    <div className='d-flex flex-column justify-content-between text-end' style={{height: '70px'}}>
                        <div className='wishListImg'>
                            <img style={{width: '30px', margin: 0}} src={wishlist} alt='wishlist' />
                        </div>
                        <Link to="/jobs/1" className='text-white text-decoration-none'>
                            View Details >>>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='row justify-content-between align-items-center border rounded mt-4'>
                <div className='col-md-1'>
                    <img className='m-0 p-2' src={pythonLogo} alt="python bootcamp"/>
                </div>
                <div className='col-md-4'>
                    <h6 className='text-white'>Python 3 Bootcamp</h6>
                    <div className='d-flex text-white'>
                        <p className='text-white m-0'>$2000-$3000 / Monthe</p>
                        <p className='text-white m-0'>&nbsp; Internship</p>
                    </div>
                </div>
                <div className='col-md-4 d-flex align-items-center'>
                    <img className='m-0' style={{width: '24px', height: '16px'}} src={geoImg} alt='search' />
                    <p className='text-white m-0'>1628 2nd Ave New York</p>
                </div>
                <div className='col-md-3'>
                    <div className='d-flex flex-column justify-content-between text-end' style={{height: '70px'}}>
                        <div className='wishListImg'>
                            <img style={{width: '30px', margin: 0}} src={wishlist} alt='wishlist' />
                        </div>
                        <Link to="/jobs/1" className='text-white text-decoration-none'>
                            View Details >>>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='row justify-content-between align-items-center border rounded mt-4'>
                <div className='col-md-1'>
                    <img className='m-0 p-2' src={pythonLogo} alt="python bootcamp"/>
                </div>
                <div className='col-md-4'>
                    <h6 className='text-white'>Python 3 Bootcamp</h6>
                    <div className='d-flex text-white'>
                        <p className='text-white m-0'>$2000-$3000 / Monthe</p>
                        <p className='text-white m-0'>&nbsp; Internship</p>
                    </div>
                </div>
                <div className='col-md-4 d-flex align-items-center'>
                    <img className='m-0' style={{width: '24px', height: '16px'}} src={geoImg} alt='search' />
                    <p className='text-white m-0'>1628 2nd Ave New York</p>
                </div>
                <div className='col-md-3'>
                    <div className='d-flex flex-column justify-content-between text-end' style={{height: '70px'}}>
                        <div className='wishListImg'>
                            <img style={{width: '30px', margin: 0}} src={wishlist} alt='wishlist' />
                        </div>
                        <Link to="/jobs/1" className='text-white text-decoration-none'>
                            View Details >>>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeJobsList;