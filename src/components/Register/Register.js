import React from 'react';
import '../../assets/css/login.css';
import {Link} from "react-router-dom";
import RegisterAsCompany from "./RegisterAsCompany";
import RegisterAsWorker from "./RegisterAsWorker";

const Register = () => {
    return (
        <div className="login">
            <div className="container text-center">
                <h4>Signup</h4>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home"
                                type="button" role="tab" aria-controls="home" aria-selected="true">
                            Register as Worker
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile"
                                type="button" role="tab" aria-controls="profile" aria-selected="false">
                            Register as Company
                        </button>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <RegisterAsWorker/>
                    </div>
                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <RegisterAsCompany/>
                    </div>
                </div>

                <div className="row mt-5">
                    <h5>Or</h5>
                    <div className="social-menu socialIcons">
                        <ul className="justify-content-center mt-3 px-2">
                            <li>
                                <Link to="https://www.facebook.com" target="blank" className="facebook">
                                    <i className="fa fa-facebook"></i>
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.twitter.com" target="blank" className="twitter">
                                    <i className="fa fa-twitter"></i>
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.linkedin.com" target="blank" className="linkedin">
                                    <i className="fa fa-linkedin"></i>
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.pinterest.com" target="blank" className="pinterest">
                                    <i className="fa fa-pinterest"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;