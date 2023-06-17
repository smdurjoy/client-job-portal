import React from 'react';
import user from "../../../images/userCircle.svg";
import search from "../../../images/search.svg";
import save from "../../../images/save.svg";

const HowItWorks = () => {
    return (
        <div className="howItWorks">
            <div className="container">
                <div className="text-center">
                    <span className="subTitle">WORKING PROCESS</span>
                    <h2>How It Works</h2>
                </div>
                <div className="row mt-5 howItWorkDes">
                    <div className="col text-center">
                        <img width={80} height={80} src={user} alt=""/>
                        <div className="mt-4">
                            <h5>Create an Account</h5>
                            <span>
                                Lorem Ipsum is simply dummy text <br/>
                                of the printing and typesetting <br/>
                                industry
                            </span>
                        </div>
                    </div>
                    <div className="col text-center">
                        <img width={80} height={80} src={search} alt=""/>
                        <div className="mt-4">
                            <h5>Search Jobs</h5>
                            <span>Lorem Ipsum is simply dummy text</span><br/>
                            <span>of the printing and typesetting</span><br/>
                            <span>industry</span>
                        </div>
                    </div>
                    <div className="col text-center">
                        <img width={80} height={80} src={save} alt=""/>
                        <div className="mt-4">
                            <h5>Save & Apply</h5>
                            <span>Lorem Ipsum is simply dummy text</span><br/>
                            <span>of the printing and typesetting</span><br/>
                            <span>industry</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;