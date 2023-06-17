import React from 'react';

const Marketing = () => {
    return (
        <div className="d-flex">
            <div className="marketing1">
                <div class="row pe-3">
                    <div class="col-md-6"></div>
                    <div className="col-md-6 text-end">
                        <h4 className="text-white">Make a Difference with your Online Resume!</h4>
                        <p className="fw-lighter text-white">In the CSS code, we set the width and height of the div to your desired dimensions. The property is set to a linear gradient that transitions from green to red. The</p>
                        <button>Create Account</button>
                    </div>
                </div>
            </div>
            <div className="marketing2">
                <div class="row ps-3">
                    <div className="col-md-6 text-start">
                        <h4 className="text-white">Make the Most of Growth Opportunities</h4>
                        <p className="fw-lighter text-white">In the CSS code, we set the width and height of the div to your desired dimensions. The property is set to a linear gradient that transitions from green to red. The</p>
                        <button>Create Account</button>
                    </div>
                    <div class="col-md-6"></div>
                </div>
            </div>
        </div>
    );
};

export default Marketing;