import React, {useEffect} from 'react';

const Banner = () => {

    useEffect(() => {

    }, [])

    return (
        <main className="pattern">
            <section className="hero_single version_2">
                <div className="wrapper">
                    <div className="container">
                        <h3>9000+ BROWSE JOBS</h3>
                        <div className="row no-gutters custom-search-input-2">
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
                                <select className="wide">
                                    <option>All Categories</option>
                                    <option>Shops</option>
                                    <option>Hotels</option>
                                    <option>Restaurants</option>
                                    <option>Bars</option>
                                    <option>Events</option>
                                    <option>Fitness</option>
                                </select>
                            </div>
                            <div className="col-lg-2">
                                <input type="submit" value="Search"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Banner;