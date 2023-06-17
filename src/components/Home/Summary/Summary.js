import React from 'react';
import user from '../../../images/user.svg';
import monitor from '../../../images/monitor.svg';
import web from '../../../images/web.svg';

const Summary = () => {
    return (
        <div className="summary">
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <div className="d-flex align-items-center justify-content-center">
                            <div className='pe-1'>
                                <img src={user} alt="workers"/>
                            </div>
                            <div>
                                <h1>71000</h1>
                                <small>Active Workers</small>
                            </div>
                        </div>
                    </div>
                    <div className="col text-center">
                        <div className="d-flex align-items-center justify-content-center">
                            <div className='pe-2'>
                                <img src={monitor} alt="companies"/>
                            </div>
                            <div className="">
                                <h1>956</h1>
                                <small>Companies</small>
                            </div>
                        </div>
                    </div>
                    <div className="col text-center">
                        <div className="d-flex align-items-center justify-content-center">
                            <div className='pe-1'>
                                <img src={web} alt="countries"/>
                            </div>
                            <div>
                                <h1>96</h1>
                                <small>Countries</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summary;