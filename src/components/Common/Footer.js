import React from 'react';
import brandLogo from '../../images/brandLogo.png';

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <img src={brandLogo} alt="WorkersRus"/>
                        </div>
                        <div className="footerDes pull-right">
                            <span>Terms of Use</span>
                            <span>Privacy Policy</span>
                            <span>Faq</span>
                            <span>Contact</span>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col">
                            <p><b>About WorkerRus</b></p>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                            </p>
                            <p>
                                E-mail: info@workersrus.com<br/>
                                Call: +1 234 567 890
                            </p>
                        </div>
                        <div className="col candidatesCol">
                            <p><b>For Candidates</b></p>
                            <ul>
                                <li>User Dashboard</li>
                                <li>CV Packages</li>
                                <li>Jobs Featured</li>
                                <li>Jobs Urgent</li>
                                <li>Candidate List</li>
                                <li>Candidates Grid</li>
                            </ul>
                        </div>
                        <div className="col">
                            <p><b>For Employers</b></p>
                            <ul>
                                <li>Post New</li>
                                <li>Employer List</li>
                                <li>Employer Grid</li>
                                <li>Jobs Packages</li>
                                <li>Jobs Listing</li>
                                <li>Jobs Featured</li>
                            </ul>
                        </div>
                        <div className="col">
                            <p><b>Join Our Newsletter</b></p>
                            <p>
                                Subscribe to get the latest jobs Poster, candidates..
                            </p>
                            <input type="email"
                                   className="form-control"
                                   placeholder="Your email address"
                            />
                            <button className="btn">
                                Sign up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footerBottom">
                Copyright WorkersRus @{new Date().getFullYear()}. All Rights Reserved
            </div>
        </>
    );
};

export default Footer;