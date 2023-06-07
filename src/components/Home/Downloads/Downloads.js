import React from 'react';

const Downloads = () => {
    return (
        <div className="downloads">
            <div className="text-center">
                <h2 className="downloadsTitle">Download Our Best Apps</h2>
                <div className="downloadText">
                    <span>Lorem Ipsum is simply dummy text of the printing and</span> <br/>
                    <span>typesetting industry. Lorem Ipsum has been the industry's</span> <br/>
                    <span>standard dummy text ever since the 1500s</span>
                </div>
                <div className="mt-3">
                    <button className="btn">
                        App Store
                    </button>
                    <button className="btn">
                        Google Play
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Downloads;