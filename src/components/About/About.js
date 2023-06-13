import React from 'react';
import client1 from "../../images/client1.jpeg";
import client2 from "../../images/client2.webp";
import client3 from "../../images/client3.jpg";
import integrity from '../../images/about/justice.png';
import userFocused from '../../images/about/user-focused.png';
import collaborate from '../../images/about/collaborate.png';
import innovation from '../../images/about/innovation.png';
import professionalDevelopment from '../../images/about/professional-development.png';
import longtermSupport from '../../images/about/longterm-contract.png';

const About = () => {
    return (
        <div className="about">
            <div className="container">
                <h4 className="title">Who We Are?</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur beatae consectetur cupiditate
                    dicta doloremque ducimus eaque ex,
                    expedita, incidunt modi molestiae nihil qui quidem ratione recusandae ullam vero, voluptate
                    voluptatem? Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Aspernatur beatae consectetur cupiditate dicta doloremque ducimus
                    eaque ex,
                    expedita, incidunt modi molestiae nihil qui quidem ratione recusandae ullam vero, voluptate
                    voluptatem?
                </p>

                <h4 className="title">Leadership Team</h4>
                <div className="leadership">
                    <div className="row">
                        <div className="col-md-4 mt-5">
                            <div className="card text-center">
                                <div className="card-body p-0">
                                    <img src={client1} alt="leader"/>
                                    <h5 className="card-title">Charles Dickens</h5>
                                    <span>CEO</span>
                                    <p className="card-text">
                                        Aspernatur beatae consectetur cupiditate dicta doloremque ducimus eaque ex,
                                        expedita, incidunt modi molestiae nihil qui
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mt-5">
                            <div className="card text-center">
                                <div className="card-body p-0">
                                    <img src={client2} alt="leader"/>
                                    <h5 className="card-title">Thiyago Costa</h5>
                                    <p>Managing Director</p>
                                    <p className="card-text">
                                        consectetur adipisicing elit. cupiditate dicta
                                        doloremque ducimus eaque ex,
                                        expedita, incidunt modi molestiae nihil qui
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mt-5">
                            <div className="card text-center">
                                <div className="card-body p-0">
                                    <img src={client3} alt="leader"/>
                                    <h5 className="card-title">Emily Hazel</h5>
                                    <span>Vice President</span>
                                    <p className="card-text">
                                        Aspernatur beatae consectetur cupiditate dicta doloremque ducimus eaque ex,
                                        expedita, incidunt modi molestiae nihil qui
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h4 className="title">Our Values</h4>
                <div className="value">
                    <div className="row">
                        <div className="col-md-4 mt-4">
                            <div className="card text-center">
                                <div className="card-body p-0">
                                    <img src={integrity} alt="leader"/>
                                    <h5 className="card-title">Integrity</h5>
                                    <p className="card-text mt-4">
                                        Aspernatur beatae consectetur cupiditate dicta doloremque ducimus eaque ex,
                                        expedita, incidunt modi molestiae nihil qui
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mt-4">
                            <div className="card text-center">
                                <div className="card-body p-0">
                                    <img src={userFocused} alt="leader"/>
                                    <h5 className="card-title">User Focused</h5>
                                    <p className="card-text mt-4">
                                        Aspernatur beatae consectetur cupiditate dicta doloremque ducimus eaque ex,
                                        expedita, incidunt modi molestiae nihil qui
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mt-4">
                            <div className="card text-center">
                                <div className="card-body p-0">
                                    <img src={collaborate} alt="leader"/>
                                    <h5 className="card-title">Collaboration</h5>
                                    <p className="card-text mt-4">
                                        Aspernatur beatae consectetur cupiditate dicta doloremque ducimus eaque ex,
                                        expedita, incidunt modi molestiae nihil qui
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mt-4">
                            <div className="card text-center">
                                <div className="card-body p-0">
                                    <img src={innovation} alt="leader"/>
                                    <h5 className="card-title">Innovation</h5>
                                    <p className="card-text mt-4">
                                        Aspernatur beatae consectetur cupiditate dicta doloremque ducimus eaque ex,
                                        expedita, incidunt modi molestiae nihil qui
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mt-4">
                            <div className="card text-center">
                                <div className="card-body p-0">
                                    <img src={professionalDevelopment} alt="leader"/>
                                    <h5 className="card-title">Professional Development</h5>
                                    <p className="card-text mt-4">
                                        Aspernatur beatae consectetur cupiditate dicta doloremque ducimus eaque ex,
                                        expedita, incidunt modi molestiae nihil qui
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mt-4">
                            <div className="card text-center">
                                <div className="card-body p-0">
                                    <img src={longtermSupport} alt="leader"/>
                                    <h5 className="card-title">Long-Term Partnerships</h5>
                                    <p className="card-text mt-4">
                                        Aspernatur beatae consectetur cupiditate dicta doloremque ducimus eaque ex,
                                        expedita, incidunt modi molestiae nihil qui
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h4 className="title">Contact Us</h4>
                <p>This you for reaching us. We are always happy to hear from you.</p>
                <div className="contact">
                    <form className="mt-4">
                        <div className="row mb-3">
                            <div className="col-md-6 my-2">
                                <input type="text"
                                       className="form-control"
                                       placeholder="Your Name"
                                />
                            </div>
                            <div className="col-md-6 my-2">
                                <input type="email"
                                       className="form-control"
                                       placeholder="Your City"
                                />
                            </div>
                            <div className="col-md-6 my-2">
                                <input type="text"
                                       className="form-control"
                                       placeholder="Phone Number"
                                />
                            </div>
                            <div className="col-md-6 my-2">
                                <input type="email"
                                       className="form-control"
                                       placeholder="Email"
                                />
                            </div>
                        </div>
                        <div className="mb-5">
                            <textarea className="form-control" rows="6" placeholder="Message"></textarea>
                        </div>
                        <button type="submit" className="btn submitBtn">
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default About;