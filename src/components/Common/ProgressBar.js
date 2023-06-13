import React from 'react';
import '../../assets/css/progressBar.css';

const ProgressBar = () => {
    return (
        <div className="progress-section" data-aos="fade-left" data-aos-once="true">
            <div className="task-progress">
                <p>Frontend
                    <span>80%</span>
                </p>
                <progress className="progress" max="100" value="80"></progress>
            </div>
            <div className="task-progress">
                <p>Backend
                    <span>50%</span>
                </p>
                <progress className="progress" max="100" value="50"></progress>
            </div>
            <div className="task-progress">
                <p>UI/UX
                    <span>75%</span>
                </p>
                <progress className="progress" max="100" value="75"></progress>
            </div>
        </div>
    );
};

export default ProgressBar;