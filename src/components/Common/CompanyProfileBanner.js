import React from 'react';
import image from '../../images/bg.jpg'
import companyLogo from '../../images/companies/company4.jpg';

const CompanyProfileBanner = ({profile}) => {
    return (
        <div className="profileBanner companyProfileBanner" style={{ backgroundImage:`url(${image})` }}>
            <div className="container">
                <div className="profileBannerContent">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="companyInfo">
                                <div className="d-flex align-items-center">
                                    <img src={profile.company_logo} alt="companyLogo"/>
                                    <div className="companyDes">
                                        <h3>{profile.company_name}</h3>
                                        <span>
                                            <i className="fa fa-credit-card"></i>&nbsp;
                                            Education Training&nbsp;&nbsp;
                                            <i className="fa fa-map-marker"></i>&nbsp;
                                            {profile.city_name}, {profile.state_name}
                                        </span>
                                        <div className="mt-3">
                                            <button className="btn applyBtn">
                                                <i className="fa fa-heart-o"></i>&nbsp;
                                                Follow Us
                                            </button>
                                            <button className="btn shortListBtn">
                                                <i className="fa fa-envelope-o"></i> &nbsp;
                                                Add Review
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 companyCounts">
                            <div className="d-flex justify-content-center">
                                <div className="text-center">
                                    <p>2</p><br/>
                                    <span>Jobs</span>
                                </div>
                                <div className="text-center">
                                    <p>0</p><br/>
                                    <span>Review</span>
                                </div>
                                <div className="text-center">
                                    <p>28</p><br/>
                                    <span>Views</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyProfileBanner;