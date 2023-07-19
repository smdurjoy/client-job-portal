import React from 'react';
import {Link} from "react-router-dom";

const Category = ({categories}) => {
    const homeCategories = categories?.slice(0, 4);
    return (
        <div className="container mt-5 pt-5 categoryContainer">
            <div className="text-center">
                <span className="subTitle">JOBS LIVE TODAY</span>
                <h1 className="categoryTitle">Browse Jobs by Category</h1>
            </div>
            <div className="row mt-5 category">
                {
                    homeCategories?.map(category => (
                        <div className="col text-center">
                            <Link to={'/jobs?category_id=' + category.id}>
                                <img style={{width: '100px', height: '100px'}} src={category.category_icon} alt=""/>
                                <div className="mt-4">
                                    <h5>{category.label}</h5>
                                    {/*<small>327 Open Positions</small>*/}
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
            <div className="text-center mt-5 moreCategoryLink">
                <Link to={'/all-categories'}>
                    <small className="subTitle">Browse More Category >>></small>
                </Link>
            </div>
        </div>
    );
};

export default Category;