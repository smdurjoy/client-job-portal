import React from 'react';
import {Link} from "react-router-dom";
import "../../assets/css/homePage.css";

const AllCategoryList = ({categories}) => {
    return (
        <div className="container categoryContainer">
            <div className="row mt-5 category">
                {
                    categories?.map(category => (
                        <div className="col-md-2 mb-5 text-center">
                            <Link to={'/jobs?category_id=' + category.id}>
                                <img style={{width: '100px', height: '100px'}} src={category.category_icon} alt=""/>
                                <div className="mt-4">
                                    <h5>{category.label}</h5>
                                    <small>327 Open Positions</small>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default AllCategoryList;