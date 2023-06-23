import React from 'react';
import client1 from '../../images/client1.jpeg'
import Rating from "../Common/Rating";
import {Link} from "react-router-dom";

const AppliedCandidates = ({title, candidates, jobId}) => {
    return (
        <div className="candidates">
            <div className="container pb-5">
                <h4 className="workerTitle">{title}</h4>
                <div className="row">
                    <div className="col-md-8">
                        <div className="row">
                            {
                                candidates.length ?
                                    candidates?.map(candidate => (
                                        <div className="col-md-6 mt-2">
                                            <div className="card text-center">
                                                <div className="card-body p-0">
                                                    <img src={client1} alt="candidate"/>
                                                    <h5 className="card-title">{candidate.first_name} {candidate.last_name}</h5>
                                                    <span className="card-text">User Experience Design Essentials</span>
                                                    <Rating/>
                                                    <div className="skills mt-3">
                                                        {
                                                            candidate.skill_set?.map(skill => (
                                                                <span>{skill.skill_name}</span>
                                                            ))
                                                        }
                                                    </div>
                                                    <div className="mt-4 mb-4 subTitle">
                                                        <Link to={'/candidate-profile/' + candidate.id + '/' + jobId}>
                                                            View Profile >>>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                    : <p>No Candidates Found!</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppliedCandidates;