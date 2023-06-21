import React from 'react';
import ReactSelect from "../Wrapper/ReactSelect";
import '../../assets/css/employers.css';
import company1 from '../../images/companies/company1.jpg';
import Pagination from "../Common/Pagination";
import Checkbox from "../Wrapper/Checkbox";
import InputRange from "../Wrapper/InputRange";
import {Link} from "react-router-dom";
import Loader from "../Loader/Loader";

const Candidates = ({companies, loader}) => {
    const filterOptions = [
        {
            value: 'Newest',
            label: 'Newest'
        },
    ]
    const paginationOptions = [
        {
            value: '8',
            label: '8 Per Page'
        },
    ]
    return (
        <div className="candidates employers">
            {
                loader ? <Loader/> : (
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="row">
                                    <div className="col-md-6">
                                        <p className="mt-2 text-dark">
                                            Showing 1 - 8 of 13 results
                                        </p>
                                    </div>
                                    <div className="col-md-6 select">
                                        <ReactSelect options={filterOptions} placeholder="Newest"/>
                                        <ReactSelect options={paginationOptions} placeholder="8 Per Page"/>
                                    </div>
                                    {
                                        companies.map((company, index) => (
                                            <div className="col-md-6 mt-2" key={index}>
                                                <div className="card text-center">
                                                    <div className="card-body pb-5">
                                                        <div className="featuredTags">
                                                            <h1>Featured</h1>
                                                        </div>
                                                        <div className="wishList">
                                                            <button className="btn pull-right">
                                                                <i className="fa fa-heart-o"></i>
                                                            </button>
                                                        </div>
                                                        <img src={company.company_logo} alt="company"/>
                                                        <h5 className="card-title">
                                                            <Link to={"/company/"+company.id}>
                                                                {company.company_name}
                                                            </Link>
                                                        </h5>
                                                        <span className="card-text">{company.industry}</span><br/>
                                                        <span className="card-text">Jobs Open: 0</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }

                                    <Pagination/>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="row candidateFilterRow">
                                    <div className="col-12 filterArea">
                                        <div className="accordion" id="accordionPanelsStayOpenExample">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                            data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                                                            aria-controls="panelsStayOpen-collapseOne">
                                                        Search Employer
                                                    </button>
                                                </h2>
                                                <div id="panelsStayOpen-collapseOne"
                                                     className="accordion-collapse collapse show"
                                                     aria-labelledby="panelsStayOpen-headingOne">
                                                    <div className="accordion-body">
                                                        <input type="text" className="form-control"
                                                               placeholder="e.g. web design"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                                    <button className="accordion-button" type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                                                            aria-controls="panelsStayOpen-collapseTwo">
                                                        Employer Category
                                                    </button>
                                                </h2>
                                                <div id="panelsStayOpen-collapseTwo"
                                                     className="accordion-collapse collapse show"
                                                     aria-labelledby="panelsStayOpen-headingTwo">
                                                    <div className="accordion-body">
                                                        <Checkbox id="accountingFinance" title="Accounting / Finance (4)"/>
                                                        <Checkbox id="automotiveJobs" title="Automotive Jobs (3)"/>
                                                        <Checkbox id="educationTraining" title="Education Training (5)"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                                    <button className="accordion-button" type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                                                            aria-controls="panelsStayOpen-collapseThree">
                                                        Employer Location
                                                    </button>
                                                </h2>
                                                <div id="panelsStayOpen-collapseThree"
                                                     className="accordion-collapse collapse show"
                                                     aria-labelledby="panelsStayOpen-headingThree">
                                                    <div className="accordion-body">
                                                        <input type="text" className="form-control" placeholder="All Location"/>
                                                        <InputRange/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                                                    <button className="accordion-button" type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false"
                                                            aria-controls="panelsStayOpen-collapseFour">
                                                        Employer Location List
                                                    </button>
                                                </h2>
                                                <div id="panelsStayOpen-collapseFour"
                                                     className="accordion-collapse collapse show"
                                                     aria-labelledby="panelsStayOpen-headingFour">
                                                    <div className="accordion-body">
                                                        <Checkbox id="berlin" title="Berlin (2)"/>
                                                        <Checkbox id="canberra" title="Canberra (3)"/>
                                                        <Checkbox id="paris" title="Paris (3)"/>
                                                        <Checkbox id="washington" title="Washington (2)"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="panelsStayOpen-headingFive">
                                                    <button className="accordion-button" type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false"
                                                            aria-controls="panelsStayOpen-collapseFive">
                                                        Founded Date
                                                    </button>
                                                </h2>
                                                <div id="panelsStayOpen-collapseFive"
                                                     className="accordion-collapse collapse show"
                                                     aria-labelledby="panelsStayOpen-headingFive">
                                                    <div className="accordion-body">
                                                        <InputRange/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="panelsStayOpen-headingSix">
                                                    <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false"
                                                            aria-controls="panelsStayOpen-collapseSix">
                                                        Team Size
                                                    </button>
                                                </h2>
                                                <div id="panelsStayOpen-collapseSix"
                                                     className="accordion-collapse collapse"
                                                     aria-labelledby="panelsStayOpen-headingSix">
                                                    <div className="accordion-body">

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Candidates;