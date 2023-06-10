import React from 'react';
import ReactSelect from "../Common/ReactSelect";
import client1 from '../../images/client1.jpeg'
import client2 from '../../images/client2.webp'
import client3 from '../../images/client3.jpg'
import client4 from '../../images/client4.png'
import client5 from '../../images/client5.jpeg'
import noImage from '../../images/noImage.png'
import Rating from "../Common/Rating";
import Pagination from "../Common/Pagination";
import Checkbox from "../Wrapper/Checkbox";
import InputRange from "../Wrapper/InputRange";
import RadioButton from "../Wrapper/RadioButton";

const Candidates = () => {
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
    const emailOptions = [
        {
            value: '1',
            label: 'Daily'
        },
        {
            value: '2',
            label: 'Weekly'
        },
        {
            value: '3',
            label: 'Monthly'
        },
    ]
    return (
        <div className="candidates">
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
                            <div className="col-md-6 mt-2">
                                <div className="card text-center">
                                    <div className="card-body p-0">
                                        <div className="tags">
                                            <h1>Urgent</h1>
                                        </div>
                                        <div className="wishList">
                                            <button className="btn pull-right">
                                                <i className="fa fa-heart-o"></i>
                                            </button>
                                        </div>
                                        <img src={client1} alt="company"/>
                                        <h5 className="card-title">Charles Dickens</h5>
                                        <span className="card-text">User Experience Design Essentials</span>
                                        <Rating/>
                                        <div className="skills mt-3">
                                            <span>Bootstrap</span>
                                            <span>Javascript</span>
                                        </div>
                                        <div className="mt-4 mb-4 subTitle">
                                            View Profile >>>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mt-2">
                                <div className="card text-center">
                                    <div className="card-body p-0">
                                        <div className="featuredTags">
                                            <h1>Featured</h1>
                                        </div>
                                        <div className="wishList">
                                            <button className="btn pull-right">
                                                <i className="fa fa-heart-o"></i>
                                            </button>
                                        </div>
                                        <img src={client3} alt="company"/>
                                        <h5 className="card-title">John Locke</h5>
                                        <span className="card-text">iOS Expert + Node Dev</span>
                                        <Rating/>
                                        <div className="skills mt-3">
                                            <span>Android</span>
                                            <span>CSS</span>
                                        </div>
                                        <div className="mt-4 mb-4 subTitle">
                                            View Profile >>>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mt-2">
                                <div className="card text-center">
                                    <div className="card-body p-0">
                                        <div className="featuredTags">
                                            <h1>Featured</h1>
                                        </div>
                                        <div className="wishList">
                                            <button className="btn pull-right">
                                                <i className="fa fa-heart-o"></i>
                                            </button>
                                        </div>
                                        <img src={client2} alt="company"/>
                                        <h5 className="card-title">Leo Tolstoy</h5>
                                        <span className="card-text">User Experience Design Essentials</span>
                                        <Rating/>
                                        <div className="skills mt-3">
                                            <span>Bootstrap</span>
                                            <span>Javascript</span>
                                        </div>
                                        <div className="mt-4 mb-4 subTitle">
                                            View Profile >>>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mt-2">
                                <div className="card text-center">
                                    <div className="card-body p-0">
                                        <div className="featuredTags">
                                            <h1>Featured</h1>
                                        </div>
                                        <div className="wishList">
                                            <button className="btn pull-right">
                                                <i className="fa fa-heart-o"></i>
                                            </button>
                                        </div>
                                        <img src={client4} alt="company"/>
                                        <h5 className="card-title">Meg Cabot</h5>
                                        <span className="card-text">User Experience Design Essentials</span>
                                        <Rating/>
                                        <div className="skills mt-3">
                                            <span>CSS</span>
                                            <span>HTML5</span>
                                            <span>Javascript</span>
                                        </div>
                                        <div className="mt-4 mb-4 subTitle">
                                            View Profile >>>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mt-2">
                                <div className="card text-center">
                                    <div className="card-body p-0">
                                        <div className="featuredTags">
                                            <h1>Featured</h1>
                                        </div>
                                        <div className="wishList">
                                            <button className="btn pull-right">
                                                <i className="fa fa-heart-o"></i>
                                            </button>
                                        </div>
                                        <img src={client5} alt="company"/>
                                        <h5 className="card-title">Tarek Fatah</h5>
                                        <span className="card-text">Build 6 Creative Projects</span>
                                        <Rating/>
                                        <div className="skills mt-3">
                                            <span>CSS</span>
                                            <span>HTML5</span>
                                            <span>Javascript</span>
                                        </div>
                                        <div className="mt-4 mb-4 subTitle">
                                            View Profile >>>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mt-2">
                                <div className="card text-center">
                                    <div className="card-body p-0">
                                        <div className="wishList">
                                            <button className="btn pull-right">
                                                <i className="fa fa-heart-o"></i>
                                            </button>
                                        </div>
                                        <img src={noImage} alt="noImage"/>
                                        <h5 className="card-title">Vk.Infoit@Gmail.Com</h5>
                                        <div className="mt-4 mb-4 subTitle">
                                            View Profile >>>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Pagination/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="row candidateFilterRow">
                            <div className="col-12">
                                <div className="card py-3 px-2 mt-0">
                                    <div className="card-body candidateAlert">
                                        <span>Candidate Alert</span>
                                        <form>
                                            <div className="mb-3">
                                                <label htmlFor="title" className="form-label">Title</label>
                                                <input type="text" className="form-control" id="title"/>
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Email Frequency</label>
                                                <ReactSelect options={emailOptions} placeholder="Daily"/>
                                            </div>
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 filterArea mt-4">
                                <div className="accordion" id="accordionPanelsStayOpenExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                                                    aria-controls="panelsStayOpen-collapseOne">
                                                Search Keywords
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
                                                Candidate Category
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseTwo"
                                             className="accordion-collapse collapse show"
                                             aria-labelledby="panelsStayOpen-headingTwo">
                                            <div className="accordion-body">
                                                <Checkbox id="accountingFinance" title="Accounting / Finance (3)"/>
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
                                                Location
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
                                                Location List
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseFour"
                                             className="accordion-collapse collapse show"
                                             aria-labelledby="panelsStayOpen-headingFour">
                                            <div className="accordion-body">
                                                <Checkbox id="brazil" title="Brazil (1)"/>
                                                <Checkbox id="france" title="France (8)"/>
                                                <Checkbox id="germany" title="Germany (1)"/>
                                                <Checkbox id="italia" title="Italia (1)"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="panelsStayOpen-headingFive">
                                            <button className="accordion-button" type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false"
                                                    aria-controls="panelsStayOpen-collapseFive">
                                                Date Posted
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseFive"
                                             className="accordion-collapse collapse show"
                                             aria-labelledby="panelsStayOpen-headingFive">
                                            <div className="accordion-body">
                                                <RadioButton id="LastHour" title="Last Hour" name="datePosted"
                                                             onChange={e => {
                                                             }}/>
                                                <RadioButton id="Last24Hour" title="Last 24 Hour" name="datePosted"
                                                             onChange={e => {
                                                             }}/>
                                                <RadioButton id="Last7Days" title="Last 7 Days" name="datePosted"
                                                             onChange={e => {
                                                             }}/>
                                                <RadioButton id="Last14Days" title="Last 14 Days" name="datePosted"
                                                             onChange={e => {
                                                             }}/>
                                                <RadioButton id="Last30Days" title="Last 30 Days" name="datePosted"
                                                             onChange={e => {
                                                             }}/>
                                                <RadioButton id="all" title="All" name="datePosted" onChange={e => {
                                                }}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="panelsStayOpen-headingSix">
                                            <button className="accordion-button" type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false"
                                                    aria-controls="panelsStayOpen-collapseSix">
                                                Salary
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseSix"
                                             className="accordion-collapse collapse show"
                                             aria-labelledby="panelsStayOpen-headingSix">
                                            <div className="accordion-body">
                                                <RadioButton id="monthly" title="Monthly" name="salary" onChange={e => {
                                                }}/>
                                                <RadioButton id="weekly" title="Weekly" name="salary" onChange={e => {
                                                }}/>
                                                <RadioButton id="daily" title="Daily" name="salary" onChange={e => {
                                                }}/>
                                                <RadioButton id="hourly" title="Hourly" name="salary" onChange={e => {
                                                }}/>
                                                <RadioButton id="yearly" title="Yearly" name="salary" onChange={e => {
                                                }}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="panelsStayOpen-headingSeven">
                                            <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#panelsStayOpen-collapseSeven" aria-expanded="false"
                                                    aria-controls="panelsStayOpen-collapseSeven">
                                                Experience
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseSeven"
                                             className="accordion-collapse collapse"
                                             aria-labelledby="panelsStayOpen-headingSeven">
                                            <div className="accordion-body">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="panelsStayOpen-headingEight">
                                            <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#panelsStayOpen-collapseEight" aria-expanded="false"
                                                    aria-controls="panelsStayOpen-collapseEight">
                                                Age
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseEight"
                                             className="accordion-collapse collapse"
                                             aria-labelledby="panelsStayOpen-headingEight">
                                            <div className="accordion-body">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="panelsStayOpen-headingNine">
                                            <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#panelsStayOpen-collapseNine" aria-expanded="false"
                                                    aria-controls="panelsStayOpen-collapseNine">
                                                Gender
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseNine"
                                             className="accordion-collapse collapse"
                                             aria-labelledby="panelsStayOpen-headingNine">
                                            <div className="accordion-body">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="panelsStayOpen-headingTen">
                                            <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#panelsStayOpen-collapseTen" aria-expanded="false"
                                                    aria-controls="panelsStayOpen-collapseTen">
                                                Language
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseTen"
                                             className="accordion-collapse collapse"
                                             aria-labelledby="panelsStayOpen-headingTen">
                                            <div className="accordion-body">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="panelsStayOpen-headingEleven">
                                            <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#panelsStayOpen-collapseEleven"
                                                    aria-expanded="false"
                                                    aria-controls="panelsStayOpen-collapseEleven">
                                                Qualification
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseEleven"
                                             className="accordion-collapse collapse"
                                             aria-labelledby="panelsStayOpen-headingEleven">
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
        </div>
    );
};

export default Candidates;