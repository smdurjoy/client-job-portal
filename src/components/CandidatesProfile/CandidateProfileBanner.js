import React from 'react';
import image from '../../images/bg.jpg'
import {Link} from "react-router-dom";

const CandidateProfileBanner = ({profile, jobId, makeShortListed}) => {
    return (
        <div className="profileBanner candidateProfileBanner" style={{backgroundImage: `url(${image})`}}>
            <div className="container">
                <div className="profileBannerContent">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="companyInfo">
                                <div className="d-flex align-items-center">
                                    <img src={profile.photo} alt="photo"/>
                                    <div className="companyDes">
                                        <h3>{`${profile.first_name} ${profile.middle_name} ${profile.last_name}`}</h3>
                                        <span>Build 6 Creative Projects</span>
                                        <p className="mt-2">
                                            <i className="fa fa-map-marker"></i>&nbsp;
                                            {profile.address_line1} &nbsp;&nbsp;&nbsp;
                                            <i className="fa fa-envelope-o"></i>&nbsp;
                                            {profile.email} &nbsp;&nbsp;&nbsp;
                                            <i className="fa fa-mobile"></i>&nbsp;
                                            {profile.phone_number}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 deadline candidateProfileBannerBtnDiv">
                            {
                                jobId ? (
                                    <button className="btn applyBtn" onClick={makeShortListed}>
                                        Make Shortlist
                                    </button>
                                ) : (
                                    <Link to="/shortlisted-jobs">
                                        <button className="btn applyBtn">
                                            Shortlist
                                        </button>
                                    </Link>
                                )
                            }
                            <button className="btn shortListBtn">
                                Download CV
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CandidateProfileBanner;