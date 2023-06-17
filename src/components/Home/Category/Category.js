import React from 'react';
import foremanImg from '../../../assets/images/foreman.png';
import constructionImg from '../../../assets/images/construction.png';
import electricalImg from '../../../assets/images/eco-house.png';
import plumbingImg from '../../../assets/images/plumbing.png';

const Category = () => {
    return (
        <div className="container mt-5 pt-5 categoryContainer">
            <div className="text-center">
                <span className="subTitle">JOBS LIVE TODAY</span>
                <h1 className="categoryTitle">Browse Jobs by Category</h1>
            </div>
            <div className="row mt-5 category">
                <div className="col text-center">
                    <img style={{width: '100px', height: '100px'}} src={plumbingImg} alt=""/>
                    <div className="mt-4">
                        <h5>Plumbing</h5>
                        <small>327 Open Positions</small>
                    </div>
                </div>
                <div className="col text-center">
                    <img style={{width: '100px', height: '100px'}} src={foremanImg} alt=""/>
                    <div className="mt-4">
                        <h5>Foreman</h5>
                        <small>561 Open Positions</small>
                    </div>
                </div>
                <div className="col text-center">
                    <img style={{width: '100px', height: '100px'}} src={constructionImg} alt=""/>
                    <div className="mt-4">
                        <h5>Crane Operator</h5>
                        <small>1258 Open Positions</small>
                    </div>
                </div>
                <div className="col text-center">
                    <img style={{width: '100px', height: '100px'}} src={electricalImg} alt=""/>
                    <div className="mt-4">
                        <h5>Electrical</h5>
                        <small>466 Open Positions</small>
                    </div>
                </div>
            </div>
            <div className="text-center mt-5 moreCategoryLink">
                <small className="subTitle">Browse More Category >>></small>
            </div>
        </div>
    );
};

export default Category;