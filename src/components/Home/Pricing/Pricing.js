import React from 'react';
import amazonLogo from "../../../images/amazon.png";

const Pricing = () => {
    return (<div className="pricing">
        <div className="container">
            <div className="text-center">
                <h2 className="pricingTitle">Get The Ideal Plan</h2>
                <span className="subTitle">Lorem Ipsum is simply dummmy text</span>
            </div>
            <div className="row mt-5">
                <div className="col">
                    <div className="card text-center">
                        <span className="headerTwo">
                            Featured
                        </span>
                        <div className="card-body mt-5">
                            <h5 className="card-title">Standard</h5>
                            <h1 className="cardPrice">FREE</h1>
                            <div className="mt-4 subTitle">
                                <p>10 Job Posting</p>
                                <p>Urgent Job</p>
                                <p>Featured Job</p>
                                <p>Job Displayed for 10 Days</p>
                                <p>Premium Support 24/7</p>
                            </div>
                        </div>
                        <div className="card-footer card-footer-secondary">
                            Add To Cart
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card text-center">
                        <span className="headerTwo">
                            Featured
                        </span>
                        <div className="card-body mt-5">
                            <h5 className="card-title">Standard</h5>
                            <h1 className="cardPrice">$100</h1>
                            <div className="mt-4 subTitle">
                                <p>30 Job Posting</p>
                                <p>Urgent Job</p>
                                <p>Featured Job</p>
                                <p>Job Displayed for 45 Days</p>
                                <p>Premium Support 24/7</p>
                            </div>
                        </div>
                        <div className="card-footer">
                            Add To Cart
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card text-center">
                        <span className="headerTwo">
                            Featured
                        </span>
                        <div className="card-body mt-5">
                            <h5 className="card-title">Standard</h5>
                            <h1 className="cardPrice">$150</h1>
                            <div className="mt-4 subTitle">
                                <p>60 Job Posting</p>
                                <p>Urgent Job</p>
                                <p>Featured Job</p>
                                <p>Job Displayed for 60 Days</p>
                                <p>Premium Support 24/7</p>
                            </div>
                        </div>
                        <div className="card-footer card-footer-secondary">
                            Add To Cart
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
};

export default Pricing;