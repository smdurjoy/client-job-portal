import React from 'react';
import '../../assets/css/profile.css';
import ReactSelect from "../Wrapper/ReactSelect";
import {Link} from "react-router-dom";

const Form = () => {
    return (
        <div className="profileForm">
            <div className="container">
                <h4>Update Profile</h4>
                <form className="mt-4">
                    <div className="row mb-3">
                        <div className="col-md-6 my-2 form-group">
                            <label className="form-label">First Name</label>
                            <input type="text"
                                   className="form-control"
                                   placeholder="Write"
                            />
                        </div>
                        <div className="col-md-6 my-2 form-group">
                            <label className="form-label">Middle Name</label>
                            <input type="text"
                                   className="form-control"
                                   placeholder="Write"
                            />
                        </div>
                        <div className="col-md-6 my-2 form-group">
                            <label className="form-label">Last Name</label>
                            <input type="text"
                                   className="form-control"
                                   placeholder="Write"
                            />
                        </div>
                        <div className="col-md-6 my-2 form-group">
                            <label className="form-label">Email</label>
                            <input type="email"
                                   className="form-control"
                                   placeholder="Write"
                            />
                        </div>
                        <div className="col-md-6 my-2 form-group">
                            <label className="form-label">Phone Number</label>
                            <input type="number"
                                   className="form-control"
                                   placeholder="Write"
                            />
                        </div>
                        <div className="col-md-6 my-2 form-group">
                            <label className="form-label">Date Of Birth</label>
                            <input type="date"
                                   className="form-control"
                            />
                        </div>
                        <div className="col-md-12 my-2 form-group">
                            <label className="form-label">Cover Letter</label>
                            <textarea className="form-control" rows="6" placeholder="Write"></textarea>
                        </div>
                        <div className="col-md-6 my-2 form-group">
                            <label className="form-label">Country</label>
                            <input type="text"
                                   className="form-control"
                                   placeholder="Write"
                            />
                        </div>
                        <div className="col-md-6 my-2 form-group">
                            <label className="form-label">State</label>
                            <input type="text"
                                   className="form-control"
                                   placeholder="Write"
                            />
                        </div>
                        <div className="col-md-6 my-2 form-group">
                            <label className="form-label">City</label>
                            <input type="text"
                                   className="form-control"
                                   placeholder="Write"
                            />
                        </div>
                        <div className="col-md-6 my-2 form-group">
                            <label className="form-label">Area</label>
                            <input type="text"
                                   className="form-control"
                                   placeholder="Write"
                            />
                        </div>
                        <div className="col-md-6 my-2 form-group">
                            <label className="form-label">Address Line 1</label>
                            <input type="text"
                                   className="form-control"
                                   placeholder="Write"
                            />
                        </div>
                        <div className="col-md-6 my-2 form-group">
                            <label className="form-label">Address Line 2</label>
                            <input type="text"
                                   className="form-control"
                                   placeholder="Write"
                            />
                        </div>
                        <div className="col-md-6 my-2 form-group">
                            <label className="form-label">Gender</label>
                            <ReactSelect
                                options={[
                                    {
                                        id: 1,
                                        label: 'Male'
                                    },
                                    {
                                        id: 2,
                                        label: 'Female'
                                    }
                                ]}
                            />
                        </div>
                        <div className="col-md-6 my-2 form-group">
                            <label className="form-label">Postal Code</label>
                            <input type="text"
                                   className="form-control"
                                   placeholder="Write"
                            />
                        </div>
                        <div className="col-md-12 my-2 form-group">
                            <label className="form-label">Education</label>
                            <textarea className="form-control" rows="6" placeholder="Write"></textarea>
                        </div>
                        <div className="col-md-12 my-2 form-group">
                            <label className="form-label">Work Experience</label>
                            <textarea className="form-control" rows="6" placeholder="Write"></textarea>
                        </div>
                        <div className="col-md-6 my-2 form-group">
                            <label className="form-label">Reference Id</label>
                            <input type="text"
                                   className="form-control"
                                   placeholder="Write"
                            />
                        </div>
                        <div className="col-md-6 my-2 form-group">
                            <label className="form-label">Find Of Work</label>
                            <input type="text"
                                   className="form-control"
                                   placeholder="Write"
                            />
                        </div>
                        <div className="col-md-6 my-2 form-group">
                            <label className="form-label">Photo</label>
                            <input type="file"
                                   className="form-control"
                            />
                        </div>
                        <div className="col-md-6 my-2 form-group">
                            <label className="form-label">Attachment</label>
                            <input type="file"
                                   className="form-control"
                            />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-6 offset-md-3 text-center">
                            <button type="submit" className="btn saveBtn">
                                Save
                            </button>
                            <button type="submit" className="btn viewProfile">
                                <Link to="/profile">
                                    View Profile
                                </Link>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;