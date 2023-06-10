import React from 'react';
import image from '../../images/bg.jpg'
import companyLogo from '../../images/companies/company1.jpg';

const ProfileBanner = ({title}) => {
    return (
        <div className="profileBanner" style={{ backgroundImage:`url(${image})` }}>
            <div className="container">
                <div className="profileBannerContent">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="companyInfo">
                                <div className="d-flex align-items-center">
                                    <img src={companyLogo} alt="companyLogo"/>
                                    <div className="companyDes">
                                        <h3>{title}</h3>
                                        <span>Retail</span>
                                        <p>
                                            +084 123 456 789 &nbsp;&nbsp;&nbsp;
                                            <i className="fa fa-map-marker"></i> 1628 2nd Ave New York
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 deadline">
                            <p>Application ends: October 1, 2025</p>
                            <button className="btn applyBtn">
                                Apply Now
                            </button>
                            <button className="btn shortListBtn">
                                <i className="fa fa-heart-o"></i> &nbsp;
                                Shortlist
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileBanner;