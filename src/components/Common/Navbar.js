import React, {useState} from 'react';
import {Link} from "react-router-dom";
import brandLogo from '../../images/brandLogo.png';

const Navbar = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <header className="header menu_fixed">
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link className="logo" to="/">
                        <img src={brandLogo} alt="logo"/>
                    </Link>

                    <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarsExample09" aria-controls="navbarsExample09"
                            aria-expanded={!isNavCollapsed} aria-label="Toggle navigation"
                            onClick={handleNavCollapse}>
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse justify-content-center align-items-center`}>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" data-scroll-nav="0" to="/">
                                    HOME
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" data-scroll-nav="0" to="/">
                                    JOBS
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" data-scroll-nav="0" to="/">
                                    CANDIDATES
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" data-scroll-nav="0" to="/">
                                    EMPLOYERS
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" data-scroll-nav="0" to="/">
                                    LOGIN
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" data-scroll-nav="0" to="/">
                                    <button className="btn btn-info">
                                        REGISTER
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;