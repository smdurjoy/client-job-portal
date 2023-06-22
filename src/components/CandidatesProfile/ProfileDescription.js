import React from 'react';
import '../../assets/css/jobDescription.css';
import m1 from '../../images/companies/jobs/m1.jpg';
import m2 from '../../images/companies/jobs/m2.webp';
import m3 from '../../images/companies/jobs/m3.jpg';
import {Link} from "react-router-dom";
import Review from "../Common/Review";
import TimeLine from "../Common/TimeLine";
import ProgressBar from "../Common/ProgressBar";
import EducationTimeLine from "./EducationTimeLine";

const ProfileDescription = ({profile}) => {
    const experience = [
        {
            title: 'Development Manager',
            subtitle: 'Clothing Store',
            description: 'Quisque ornare dui nibh, sagittis egestas nisi luctus nec. Sed\n' +
                '        aliquet laoreet sapien, eget pulvinar lectus maximus vel.\n' +
                '        Phasellus suscipit porta mattis.',
            start_date: '2013',
            end_date: '2015'
        },
        {
            title: 'Store Manager',
            subtitle: 'Fashion Store',
            description: 'Quisque ornare dui nibh, sagittis egestas nisi luctus nec. Sed\n' +
                '        aliquet laoreet sapien, eget pulvinar lectus maximus vel.\n' +
                '        Phasellus suscipit porta mattis.',
            start_date: '2008',
            end_date: '2012'
        },
    ];
    const awards = [
        {
            title: 'Distinguished Servicw Awards',
            description: 'Quisque ornare dui nibh, sagittis egestas nisi luctus nec. Sed\n' +
                '        aliquet laoreet sapien, eget pulvinar lectus maximus vel.\n' +
                '        Phasellus suscipit porta mattis.',
            start_date: '2013'
        },
        {
            title: 'Doctoral Dissertation Award',
            description: 'Quisque ornare dui nibh, sagittis egestas nisi luctus nec. Sed\n' +
                '        aliquet laoreet sapien, eget pulvinar lectus maximus vel.\n' +
                '        Phasellus suscipit porta mattis.',
            start_date: '2008'
        },
    ];
    return (
        <div className="jobDescription profileDescription">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h4>- About Me</h4>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy
                            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                            make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting.
                        </p>
                        <h4>- Basic Steps</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda, dolor doloribus
                            explicabo fugiat id libero,
                            magnam optio praesentium repellat rerum voluptates. Amet doloribus facilis magnam maxime
                            nisi, omnis quis.
                        </p>
                        <ol>
                            <li>There are many variations of passages of Lorem Ipsum available.</li>
                            <li>Many desktop publishing packages and web page editors now use</li>
                            <li>If you are going to use a passage of Lorem Ipsum</li>
                        </ol>

                        <h4>- Education</h4>
                        <EducationTimeLine educations={profile.educations}/>

                        <h4>- Work & Experience</h4>
                        <TimeLine items={experience}/>

                        <h4>- Portfolio</h4>
                        <div className="companyPhoto mb-5">
                            <img src={m1} alt="image1"/>
                            <img src={m2} alt="image2"/>
                            <img src={m3} alt="image3"/>
                        </div>

                        <h4>- Skills</h4>
                        <ProgressBar skills={profile.skill_set}/>

                        <h4>- Awards</h4>
                        <TimeLine items={awards}/>

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
                            <button className="btn shortListBtn">
                                <i className="fa fa-heart-o"></i> &nbsp;
                                Shortlist
                            </button>
                        </div>

                        <div className="mt-4">
                            <Review title="Add a review"/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card py-3 px-2 mt-0">
                            <div className="card-body candidateAlert">
                                <h5>Jobs Overview</h5>
                                <div className="content mt-4">
                                    <div className="d-flex justify-content-between">
                                        <div className="title">
                                            <span>Job Type:</span>
                                        </div>
                                        <div className="des">
                                            <span>Fulltime</span>
                                        </div>
                                    </div>
                                    <hr/>
                                </div>
                                <div className="content mt-4">
                                    <div className="d-flex justify-content-between">
                                        <div className="title">
                                            <span>Category:</span>
                                        </div>
                                        <div className="des">
                                            <span>Accounting / Finance</span>
                                        </div>
                                    </div>
                                    <hr/>
                                </div>
                                <div className="content mt-4">
                                    <div className="d-flex justify-content-between">
                                        <div className="title">
                                            <span>Location:</span>
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
                                            <span>Offered Salary:</span>
                                        </div>
                                        <div className="des">
                                            <span>$1765 / month</span>
                                        </div>
                                    </div>
                                    <hr/>
                                </div>
                                <div className="content">
                                    <div className="d-flex justify-content-between">
                                        <div className="title">
                                            <span>Experience:</span>
                                        </div>
                                        <div className="des">
                                            <span>5 Years</span>
                                        </div>
                                    </div>
                                    <hr/>
                                </div>
                                <div className="content">
                                    <div className="d-flex justify-content-between">
                                        <div className="title">
                                            <span>Languages:</span>
                                        </div>
                                        <div className="des">
                                            <span>English, Turkish, Japanese</span>
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
                                            <span>Age</span>
                                        </div>
                                        <div className="des">
                                            <span>30</span>
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
                                            <span>Certificate, Associate Degree</span>
                                        </div>
                                    </div>
                                    <hr/>
                                </div>
                                <div className="content">
                                    <div className="d-flex justify-content-between">
                                        <div className="title">
                                            <span>Views</span>
                                        </div>
                                        <div className="des">
                                            <span>777</span>
                                        </div>
                                    </div>
                                    <hr/>
                                </div>

                                <div className="apply">
                                    <button className="applyBtn">Contact Me</button>
                                    <Link to="/shortlisted-jobs">
                                        <button className="shortlistBtn">
                                            Shortlist
                                        </button>
                                    </Link>
                                    <button className="shortlistBtn">Download CV</button>
                                </div>
                            </div>
                        </div>
                        <div className="card py-3 px-2 mt-4">
                            <div className="card-body candidateAlert companyInfoArea">
                                {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus"
                                    width="100%" height="300" style={{border: 0, marginTop: '15px'}} allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                                <h5 className="mt-4">Contact Information</h5>
                                <table className="table-borderless mt-3">
                                    <tbody>
                                    <tr>
                                        <td className="text-dark">
                                            Phone:
                                        </td>
                                        <td>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            {profile.phone_number}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-dark">
                                            Email:
                                        </td>
                                        <td>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            {profile.email}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-dark">
                                            Website:
                                        </td>
                                        <td>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            apusthemes.com
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-dark">
                                            Location:
                                        </td>
                                        <td>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            {profile.city_name}, {profile.state_name}, {profile.country_name}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-dark">
                                            Socials:
                                        </td>
                                        <td>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <Link to="#">
                                                <i className="fa fa-facebook"></i>
                                            </Link>&nbsp;
                                            <Link to="#">
                                                <i className="fa fa-twitter"></i>
                                            </Link>&nbsp;
                                            <Link to="#">
                                                <i className="fa fa-linkedin"></i>
                                            </Link>&nbsp;
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileDescription;