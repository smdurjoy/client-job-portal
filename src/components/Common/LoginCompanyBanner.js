import React from 'react';
import {Link} from "react-router-dom";

const LoginCompanyBanner = () => {
    return (
        <main className="pattern">
            <section className="banner version_2">
                <div className="wrapper">
                    <div className="container">
                        <h3 className="bannerTitle">OVER 2000+ ACTIVE WORKERS</h3>
                        <h3>
                            <Link to='/post-job' style={{color: 'white', textDecoration: 'none'}}>
                                POST A JOB
                            </Link>
                        </h3>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default LoginCompanyBanner;