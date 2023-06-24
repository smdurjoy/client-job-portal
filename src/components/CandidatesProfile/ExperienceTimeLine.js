import React from 'react';
import '../../assets/css/timeline.css';
import moment from "moment";

const ExperienceTimeLine = ({experiences}) => {
    return (<section className="my-3">
        <ul className="timeline">
            {experiences?.map(experience => (<li className="timeline-item mb-5" key={experience.id}>
                <h5 className="title">
                    {experience.designation} &nbsp;&nbsp;
                    <span>{moment(experience.start_at).format('ll')} -
                        {experience.end_date ? moment(experience.end_date).format('ll') : 'Present'}
                     </span>
                </h5>
                <p className="text-muted mb-2 fw-bold">{experience.company_name}</p>
                <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dicta ipsum mollitia nam
                    omnis possimus quas ratione tenetur
                    vero voluptates? Assumenda culpa doloremque excepturi facere officia recusandae
                    repellendus, sed unde.
                </p>
            </li>))}
        </ul>
    </section>);
};

export default ExperienceTimeLine;