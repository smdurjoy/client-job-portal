import React from 'react';
import '../../assets/css/jobDescription.css';
import '../../assets/css/companyprofile.css';
import m1 from '../../images/companies/jobs/m1.jpg';
import m2 from '../../images/companies/jobs/m2.webp';
import {Link} from "react-router-dom";
import client1 from '../../images/client1.jpeg';
import client2 from '../../images/client2.webp';
import client3 from '../../images/client3.jpg';
import Review from "../Common/Review";

const CompanyProfile = ({profile, type}) => {
    console.log({profile})
    return (
        <div className="jobDescription companyProfile">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h4>- About Company</h4>
                        <p>
                            {profile.about_company}
                        </p>
                        {/*<h4>- Basic Steps:</h4>*/}
                        {/*<p>*/}
                        {/*    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut*/}
                        {/*    labore et dolore magna aliqua.*/}
                        {/*    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea*/}
                        {/*    commodo consequat. Duis aute irure*/}
                        {/*</p>*/}
                        {/*<ol>*/}
                        {/*    <li>There are many variations of passages of Lorem Ipsum available.</li>*/}
                        {/*    <li>Many desktop publishing packages and web page editors now use</li>*/}
                        {/*    <li>Various versions have evolved over the years, sometimes by accident, sometimes on*/}
                        {/*        purpose*/}
                        {/*    </li>*/}
                        {/*</ol>*/}
                        {/*<p>*/}
                        {/*    Sed do eiusmod tempor incididunt ut*/}
                        {/*    labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit,*/}
                        {/*    seLorem ipsum dolor sit amet, consectetur adipiscing elit, se*/}
                        {/*</p>*/}
                        {/*<h4>- Office Photos</h4>*/}
                        {/*<div className="companyPhoto mb-3">*/}
                        {/*    <img src={m1} alt="image1"/>*/}
                        {/*    <img src={m2} alt="image2"/>*/}
                        {/*</div>*/}
                        {/*<h4>- Team Members</h4>*/}
                        {/*<div className="teamMembers">*/}
                        {/*    <div className="card">*/}
                        {/*        <img src={client1} className="card-img-top" alt="..."/>*/}
                        {/*        <div className="card-body">*/}
                        {/*            <h5 className="card-title">- Byron</h5>*/}
                        {/*            <span className="card-text">Florist</span><br/>*/}
                        {/*            <small>Experience: 3 years</small>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    <div className="card">*/}
                        {/*        <img src={client2} className="card-img-top" alt="..."/>*/}
                        {/*        <div className="card-body">*/}
                        {/*            <h5 className="card-title">Theodor Herzi</h5>*/}
                        {/*            <span className="card-text">Dentist</span><br/>*/}
                        {/*            <small>Experience: 4 years</small>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    <div className="card">*/}
                        {/*        <img src={client3} className="card-img-top" alt="..."/>*/}
                        {/*        <div className="card-body">*/}
                        {/*            <h5 className="card-title">Aristotle</h5>*/}
                        {/*            <span className="card-text">Veterinarian</span><br/>*/}
                        {/*            <small>Experience: 5 years</small>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<hr className="mt-5"/>*/}
                        {/*<div className="socialArea d-flex flex-wrap justify-content-between align-items-center">*/}
                        {/*    <div className="d-flex align-items-center">*/}
                        {/*        <span>- Share:</span>*/}
                        {/*        <div className="social-menu socialIcons">*/}
                        {/*            <ul>*/}
                        {/*                <li>*/}
                        {/*                    <Link to="https://www.facebook.com" target="blank" className="facebook">*/}
                        {/*                        <i className="fa fa-facebook"></i>*/}
                        {/*                    </Link>*/}
                        {/*                </li>*/}
                        {/*                <li>*/}
                        {/*                    <Link to="https://www.twitter.com" target="blank" className="twitter">*/}
                        {/*                        <i className="fa fa-twitter"></i>*/}
                        {/*                    </Link>*/}
                        {/*                </li>*/}
                        {/*                <li>*/}
                        {/*                    <Link to="https://www.linkedin.com" target="blank" className="linkedin">*/}
                        {/*                        <i className="fa fa-linkedin"></i>*/}
                        {/*                    </Link>*/}
                        {/*                </li>*/}
                        {/*                <li>*/}
                        {/*                    <Link to="https://www.pinterest.com" target="blank" className="pinterest">*/}
                        {/*                        <i className="fa fa-pinterest"></i>*/}
                        {/*                    </Link>*/}
                        {/*                </li>*/}
                        {/*            </ul>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    {*/}
                        {/*        type == '2' ? <></> : <button className="btn shortListBtn">*/}
                        {/*            <i className="fa fa-heart-o"></i> &nbsp;*/}
                        {/*            Follow Us*/}
                        {/*        </button>*/}
                        {/*    }*/}
                        {/*</div>*/}

                        {/*{*/}
                        {/*    type == '2' ? <p>&nbsp;</p> : <Review title='Be the first to review "Cadillac"'/>*/}
                        {/*}*/}

                        {/*<h4>- Open Positions</h4>*/}
                    </div>
                    <div className="col-md-4">
                        <div className="card py-3 px-2 mt-0">
                            <div className="card-body candidateAlert">
                                <h5>Company Information</h5>
                                <div className="content mt-4">
                                    <div className="d-flex justify-content-between">
                                        <div className="title">
                                            <span>Categories</span>
                                        </div>
                                        <div className="des">
                                            <span>{profile.industry}</span>
                                        </div>
                                    </div>
                                    <hr/>
                                </div>
                                {/*<div className="content">*/}
                                {/*    <div className="d-flex justify-content-between">*/}
                                {/*        <div className="title">*/}
                                {/*            <span>Since</span>*/}
                                {/*        </div>*/}
                                {/*        <div className="des">*/}
                                {/*            <span>1998</span>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*    <hr/>*/}
                                {/*</div>*/}
                                {/*<div className="content">*/}
                                {/*    <div className="d-flex justify-content-between">*/}
                                {/*        <div className="title">*/}
                                {/*            <span>Views</span>*/}
                                {/*        </div>*/}
                                {/*        <div className="des">*/}
                                {/*            <span>28</span>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*    <hr/>*/}
                                {/*</div>*/}
                                {/*<div className="content">*/}
                                {/*    <div className="d-flex justify-content-between">*/}
                                {/*        <div className="title">*/}
                                {/*            <span>Posted Jobs</span>*/}
                                {/*        </div>*/}
                                {/*        <div className="des">*/}
                                {/*            <span>2</span>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*    <hr/>*/}
                                {/*</div>*/}
                                <div className="content">
                                    <div className="d-flex justify-content-between">
                                        <div className="title">
                                            <span>Location</span>
                                        </div>
                                        <div className="des">
                                            <span>{profile.city}, {profile.state}</span>
                                        </div>
                                    </div>
                                    <hr/>
                                </div>
                                <div className="content">
                                    <div className="d-flex justify-content-between">
                                        <div className="title">
                                            <span>Team Size</span>
                                        </div>
                                        <div className="des">
                                            <span>{profile.company_size} Members</span>
                                        </div>
                                    </div>
                                    <hr/>
                                </div>

                                <div className="apply">
                                    {
                                        type == '2' ? <></> : <button className="applyBtn">Contact Us</button>
                                    }
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
                                            {profile.company_contact_number}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-dark">
                                            Email:
                                        </td>
                                        <td>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            {profile.contact_person_email}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-dark">
                                            Website:
                                        </td>
                                        <td>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            {profile.company_website}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-dark">
                                            Location:
                                        </td>
                                        <td>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            {profile.city}, {profile.state}
                                        </td>
                                    </tr>
                                    {/*<tr>*/}
                                    {/*    <td className="text-dark">*/}
                                    {/*        Socials:*/}
                                    {/*    </td>*/}
                                    {/*    <td>*/}
                                    {/*        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/}
                                    {/*        <Link to="#">*/}
                                    {/*            <i className="fa fa-facebook"></i>*/}
                                    {/*        </Link>&nbsp;*/}
                                    {/*        <Link to="#">*/}
                                    {/*            <i className="fa fa-twitter"></i>*/}
                                    {/*        </Link>&nbsp;*/}
                                    {/*        <Link to="#">*/}
                                    {/*            <i className="fa fa-linkedin"></i>*/}
                                    {/*        </Link>&nbsp;*/}
                                    {/*    </td>*/}
                                    {/*</tr>*/}
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

export default CompanyProfile;