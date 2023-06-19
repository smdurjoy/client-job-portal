import React from 'react';
import '../../assets/css/progressBar.css';

const ProgressBar = ({skills}) => {
    return (
        <div className="progress-section" data-aos="fade-left" data-aos-once="true">
            {skills?.map(skill => (
                <div className="task-progress" key={skill.id}>
                    <p>
                        {skill.skill_name}
                        <span>80%</span>
                    </p>
                    <progress className="progress" max="100" value="80"></progress>
                </div>
            ))}
        </div>
    );
};

export default ProgressBar;