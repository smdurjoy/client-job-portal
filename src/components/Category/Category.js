import React from 'react';
import bankingImg from '../../images/banking.svg';

const Category = () => {
    return (
        <div className="container mt-5 pt-5">
            <div className="text-center">
                <span>JOBS LIVE TODAY</span>
                <h1>Browse Jobs by Category</h1>
            </div>
            <div className="row mt-5 pt-5">
                <div className="col text-center">
                    <img src={bankingImg} alt=""/>
                    <div className="mt-4">
                        <h5>Banking</h5>
                        <small>561 open positions</small>
                    </div>
                </div>
                <div className="col text-center">
                    <img src={bankingImg} alt=""/>
                    <p>Banking</p>
                    <small>561 open positions</small>
                </div>
                <div className="col text-center">
                    <img src={bankingImg} alt=""/>
                    <p>Banking</p>
                    <small>561 open positions</small>
                </div>
                <div className="col text-center">
                    <img src={bankingImg} alt=""/>
                    <p>Banking</p>
                    <small>561 open positions</small>
                </div>
            </div>
            <div className="text-center mt-5">
                <small>Browse More Category >>></small>
            </div>
        </div>
    );
};

export default Category;