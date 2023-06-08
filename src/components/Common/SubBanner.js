import React from 'react';
import image from '../../images/meeting.jpg'

const SubBanner = () => {
    return (
        <div className="subBanner" style={{ backgroundImage:`url(${image})` }}>
            <div className="container">
                <div className="subBannerContent">
                    <p>Home > Job List - V1</p>
                    <h1>Job List - V1</h1>
                </div>
            </div>
        </div>
    );
};

export default SubBanner;