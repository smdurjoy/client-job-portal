import React, {useEffect, useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import brandLogo from '../../images/brandLogo.png';

const Navbar = ({navBg = ''}) => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const [token, setToken] = useState(null);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    useEffect(() => {
        setToken(localStorage.getItem('auth-token'));
    }, []);

    const handleLogout = () => {
        setToken(null);
        localStorage.removeItem('auth-token');
        localStorage.removeItem('user_id');
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
                            <li className="nav-item">
                                <NavLink className={({isActive}) =>
                                    isActive ? "nav-link active" : "nav-link"
                                }
                                         data-scroll-nav="0" to="/jobs"
                                >
                                    JOBS
                                </NavLink>
                            </li>
                            {/*<li className="nav-item">*/}
                            {/*    <NavLink className={({isActive}) =>*/}
                            {/*        isActive ? "nav-link active" : "nav-link"*/}
                            {/*    }*/}
                            {/*             data-scroll-nav="0"*/}
                            {/*             to="/candidates"*/}
                            {/*    >*/}
                            {/*        CANDIDATES*/}
                            {/*    </NavLink>*/}
                            {/*</li>*/}
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
                                    <li className="nav-item">
                                        <button className="btn registerBtn mt-2" onClick={handleLogout}>
                                            LOGOUT
                                        </button>
                                    </li>
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
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;