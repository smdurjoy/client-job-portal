import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import brandLogo from '../../images/brandLogo.png';

const Navbar = ({navBg = ''}) => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const [navBackground, setNavBackground] = useState(navBg);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    const onScroll = () => {
        if (window.scrollY > 600) {
            setNavBackground('scrolledNav');
        } else {
            setNavBackground('');
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll)
    }, [])

    return (
        <header className={"header menu_fixed " + navBackground}>
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

                    <div
                        className={`${isNavCollapsed ? 'collapse' : 'collapseBg'} navbar-collapse justify-content-center align-items-center`}>
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
                                    <button className="btn registerBtn">
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