import React, {useEffect, useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import brandLogo from '../../images/brandLogo.png';

const Navbar = ({navBg = ''}) => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const [token, setToken] = useState(null);
    const [type, setType] = useState(null);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    useEffect(() => {
        setToken(localStorage.getItem('auth-token'));
        setType(localStorage.getItem('type'));
    }, []);

    const handleLogout = () => {
        setToken(null);
        localStorage.removeItem('auth-token');
        localStorage.removeItem('user_id');
        localStorage.removeItem('company_id');
        localStorage.removeItem('type');
    }

    return (
        <header className={"header menu_fixed " + navBg}>
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
                        className={`${isNavCollapsed ? 'collapse' : 'collapseBg'} navbar-collapse justify-content-end align-items-center`}>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className={({isActive}) =>
                                    isActive ? "nav-link active" : "nav-link"
                                }
                                         data-scroll-nav="0" to="/"
                                >
                                    HOME
                                </NavLink>
                            </li>
                            {
                                type == '1' ? (
                                    <>
                                        <li className="nav-item">
                                            <NavLink className={({isActive}) =>
                                                isActive ? "nav-link active" : "nav-link"
                                            }
                                                     data-scroll-nav="0" to="/jobs"
                                            >
                                                JOBS
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className={({isActive}) =>
                                                isActive ? "nav-link active" : "nav-link"
                                            }
                                                     data-scroll-nav="0"
                                                     to="/companies"
                                            >
                                                COMPANIES
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className={({isActive}) =>
                                                isActive ? "nav-link active" : "nav-link"
                                            }
                                                     data-scroll-nav="0"
                                                     to="/about"
                                            >
                                                ABOUT
                                            </NavLink>
                                        </li>
                                        {
                                            token ? (
                                                <>
                                                    <li className="nav-item">
                                                        <li className="nav-item dropdown">
                                                            {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
                                                            <button className="nav-link dropdown-toggle" id="navbarDropdown"
                                                                    role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                PROFILE
                                                            </button>
                                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                                <li>
                                                                    <Link className="dropdown-item" href="#" to='/profile'>
                                                                        View Profile
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link className="dropdown-item" href="#" to='/edit-profile'>
                                                                        Edit Profile
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link className="dropdown-item" href="#" to='/applied-jobs'>
                                                                        Applied Jobs
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link className="dropdown-item" href="#" to='/shortlisted-jobs'>
                                                                        Shortlisted Jobs
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </li>
                                                    <li className="nav-item">
                                                        <button className="btn registerBtn mt-2" onClick={handleLogout}>
                                                            LOGOUT
                                                        </button>
                                                    </li>
                                                </>
                                            ) : (
                                                <>
                                                    <li className="nav-item">
                                                        <NavLink className={({isActive}) =>
                                                            isActive ? "nav-link active" : "nav-link"
                                                        }
                                                                 data-scroll-nav="0"
                                                                 to="/login"
                                                        >
                                                            LOGIN
                                                        </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink className={({isActive}) =>
                                                            isActive ? "nav-link active" : "nav-link"
                                                        }
                                                                 data-scroll-nav="0"
                                                                 to="/register"
                                                        >
                                                            <button className="btn registerBtn">
                                                                REGISTER
                                                            </button>
                                                        </NavLink>
                                                    </li>
                                                </>
                                            )
                                        }
                                    </>
                                ) : (
                                    token ? (
                                        <>
                                            <li className="nav-item">
                                                <li className="nav-item dropdown">
                                                    {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
                                                    <button className="nav-link dropdown-toggle" id="navbarDropdown"
                                                            role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        PROFILE
                                                    </button>
                                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                        <li>
                                                            <Link className="dropdown-item" href="#" to='/company-profile'>
                                                                View Profile
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" href="#" to='/edit-company-profile'>
                                                                Edit Profile
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </li>
                                            <li className="nav-item">
                                                <li className="nav-item dropdown">
                                                    {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
                                                    <button className="nav-link dropdown-toggle" id="navbarDropdown"
                                                            role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        JOBS
                                                    </button>
                                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                        <li>
                                                            <Link className="dropdown-item" href="#" to='/post-job'>
                                                                Post a Job
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" href="#" to='/posted-job-list'>
                                                                Posted Job List
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </li>
                                            <li className="nav-item">
                                                <button className="btn registerBtn mt-2" onClick={handleLogout}>
                                                    LOGOUT
                                                </button>
                                            </li>
                                        </>
                                    ) : <></>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;