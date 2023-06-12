import React from 'react';
import Rating from "./Rating";

const Review = ({title}) => {
    return (
        <div className="reviewArea mb-4">
            <h4>{title}</h4>
            <small>Your Rating for this listing</small>
            <Rating/>
            <form className="mt-4">
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label className="form-label">Name</label>
                        <input type="text"
                               className="form-control"
                               placeholder="Your Name"
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Email</label>
                        <input type="email"
                               className="form-control"
                               placeholder="your@mail.com"
                        />
                    </div>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">
                        <small>
                            Save my name, email and website in this browser for the next time I comment.
                        </small>
                    </label>
                </div>
                <div className="mb-5">
                    <label className="form-label">Review</label>
                    <textarea className="form-control" rows="6" placeholder="Write Comment"></textarea>
                </div>
                <button type="submit" className="btn reviewSubmitBtn">
                    Submit Review
                </button>
            </form>
        </div>
    );
};

export default Review;