import React, {useState} from 'react';
import ReactSelect from "../Wrapper/ReactSelect";
import SearchIcon from '../../assets/images/search.svg';
import GeoIcon from '../../assets/images/geo-alt.svg';
import CategoryIcon from '../../assets/images/grid.svg';
import {useNavigate} from "react-router-dom";

const Banner = ({countries, categories}) => {
    const [categoryId, setCategoryId] = useState('all');
    const [countryId, setCountryId] = useState('all');
    const [keyword, setKeyword] = useState('');
    const navigate = useNavigate();

    const handleJobFind = () => {
        const url = `/jobs?category_id=${categoryId}&country_id=${countryId}&keyword=${keyword}`;
        navigate(url);
    }

    return (
        <main className="pattern">
            <section className="banner version_2">
                <div className="wrapper">
                    <div className="container">
                        <h3 className="bannerTitle">9000+ BROWSE JOBS</h3>
                        <div className="row custom-search-input-2 mt-5 align-items-center">
                            <div className="col-lg-4">
                                {/* <img width={10} color='#000000' src={SearchIcon} alt='search' />
                                <div className="form-group">
                                    <input className="form-control"
                                           type="text"
                                           placeholder="Job Title or Keywords"
                                    />
                                </div> */}
                                <div className="input-group form-group">
                                    <span className="input-group-text bg-white border-0" id="basic-addon1">
                                        <img width={15} src={SearchIcon} alt='search'/>
                                    </span>
                                    <input type="text" className="form-control border-0"
                                           onChange={(e) => setKeyword(e.target.value)}
                                           placeholder="Job Title or Keywords"/>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                {/* <div className="form-group">
                                    <ReactSelect options={options}
                                                 placeholder="&#xf041; &nbsp; All Location"
                                    />
                                </div> */}
                                <div className="input-group form-group">
                                    <span className="input-group-text bg-white border-0" id="basic-addon1">
                                        <img width={15} src={GeoIcon} alt='GeoIcon'/>
                                    </span>
                                    <ReactSelect options={countries}
                                                 placeholder="All Location"
                                                 onChange={(e) => setCountryId(e.id)}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="input-group">
                                    <span className="input-group-text bg-white border-0" id="basic-addon1">
                                        <img width={15} src={CategoryIcon} alt='search'/>
                                    </span>
                                    <ReactSelect options={categories}
                                                 placeholder="All Category"
                                                 onChange={(e) => setCategoryId(e.id)}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-2 pe-lg-0">
                                <input className="findJobBtn"
                                       type="submit" value="Find Jobs"
                                       onClick={handleJobFind}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Banner;