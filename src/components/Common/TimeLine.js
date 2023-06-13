import React from 'react';
import '../../assets/css/timeline.css';

const TimeLine = ({items}) => {
    return (
        <section className="my-3">
            <ul className="timeline">
                {
                    items.map(item => (
                        <li className="timeline-item mb-5">
                            <h5 className="title">
                                {item.title} &nbsp;&nbsp;
                                <span>{(item.start_date && item.end_date) ? item.start_date + ' - ' + item.end_date : ''}</span>
                                <span>{(item.start_date && !item.end_date) ? item.start_date : ''}</span>
                            </h5>
                            <p className="text-muted mb-2 fw-bold">{item.subtitle}</p>
                            <p className="text-muted">
                                {item.description}
                            </p>
                        </li>
                    ))
                }
            </ul>
        </section>
    );
};

export default TimeLine;