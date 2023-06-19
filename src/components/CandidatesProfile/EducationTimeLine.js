import React from 'react';
import '../../assets/css/timeline.css';

const EducationTimeLine = ({educations}) => {
    return (
        <section className="my-3">
            <ul className="timeline">
                {
                    educations?.map(education => (
                        <li className="timeline-item mb-5" key={education.id}>
                            <h5 className="title">
                                {education.degree_name} &nbsp;&nbsp;
                                <span>{education.passing_year}</span>
                            </h5>
                            <p className="text-muted mb-2 fw-bold">{education.institute}</p>
                            <p className="text-muted">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dicta ipsum mollitia nam
                                omnis possimus quas ratione tenetur
                                vero voluptates? Assumenda culpa doloremque excepturi facere officia recusandae
                                repellendus, sed unde.
                            </p>
                        </li>
                    ))
                }
            </ul>
        </section>
    );
};

export default EducationTimeLine;