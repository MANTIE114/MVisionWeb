import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import './SpringFestivalEgg.css';

const SpringFestivalEgg = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (isHovered) {
            const count = 200;
            const defaults = {
                origin: { y: 0.9, x: 1 }
            };

            function fire(particleRatio, opts) {
                confetti({
                    ...defaults,
                    ...opts,
                    particleCount: Math.floor(count * particleRatio)
                });
            }

            fire(0.25, {
                spread: 26,
                startVelocity: 55,
            });
            fire(0.2, {
                spread: 60,
            });
            fire(0.35, {
                spread: 100,
                decay: 0.91,
                scalar: 0.8
            });
            fire(0.1, {
                spread: 120,
                startVelocity: 25,
                decay: 0.92,
                scalar: 1.2
            });
            fire(0.1, {
                spread: 120,
                startVelocity: 45,
            });
        }
    }, [isHovered]);

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
