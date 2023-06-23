import React from 'react';
import image from '../../images/bg.jpg'
import companyLogo from '../../images/companies/company1.jpg';
import moment from "moment";

const ProfileBanner = ({title, subTitle, deadline, handleJobApply, type, handleAppliedCandidates, handleShortlistedCandidates}) => {
    return (
        <div className="profileBanner" style={{backgroundImage: `url(${image})`}}>
            <div className="container">
                <div className="profileBannerContent">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="companyInfo">
                                <div className="d-flex align-items-center">
                                    <img src={companyLogo} alt="companyLogo"/>
                                    <div className="companyDes">
                                        <h3>{title}</h3>
                                        <span>{subTitle}</span>
                                        <p>
                                            +084 123 456 789 &nbsp;&nbsp;&nbsp;
                                            <i className="fa fa-map-marker"></i> 1628 2nd Ave New York
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 deadline">
                            {
                                type == '2' && (
                                    <>
                                        <p>Application ends: {moment(deadline).format('ll')}</p>
                                        <button className="btn applyBtn" onClick={handleAppliedCandidates}>
                                            View Applied Candidates
                                        </button>
                                        <button className="btn shortListBtn" onClick={handleShortlistedCandidates}>
                                            View Shortlist Candidates
                                        </button>
                                    </>
                                )
                            }
                            {
                                type == '1' && (
                                    <>
                                        <p>Application ends: {moment(deadline).format('ll')}</p>
                                        <button className="btn applyBtn" onClick={handleJobApply}>
                                            Apply Now
                                        </button>
                                        <button className="btn shortListBtn">
                                            <i className="fa fa-heart-o"></i> &nbsp;
                                            Shortlist
                                        </button>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileBanner;