import React from 'react';
import image from '../../images/meeting.jpg'

const SubBanner = ({title}) => {
    return (
        <div className="subBanner" style={{ backgroundImage:`url(${image})` }}>
            <div className="container">
                <div className="subBannerContent">
                    <p>Home > {title}</p>
                    <h1>{title}</h1>
                </div>
            </div>
        </div>
    );
};

export default SubBanner;