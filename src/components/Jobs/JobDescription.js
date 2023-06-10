import React from 'react';
import '../../assets/css/jobDescription.css';
import m1 from '../../images/companies/jobs/m1.jpg';
import m2 from '../../images/companies/jobs/m2.webp';
import m3 from '../../images/companies/jobs/m3.jpg';

const JobDescription = () => {
    return (
        <div className="jobDescription">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h4>- Job Description</h4>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy
                            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                            make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                            passages,
                            and more recently with desktop publishing software like Aldus PageMaker including versions
                            of Lorem Ipsum.
                        </p>
                        <h4>- Job Responsibilities:</h4>
                        <ul>
                            <li>There are many variations of passages of Lorem Ipsum available.</li>
                            <li>Many desktop publishing packages and web page editors now use</li>
                            <li>Various versions have evolved over the years, sometimes by accident, sometimes on
                                purpose
                            </li>
                            <li>If you are going to use a passage of Lorem Ipsum</li>
                            <li>All the Lorem Ipsum generators on the Internet tend to repeat predefined</li>
                            <li>Contrary to popular belief, Lorem Ipsum is not simply random text</li>
                        </ul>
                        <h4>- Skills Required:</h4>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                            <li>But I must explain to you how all this mistaken</li>
                            <li>I will give you a complete</li>
                            <li>At vero eos et accusamus et iusto odio dignissimos ducimus</li>
                            <li>On the other hand, we denounce with righteous</li>
                            <li>If you are going to use a passage of Lorem Ipsum</li>
                        </ul>
                        <h4>- About Company</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                        <h4>- Photos</h4>
                        <div className="companyPhoto mb-3">
                            <img src={m1} alt="image1"/>
                            <img src={m2} alt="image2"/>
                            <img src={m3} alt="image3"/>
                        </div>
                        <h4>- Video</h4>
                        {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                        <iframe width="850" height="450" src="https://www.youtube.com/embed/tgbNymZ7vqY">
                        </iframe>
                        <div className="tags mt-4">
                            Tagged as: &nbsp; &nbsp;
                            <span>Digital</span>
                            <span>Interviews</span>
                            <span>Jobs</span>
                            <span>Media</span>
                        </div>
                        <hr className="mt-5"/>
                        <div className="socialArea d-flex justify-content-between align-items-center">
                            <div>
                                - Share:
                            </div>
                            <button className="btn shortListBtn">
                                <i className="fa fa-heart-o"></i> &nbsp;
                                Shortlist
                            </button>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card py-3 px-2 mt-0">
                            <div className="card-body candidateAlert">
                                <h5>Jobs Overview</h5>
                                <div className="content mt-4">
                                    <div className="d-flex justify-content-between">
                                        <div className="title">
                                            <span>Job Type</span>
                                        </div>
                                        <div className="des">
                                            <span>Internship</span>
                                        </div>
                                    </div>
                                    <hr/>
                                </div>
                                <div className="content">
                                    <div className="d-flex justify-content-between">
                                        <div className="title">
                                            <span>Category</span>
                                        </div>
                                        <div className="des">
                                            <span>Retail</span>
                                        </div>
                                    </div>
                                    <hr/>
                                </div>
                                <div className="content">
                                    <div className="d-flex justify-content-between">
                                        <div className="title">
                                            <span>Location</span>
                                        </div>
                                        <div className="des">
                                            <span>1628 2nd Ave New York</span>
                                        </div>
                                    </div>
                                    <hr/>
                                </div>
                                <div className="content">
                                    <div className="d-flex justify-content-between">
                                        <div className="title">
                                            <span>Offered Salary</span>
                                        </div>
                                        <div className="des">
                                            <span>$2000 - $2500 / month</span>
                                        </div>
                                    </div>
                                    <hr/>
                                </div>
                                <div className="content">
                                    <div className="d-flex justify-content-between">
                                        <div className="title">
                                            <span>Posted</span>
                                        </div>
                                        <div className="des">
                                            <span>Posted 3 years ago </span>
                                        </div>
                                    </div>
                                    <hr/>
                                </div>
                                <div className="content">
                                    <div className="d-flex justify-content-between">
                                        <div className="title">
                                            <span>Experience</span>
                                        </div>
                                        <div className="des">
                                            <span>5 Year</span>
                                        </div>
                                    </div>
                                    <hr/>
                                </div>
                                <div className="content">
                                    <div className="d-flex justify-content-between">
                                        <div className="title">
                                            <span>Gender</span>
                                        </div>
                                        <div className="des">
                                            <span>Male</span>
                                        </div>
                                    </div>
                                    <hr/>
                                </div>
                                <div className="content">
                                    <div className="d-flex justify-content-between">
                                        <div className="title">
                                            <span>Industry</span>
                                        </div>
                                        <div className="des">
                                            <span>Development</span>
                                        </div>
                                    </div>
                                    <hr/>
                                </div>
                                <div className="content">
                                    <div className="d-flex justify-content-between">
                                        <div className="title">
                                            <span>Qualification</span>
                                        </div>
                                        <div className="des">
                                            <span>Bachelor Degree</span>
                                        </div>
                                    </div>
                                    <hr/>
                                </div>
                                <div className="content">
                                    <div className="d-flex justify-content-between">
                                        <div className="title">
                                            <span>Level</span>
                                        </div>
                                        <div className="des">
                                            <span>Manager</span>
                                        </div>
                                    </div>
                                    <hr/>
                                </div>
                                <div className="content">
                                    <div className="d-flex justify-content-between">
                                        <div className="title">
                                            <span>Applied</span>
                                        </div>
                                        <div className="des">
                                            <span>1</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="apply">
                                    <p>Application ends: <span>October 1 2025</span></p>
                                    <button className="applyBtn">Apply Now</button>
                                    <button className="shortlistBtn">Shortlist</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDescription;