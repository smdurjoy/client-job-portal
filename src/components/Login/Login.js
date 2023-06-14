import React from 'react';
import '../../assets/css/login.css';

const Login = () => {
    return (
        <div className="login">
            <div className="container text-center">
                <h4>Login</h4>
                <form className="mt-3">
                    <div className="row mb-3">
                        <div className="col-md-6 offset-md-3">
                            <input type="number"
                                   className="form-control"
                                   placeholder="Mobile Number"
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn submitBtn text-center">
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;