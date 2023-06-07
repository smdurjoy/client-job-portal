import React from 'react';
import bankingImg from '../../../images/bank.svg';
import construction from '../../../images/builder.svg';
import marketing from '../../../images/marketing.svg';
import creative from '../../../images/creative.svg';

const Category = () => {
    return (
        <div className="container mt-5 pt-5">
            <div className="text-center">
                <span className="subTitle">JOBS LIVE TODAY</span>
                <h1 className="categoryTitle">Browse Jobs by Category</h1>
            </div>
            <div className="row mt-5 pt-5 category">
                <div className="col text-center">
                    <img src={bankingImg} alt=""/>
                    <div className="mt-4">
                        <h5>Banking</h5>
                        <small>561 open positions</small>
                    </div>
                </div>
                <div className="col text-center">
                    <img src={construction} alt=""/>
                    <div className="mt-4">
                        <h5>Construction</h5>
                        <small>1258 open positions</small>
                    </div>
                </div>
                <div className="col text-center">
                    <img src={marketing} alt=""/>
                    <div className="mt-4">
                        <h5>Marketing</h5>
                        <small>466 open positions</small>
                    </div>
                </div>
                <div className="col text-center">
                    <img src={creative} alt=""/>
                    <div className="mt-4">
                        <h5>Creative</h5>
                        <small>327 open positions</small>
                    </div>
                </div>
            </div>
            <div className="text-center mt-5 pt-5">
                <small className="subTitle">Browse More Category >>></small>
            </div>
        </div>
    );
};

export default Category;