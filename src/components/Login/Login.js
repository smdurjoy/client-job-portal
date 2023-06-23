import React from 'react';
import '../../assets/css/login.css';
import LoginAsWorker from "./LoginAsWorker";
import LoginAsCompany from "./LoginAsCompany";

const Login = () => {
    return (
        <div className="login">
            <div className="container text-center">
                <h4>Login</h4>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home"
                                type="button" role="tab" aria-controls="home" aria-selected="true">
                            Login As Worker
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile"
                                type="button" role="tab" aria-controls="profile" aria-selected="false">
                            Login As Company
                        </button>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <LoginAsWorker/>
                    </div>
                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <LoginAsCompany/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;