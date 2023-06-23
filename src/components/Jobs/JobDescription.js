import React from 'react';
import '../../assets/css/jobDescription.css';
import companyLogo from '../../images/companies/company1.jpg';
import m1 from '../../images/companies/jobs/m1.jpg';
import m2 from '../../images/companies/jobs/m2.webp';
import m3 from '../../images/companies/jobs/m3.jpg';
import {Link} from "react-router-dom";
import moment from "moment";

const JobDescription = ({jobDescription, type, handleJobApply, handleJobEdit, workerMakeJobShortlisted, isSubmitting}) => {
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
                            {jobDescription?.job_responsibilities}
                        </ul>
                        <h4>- Skills Required:</h4>
                        <ul>
                            {
                                jobDescription?.skills_requirements?.map(skill => (
                                    <li>{skill.skill_name}</li>
                                ))
                            }
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
                        <div className="socialArea d-flex flex-wrap justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <span>- Share:</span>
                                <div className="social-menu socialIcons">
                                    <ul>
                                        <li>
                                            <Link to="https://www.facebook.com" target="blank" className="facebook">
                                                <i className="fa fa-facebook"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="https://www.twitter.com" target="blank" className="twitter">
                                                <i className="fa fa-twitter"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="https://www.linkedin.com" target="blank" className="linkedin">
                                                <i className="fa fa-linkedin"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="https://www.pinterest.com" target="blank" className="pinterest">
                                                <i className="fa fa-pinterest"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <button className="btn shortListBtn"
                                    onClick={workerMakeJobShortlisted}
                                    disabled={isSubmitting}
                            >
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
                                            <span>{jobDescription?.job_type}</span>
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
                                            <span>{jobDescription?.job_category}</span>
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
                                            <span>{jobDescription.state}, {jobDescription.city}</span>
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
                                            <span>{jobDescription?.salary_range} / month</span>
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
                                            <span>Male, Female</span>
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
                                    <p>Application
                                        ends: <span>{moment(jobDescription.application_deadline).format('ll')}</span>
                                    </p>
                                    {
                                        type == '2' ? <button className="applyBtn"
                                                              onClick={handleJobEdit}>
                                            Edit Job
                                        </button> : <button className="applyBtn"
                                                            onClick={handleJobApply}
                                                            disabled={isSubmitting}
                                        >
                                            Apply Now
                                        </button>
                                    }
                                    {/*<button className="shortlistBtn">Shortlist</button>*/}
                                    <p className="text-center m-lg-auto py-3">OR APPLY WITH</p>
                                    <div className="applyWith">
                                        <button className="btn facebook">
                                            <i className="fa fa-facebook"></i>&nbsp;
                                            facebook
                                        </button>
                                        <button className="btn google">
                                            <i className="fa fa-google"></i>&nbsp;
                                            google
                                        </button>
                                        <button className="btn linkedin">
                                            <i className="fa fa-linkedin"></i>&nbsp;
                                            linkedin
                                        </button>
                                        <button className="btn twitter">
                                            <i className="fa fa-twitter"></i>&nbsp;
                                            twitter
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card py-3 px-2 mt-4">
                            <div className="card-body candidateAlert companyInfoArea">
                                <div className="text-center headerArea">
                                    <img src={companyLogo} alt="company"/>
                                    <p>Skype</p>
                                </div>
                                <div className="content d-flex align-items-center">
                                    <i className="fa fa-phone"></i>&nbsp;&nbsp;
                                    <div>
                                        <span className="text-dark">Phone</span> <br/>
                                        <span>+084 123 456 789</span>
                                    </div>
                                </div>
                                <div className="content d-flex align-items-center mt-3">
                                    <i className="fa fa-envelope-o"></i>&nbsp;
                                    <div>
                                        <span className="text-dark">Email</span> <br/>
                                        <span>+gaddis@apus.com</span>
                                    </div>
                                </div>
                                <div className="content d-flex align-items-center mt-3">
                                    <i className="fa fa-rss"></i>&nbsp;&nbsp;
                                    <div>
                                        <span className="text-dark">Website</span> <br/>
                                        <span>apusthemes.com</span>
                                    </div>
                                </div>
                                <div className="content d-flex align-items-center mt-3">
                                    <i className="fa fa-map-marker"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <div>
                                        <span className="text-dark">Location</span> <br/>
                                        <span>Washington D.C, United States</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card py-3 px-2 mt-4">
                            <div className="card-body candidateAlert companyInfoArea">
                                <h5>Job Location</h5>
                                {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus"
                                    width="100%" height="300" style={{border: 0, marginTop: '15px'}} allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                                <div className="content d-flex align-items-center mt-4">
                                    <i className="fa fa-compass"></i>&nbsp;&nbsp;
                                    <span>
                                        3 <span className="text-dark">Years</span> Ago
                                    </span>
                                </div>
                                <div className="content d-flex align-items-center mt-4">
                                    <i className="fa fa-eye"></i>&nbsp;&nbsp;
                                    <span>
                                        <span className="text-dark">48</span> Views
                                    </span>
                                </div>
                                <div className="content d-flex align-items-center mt-4">
                                    &nbsp;&nbsp;<i className="fa fa-mobile"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <span>
                                        <span className="text-dark">1</span> Applicant
                                    </span>
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