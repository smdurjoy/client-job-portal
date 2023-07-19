import React from 'react';
import {Link} from "react-router-dom";

const Marketing = ({token}) => {
    return (
        <div className="d-flex">
            <div className="marketing1">
                <div className="row pe-3">
                    <div className="col-md-6"></div>
                    <div className="col-md-6 text-end">
                        <h3 className="text-white">Make a Difference with your Online Resume!</h3>
                        <p className="fw-lighter text-white">
                            In the CSS code, we set the width and height of the div to your desired dimensions.
                            The property is set to a linear gradient that transitions from green to red. The
                        </p>
                        {
                            token ? <></> : (
                                <Link to={'/register'}>
                                    <button>Create Account</button>
                                </Link>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="marketing2">
                <div className="row ps-3">
                    <div className="col-md-6 text-start">
                        <h3 className="text-white">Make the Most of Growth Opportunities</h3>
                        <p className="fw-lighter text-white">In the CSS code, we set the width and height of the div to
                            your desired dimensions. The property is set to a linear gradient that transitions from
                            green to red. The</p>
                        {
                            token ? <></> : (
                                <Link to={'/register'}>
                                    <button>Create Account</button>
                                </Link>
                            )
                        }
                    </div>
                    <div className="col-md-6"></div>
                </div>
            </div>
        </div>
    );
};

export default Marketing;