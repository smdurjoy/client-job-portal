import React from 'react';
import '../../assets/css/login.css';
import {Link} from "react-router-dom";

const Register = () => {
    return (
        <div className="login">
            <div className="container text-center">
                <h4>Signup</h4>
                <form className="mt-3">
                    <div className="row mb-3">
                        <div className="col-md-6 mt-3">
                            <div className="form-group">
                                <label className="form-label">First Name *</label>
                                <input type="text"
                                       className="form-control"
                                />
                            </div>
                        </div>
                        <div className="col-md-6 mt-3">
                            <div className="form-group">
                                <label className="form-label">Last Name *</label>
                                <input type="text"
                                       className="form-control"
                                />
                            </div>
                        </div>
                        <div className="col-md-6 mt-3">
                            <div className="form-group">
                                <label className="form-label">Phone Number *</label>
                                <input type="number"
                                       className="form-control"
                                />
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn submitBtn text-center mt-3">
                        Sign Up
                    </button>
                </form>

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