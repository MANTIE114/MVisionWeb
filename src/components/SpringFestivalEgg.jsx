import React, { useState } from 'react';
import './SpringFestivalEgg.css';

const SpringFestivalEgg = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isHovered, setIsHovered] = useState(false);

    if (!isVisible) return null;

    return (
        <div
            className="spring-egg-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`spring-egg-content ${isHovered ? 'expanded' : ''}`}>
                <div className="egg-icon-wrapper">
                    <div className="easter-egg-icon">
                        <img src="/assets/easter-egg-color.svg" alt="Easter Egg" style={{ width: '100%', height: '100%' }} />
                    </div>
                </div>

                <div className="egg-text">
                    <span className="egg-title">除夕跨年用 MVision</span>
                    <span className="egg-desc">一些小彩蛋等你来发现</span>
                </div>

                <button
                    className="egg-close"
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsVisible(false);
                    }}
                >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default SpringFestivalEgg;
