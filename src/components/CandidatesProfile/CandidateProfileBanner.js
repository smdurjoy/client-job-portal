import React from 'react';
import image from '../../images/bg.jpg'
import client5 from '../../images/client5.jpeg'

const CandidateProfileBanner = ({title}) => {
    return (
        <div className="profileBanner candidateProfileBanner" style={{ backgroundImage:`url(${image})` }}>
            <div className="container">
                <div className="profileBannerContent">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="companyInfo">
                                <div className="d-flex align-items-center">
                                    <img src={client5} alt="companyLogo"/>
                                    <div className="companyDes">
                                        <h3>{title}</h3>
                                        <span>Build 6 Creative Projects</span>
                                        <p className="mt-2">
                                            <i className="fa fa-map-marker"></i>&nbsp;
                                            4 Rue Taine, Paris &nbsp;&nbsp;&nbsp;
                                            <i className="fa fa-envelope-o"></i>&nbsp;
                                            fatah@apus.com &nbsp;&nbsp;&nbsp;
                                            <i className="fa fa-mobile"></i>&nbsp;
                                            +051 123 456 789
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 deadline candidateProfileBannerBtnDiv">
                            <button className="btn applyBtn">
                                Shortlist
                            </button>
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