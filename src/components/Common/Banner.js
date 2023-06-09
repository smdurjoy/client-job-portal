import React from 'react';

const Banner = () => {
    return (
        <main className="pattern">
            <section className="banner version_2">
                <div className="wrapper">
                    <div className="container">
                        <h3 className="bannerTitle">9000+ BROWSE JOBS</h3>
                        <div className="row custom-search-input-2 mt-5">
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <input className="form-control" type="text"
                                           placeholder="Job Title or Keywords"/>
                                    <i className="icon_search"></i>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="form-group">
                                    <input className="form-control" type="text" placeholder="All Location"/>
                                    <i className="icon_pin_alt"></i>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <select name="category_id" className="form-select categorySelect">
                                    <option value="">All Category</option>
                                </select>
                            </div>
                            <div className="col-lg-2">
                                <input className="findJobBtn" type="submit" value="Find Jobs"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Banner;